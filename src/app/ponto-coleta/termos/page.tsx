"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Termo from "../components/termo";

export default function TermosPonto() {
  const router = useRouter();

  useEffect(() => {
    // check dados tela anterior
    const currentStep = localStorage.getItem("dados_descarte");
    if (!currentStep) {
      router.replace("/ponto-coleta");
      return;
    }
  }, [router]);

  const saveTerms = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aceitou_termos", "true");
      router.replace("/ponto-coleta/feedback");
    }
  };

  const nextPage = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aceitou_termos", "false");
      router.push("/ponto-coleta/feedback");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Termos e Condições
        </h2>
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
          Precisamos da sua autorização para entrar em contato com você, por
          favor leia o termo de consentimento e as regras da campanha
        </div>
        <Termo />
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={nextPage}
            className="group relative mb-8 mt-4 flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
          >
            Não Aceitar
          </button>
          <button
            onClick={saveTerms}
            className="group relative mb-8 mt-4 flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
          >
            Aceitar
          </button>
        </div>
      </div>
    </>
  );
}
