import { supabase } from "@core/integrations/supabase/client";
import type { Json } from "@core/integrations/supabase/types";

/**
 * Logging de atividade do usuário (acessos, navegação) e de erros do frontend.
 *
 * Grava em `pdi_logs` via RPC `pdi_registrar_log` (SECURITY DEFINER) — o servidor
 * carimba user_id/email a partir de auth.uid(), então o cliente não forja identidade.
 *
 * Fail-safe: NUNCA lança. Se o log falhar, apenas registra um warning no console
 * para não quebrar a experiência do usuário por causa de telemetria.
 */

type Nivel = "info" | "warning" | "error";

interface RegistrarArgs {
  categoria: "acesso" | "erro";
  acao: string;
  nivel?: Nivel;
  recurso?: string | null;
  recurso_id?: string | null;
  detalhes?: Record<string, unknown> | null;
}

async function registrar({
  categoria,
  acao,
  nivel = "info",
  recurso = null,
  recurso_id = null,
  detalhes = null,
}: RegistrarArgs): Promise<void> {
  try {
    const { error } = await supabase.rpc("pdi_registrar_log", {
      _categoria: categoria,
      _acao: acao,
      _nivel: nivel,
      _recurso: recurso,
      _recurso_id: recurso_id,
      _detalhes: (detalhes ?? null) as Json,
      _user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
    if (error) console.warn("[activityLog] falha ao registrar log:", error.message);
  } catch (e) {
    console.warn("[activityLog] erro inesperado ao registrar log:", e);
  }
}

/** Registra um evento de acesso/navegação (login, logout, page_view). */
export function logAcesso(
  acao: "login" | "logout" | "page_view",
  rota?: string,
  detalhes?: Record<string, unknown>,
): void {
  void registrar({
    categoria: "acesso",
    acao,
    nivel: "info",
    recurso: rota ?? null,
    detalhes: detalhes ?? null,
  });
}

/** Registra um erro de runtime do frontend. */
export function logErro(
  message: string,
  stack?: string,
  contexto?: Record<string, unknown>,
): void {
  void registrar({
    categoria: "erro",
    acao: "error",
    nivel: "error",
    recurso: typeof window !== "undefined" ? window.location?.pathname : null,
    detalhes: { message, stack: stack ?? null, ...(contexto ?? {}) },
  });
}
