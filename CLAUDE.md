# Core — PDI Blips

## Visão Geral

Módulo de infraestrutura compartilhada da plataforma PDI Blips. Contém o cliente Supabase (singleton), o contexto de autenticação, utilitários globais, definição de rotas e os tipos TypeScript gerados automaticamente pelo Supabase.

---

## Arquivos

| Arquivo | Descrição |
|---------|-----------|
| `src/integrations/supabase/client.ts` | Instância singleton do Supabase JS v2. Lê `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` do ambiente. |
| `src/integrations/supabase/types.ts` | Tipos TypeScript gerados automaticamente — **não editar manualmente**. Regenerar via `npx supabase gen types typescript`. |
| `src/contexts/AuthContext.tsx` | Contexto React que expõe `user`, `roles`, `loading` e funções `signIn`/`signOut`. Envolve toda a aplicação. |
| `src/App.tsx` | Definição de todas as rotas com React Router DOM v6. Rotas protegidas usam `ProtectedRoute`. |
| `src/main.tsx` | Entry point React — monta `<App />` com `QueryClientProvider` e `AuthProvider`. |
| `src/hooks/use-mobile.tsx` | Hook utilitário para detectar viewport mobile (`useIsMobile`). |
| `src/hooks/use-toast.ts` | Hook wrapper para `sonner` — usado em toda a aplicação para toasts. |
| `src/lib/utils.ts` | Função `cn()` (classnames + tailwind-merge) e outros utilitários globais. |

---

## Contexto Técnico

### Supabase Client
- É um **singleton** — sempre importar de `@core/integrations/supabase/client`
- Nunca instanciar um segundo cliente em outros módulos
- Credenciais via variáveis de ambiente (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`)
- **Nunca hardcodar** URLs ou chaves no código

### AuthContext
- Provê `user` (Supabase `User`), `roles` (`pdi_role[]`), `loading` (boolean)
- Funções disponíveis: `signIn(email, password)`, `signOut()`
- Roles são carregadas da tabela `pdi_roles` após autenticação
- Role padrão no signup: `gerente`

### React Router DOM v6
- Todas as rotas definidas em `App.tsx`
- `ProtectedRoute` redireciona para `/login` se `user` for null
- Rotas autenticadas ficam sob `/app/*`

### TanStack React Query v5
- `QueryClient` instanciado em `main.tsx`
- Query keys seguem padrão `["pdi_nome_tabela", ...filtros]`
- Sem `staleTime` global — cada hook define o próprio

---

## Imports

Ao consumir este módulo em outros módulos do monorepo, usar o alias `@core/*`:

```ts
import { supabase } from '@core/integrations/supabase/client'
import { useAuth } from '@core/contexts/AuthContext'
import { cn } from '@core/lib/utils'
import type { Database } from '@core/integrations/supabase/types'
```

---

## Restrições

1. **Singleton obrigatório** — nunca criar uma segunda instância do Supabase client
2. **Sem hardcode de env vars** — sempre usar `import.meta.env.VITE_*`
3. **`ProtectedRoute` sempre redireciona para `/login`** — não alterar o destino de redirect sem atualizar todas as rotas
4. **`types.ts` é gerado** — modificações manuais serão sobrescritas no próximo `gen types`
5. **Não adicionar estado global** (Redux/Zustand) — usar React Query para server state e Context para auth

---

## Modo Standalone vs Delegado

**Standalone**: clonar este repositório diretamente e trabalhar nos arquivos de infraestrutura de forma isolada. Útil para ajustes no cliente Supabase, AuthContext ou utilitários sem precisar do monorepo completo.

**Delegado**: o orquestrador do projeto PDI Blips injeta o contexto deste módulo em tempo de execução ao coordenar tarefas que envolvam múltiplos módulos. Nesse modo, as interfaces e contratos exportados por `@core/*` são consumidos pelos demais módulos como dependência.
