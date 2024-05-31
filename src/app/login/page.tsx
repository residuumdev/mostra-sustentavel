"use client";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { IoFingerPrintOutline } from "react-icons/io5";
import { HiLockClosed } from "react-icons/hi2";

const LOGIN_URL = "http://localhost:8080/login";

// Definindo um tipo para os códigos de erro
type ErrorCode = 200 | 400 | 401 | 403 | 404;

// Definindo o tipo para as mensagens de erro
type ErrorMessages = {
  [key in ErrorCode]: string;
} & {
  default: string;
};

const errorMessages: ErrorMessages = {
  200: "Sucesso!",
  400: "Por favor, preencha todos os campos.",
  401: "Senha incorreta.",
  403: "Conta encontrada, mas o usuário está inativo. Entre em contato com o suporte.",
  404: "Conta não encontrada, verifique os dados de login.",
  default:
    "Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.",
};

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<{ code: ErrorCode; token?: string }>(
        LOGIN_URL,
        {
          nome_usuario: username,
          senha_usuario: password,
        },
      );

      const { code, token, nome_usuario } = response.data as {
        code: ErrorCode;
        token?: string;
        nome_usuario: string;
      };

      console.log("Response Code:", code);

      if (code === 200) {
        Swal.fire("sucesso");
        router.push("/admnistrador");
        localStorage.setItem("nome_usuario", JSON.stringify(nome_usuario));
        localStorage.setItem("token", JSON.stringify(token));
      } else {
        const errorMessage = errorMessages[code] || errorMessages.default;
        Swal.fire(errorMessage);
        setError(errorMessage);
      }
    } catch (err: any) {
      if (err.response.status === 403) {
        const errorMessage = errorMessages[403] || errorMessages.default;
        Swal.fire(errorMessage);
        setError(errorMessage);
      } else if (err.response.status === 401) {
        const errorMessage = errorMessages[401] || errorMessages.default;
        Swal.fire(errorMessage);
        setError(errorMessage);
      } else {
        console.error("Error:", err);
        setError(errorMessages.default);
      }
    }
  };

  return (
    <>
      <section id="login" className="h-screen md:flex">
        <div className="relative hidden w-1/2 items-center justify-around overflow-hidden bg-[#64a23d] bg-gradient-to-tr md:flex">
          <div className="m-16">
            <img
              src="/images/logos/logo-residuum-texto-branco.png"
              alt="logo residuum"
              className="w-5/5"
            />
            <br />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white py-10 md:w-1/2">
          <h2 className="mb-1 text-2xl font-bold text-gray-800">Bem Vindo!</h2>
          <p className="mb-7 text-sm font-normal text-gray-600">
            Entre com sua conta.
          </p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex items-center rounded-2xl border-2 px-3 py-2">
                <IoFingerPrintOutline className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="ml-2 rounded-2xl border-none pl-2 outline-none focus:z-10 focus:border-[#64a23d] focus:outline-none focus:ring-[#64a23d]"
                  id="username"
                  placeholder="Nome de usuário"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center rounded-2xl border-2 px-3 py-2">
                <HiLockClosed className="h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  className="ml-2 rounded-2xl border-none pl-2 outline-none focus:z-10 focus:border-[#64a23d] focus:outline-none focus:ring-[#64a23d]"
                  id="password"
                  placeholder="Senha"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              //  className="mt-4 w-full rounded-md bg-[#002266] py-2 font-bold text-white hover:bg-[#64a23d]"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
            >
              Entrar
            </button>
            <hr className="my-4" />
            <span className="cursor-pointer text-sm text-black hover:underline">
              Esqueceu a senha?
            </span>
          </form>
        </div>
      </section>
    </>
  );
}
