import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbUser, TbLogout, TbSettings } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";

const DropdownUser = () => {
  // Define o estado do dropdown (aberto ou fechado)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Define o estado do nome do usuário
  const [userName, setUserName] = useState("");

  // Cria refs para o trigger e o dropdown
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // Carrega o nome do usuário do localStorage quando o componente é montado
  useEffect(() => {
    // Load username from localStorage when component mounts
    const storedUserName = localStorage.getItem("nome_usuario");
    if (storedUserName) {
      const parsedUserName = JSON.parse(storedUserName);
      setUserName(parsedUserName);
    }
  }, []);

  // Função para realizar o logout
  const handleLogout = () => {
    localStorage.removeItem("nome_usuario");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Função para alternar o estado do dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Fecha o dropdown quando clicado fora dele
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  // Fecha o dropdown quando a tecla Esc é pressionada
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        {/* Nome do usuário (visível apenas em telas maiores) */}
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black">
            {userName}
          </span>
          <span className="block text-xs">Perfil</span>
        </span>

        {/* Foto do usuário */}
        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/images/logos/simbolo-isolado-residuum.jpg"}
            style={{
              width: "auto",
              height: "auto",
            }}
            className="rounded-full"
            alt="User"
          />
        </span>

        {/* Ícone de seta para baixo (visível apenas em telas menores) */}
        <svg
          className="fill-current hidden sm:block"
          width={12}
          height={8}
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* Dropdown (visível apenas quando aberto) */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`w-62.5 border-stroke shadow-default absolute right-0 mt-4 flex flex-col rounded-sm border bg-white ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        {/* Lista de opções */}
        <ul className="border-stroke py-7.5 flex flex-col gap-5 border-b px-6">
          <li>
            <Link
              href="/profile"
              className="hover:text-primary flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out lg:text-base"
            >
              <TbUser />
              Editar Perfil
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-primary flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out lg:text-base"
            >
              <TiContacts />
              Vínculos
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="hover:text-primary flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out lg:text-base"
            >
              <TbSettings />
              Configurações
            </Link>
          </li>
        </ul>
        {/* Botão de logout */}
        <button
          onClick={handleLogout}
          className="hover:text-primary flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out lg:text-base"
        >
          <TbLogout />
          Sair
        </button>
      </div>
      {/* <!-- Fim do Dropdown --> */}
    </div>
  );
};

export default DropdownUser;
