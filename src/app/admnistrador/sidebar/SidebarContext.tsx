"use client";

import { isBrowser } from "@/app/helpers/is-browser";
import { isSmallScreen } from "@/app/helpers/is-small-screen";
import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";

// Define a interface para o contexto da barra lateral
interface SidebarContextProps {
  isCollapsed: boolean; // Indica se a barra lateral está fechada
  setCollapsed: (isOpen: boolean) => void; // Função para alterar o estado da barra lateral
}
// Cria o contexto da barra lateral com valores iniciais vazios
const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps,
);

export const SidebarProvider: FC<PropsWithChildren> = function ({ children }) {
  // Obtém o caminho atual (ou '/' se não estiver no navegador)
  const location = isBrowser() ? window.location.pathname : "/";

  // Verifica se a barra lateral estava fechada anteriormente no localStorage (ou assume fechada)
  const storedIsCollapsed = isBrowser()
    ? localStorage.getItem("isSidebarCollapsed") === "true"
    : false;

  // Define o estado da barra lateral e função para alterá-lo
  const [isCollapsed, setCollapsed] = useState(storedIsCollapsed);

  // Fecha a barra lateral ao trocar de página na tela pequena
  useEffect(() => {
    if (isSmallScreen()) {
      setCollapsed(true);
    }
  }, [location]);

  // Fecha a barra lateral na tela pequena ao clicar no conteúdo principal
  useEffect(() => {
    function handleMobileTapInsideMain(event: MouseEvent) {
      const main = document.querySelector("#main-content");
      const isClickInsideMain = main?.contains(event.target as Node);

      if (isSmallScreen() && isClickInsideMain) {
        setCollapsed(true);
      }
    }

    // Adiciona listener para clique na tela
    document.addEventListener("mousedown", handleMobileTapInsideMain);

    // Função de limpeza para remover o listener
    return () => {
      document.removeEventListener("mousedown", handleMobileTapInsideMain);
    };
  }, []);

  // Atualiza o localStorage quando o estado da barra lateral muda
  useEffect(() => {
    localStorage.setItem("isSidebarCollapsed", isCollapsed ? "true" : "false");
  }, [isCollapsed]);

  // Fornece o contexto da barra lateral para os componentes filhos
  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Hook para acessar o contexto da barra lateral
export function useSidebarContext(): SidebarContextProps {
  // Obtém o contexto
  const context = useContext(SidebarContext);

  // Verifica se o contexto foi fornecido
  if (typeof context === "undefined") {
    throw new Error(
      "useSidebarContext deve ser usado dentro do provedor SidebarContext!",
    );
  }

  // Retorna o contexto
  return context;
}
