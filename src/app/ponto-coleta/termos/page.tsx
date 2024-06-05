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
        Precisamos da sua autorização para entrar em contato com você, por favor
        leia o termo de consentimento e as regras da campanha.
      </div>
      <Termo />

      <div className="grid grid-cols-2 content-start gap-4 px-4 py-4">
        <button
          onClick={nextPage}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#5E5E64] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
        >
          Não Aceitar
        </button>
        <button
          onClick={saveTerms}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
        >
          Aceito
        </button>
      </div>
    </>
  );
}
