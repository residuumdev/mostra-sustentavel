"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation'



type Inputs = {
  telefone: string;
};

export default function TermosPonto() {

  const router = useRouter();
  function saveTerms() {
    localStorage.setItem("aceitou_termos","true");
    router.replace("/ponto-coleta/feedback")
  }

  function nextPage() {
    localStorage.setItem("aceitou_termos","false");
    router.push("/ponto-coleta/feedback")
  }

  // check dados tela anterior
  const currentStep = localStorage.getItem("dados_descarte");
  if (!currentStep) {
    router.replace("/ponto-coleta");
    return
  }

  return (
    <>
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        Para realizar o descarte, insira seu número de telefone no primeiro campo e após informe os resíduos que está descartando, clicando nos botões dos respectivos resíduos que você tiver para descartar. (Texto será alterado).
        </div>
          <div className="grid grid-cols-2 gap-4 content-start py-4 px-4">
          <button onClick={nextPage}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#5E5E64] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
            > Não Aceitar
            </button>
          <button onClick={saveTerms}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
            > Aceito
            </button>
        </div>
        </>
  );

}