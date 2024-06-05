"use client";

import { SidebarProvider, useSidebarContext } from "./sidebar/SidebarContext";
import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { DashboardNavbar } from "../components/navbar/navbar";
import { DashboardSidebar } from "./sidebar/sidebar";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  // Fornece o contexto da barra lateral para filhos
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
};

// Define o componente de conteúdo do layout "DashboardLayoutContent"
const DashboardLayoutContent: FC<PropsWithChildren> = function ({ children }) {
  // Obtém o estado de abertura da barra lateral do contexto
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      {/* Barra de navegação */}
      <DashboardNavbar />

      {/* Conteúdo principal com barra lateral */}
      <div className="mt-16 flex items-start">
        <DashboardSidebar />

        {/* Conteúdo principal dinâmico */}
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
