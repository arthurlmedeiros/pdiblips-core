import { Component, type ErrorInfo, type ReactNode } from "react";
import { logErro } from "@core/lib/activityLog";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * ErrorBoundary global — captura erros de renderização da árvore React,
 * registra em `pdi_logs` (categoria 'erro') e exibe um fallback amigável PT-BR.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logErro(error.message, error.stack, { componentStack: info.componentStack });
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="max-w-md text-center space-y-4">
            <h1 className="font-display font-bold text-2xl text-foreground">
              Algo deu errado
            </h1>
            <p className="text-muted-foreground text-sm">
              Ocorreu um erro inesperado nesta página. O incidente foi registrado.
              Tente recarregar — se o problema persistir, contate o administrador.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
