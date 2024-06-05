"use client";

import { useSidebarContext } from "./SidebarContext";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import {
  MdOutlineInput,
  MdOutlineInventory2,
  MdHistory,
  MdPieChart,
} from "react-icons/md";
import { TbUser, TbLogout, TbTruck } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar: FC = function () {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <Sidebar
        aria-label="Sidebar de navegação lateral"
        collapsed={isCollapsed}
        id="sidebar"
        className={twMerge(
          "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 lg:flex",
          isCollapsed && "hidden w-16",
        )}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={MdPieChart}>
              Visão Geral
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={TbTruck}>
              Inserir Coleta
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={MdOutlineInventory2}>
              Estoque
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={MdOutlineInput}>
              Destinação
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={MdHistory}>
              Histórico
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
