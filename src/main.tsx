import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { logErro } from "@core/lib/activityLog";

// Captura global de erros não tratados (fora da árvore React / promises rejeitadas)
window.addEventListener("error", (e) => {
  logErro(e.message, e.error?.stack, { tipo: "window.onerror" });
});
window.addEventListener("unhandledrejection", (e) => {
  const reason = e.reason;
  logErro(
    reason?.message ?? String(reason),
    reason?.stack,
    { tipo: "unhandledrejection" },
  );
});

createRoot(document.getElementById("root")!).render(<App />);
