"use client";

import { useSidebarContext } from "./SidebarContext";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { HiInbox, HiShoppingBag, HiTable, HiViewBoards } from "react-icons/hi";
import { TbUser, TbLogout } from "react-icons/tb";
import { MdPieChart } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar: FC = function () {
  // Obtém o estado de abertura da barra lateral do contexto
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      {/* Barra lateral */}
      <Sidebar
        aria-label="Sidebar de navegação lateral"
        collapsed={isCollapsed}
        id="sidebar"
        className={twMerge(
          "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 lg:flex",
          isCollapsed && "hidden w-16",
        )}
      >
        {/* Itens da barra lateral */}
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={MdPieChart}>
              Visão Geral
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label="Gerenciar">
              <Sidebar.Item href="#">Gerenciar Geradores</Sidebar.Item>
              <Sidebar.Item href="#">Gerenciar Transportadores</Sidebar.Item>
              <Sidebar.Item href="#">Gerenciar Destinadores</Sidebar.Item>
              <Sidebar.Item href="#">Gerenciar Admnistradores</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiInbox}>
              Relatórios
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Notificar usuários
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Auditoria
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={TbUser}>
              Editar Perfil
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={TbLogout}>
              Sair
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};
