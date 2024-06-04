"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Feedback() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const telefone = localStorage.getItem("dados_descartante");
    const dados_descarte = localStorage.getItem("dados_descarte");
    const aceitou_termos = localStorage.getItem("aceitou_termos");

    if (!telefone || !dados_descarte || aceitou_termos === null) {
      router.replace("/ponto-coleta");
      return;
    }

    const telefoneParsed = JSON.parse(telefone).telefone;
    const dadosParsed = JSON.parse(dados_descarte);
    const termosParsed = aceitou_termos === "true";

    const data = {
      telefone: telefoneParsed,
      ...dadosParsed,
      aceitou_termos: termosParsed,
      Created: 'x-sheetmonkey-current-date-time'
    };

    axios
      .post("https://api.sheetmonkey.io/form/qiYSNzwERRJEutYCC7udk4", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.clear();
          setMessage(
            termosParsed
              ? "Obrigado por aceitar os termos e realizar o descarte de resíduos!"
              : "Você não aceitou os termos, mas seus dados de descarte foram registrados.",
          );
        } else {
          setMessage(
            "Ocorreu um erro ao registrar seus dados. Por favor, tente novamente.",
          );
        }
      })
      .catch(() => {
        setMessage(
          "Ocorreu um erro ao registrar seus dados. Por favor, tente novamente.",
        );
      });
  }, [router]);

  const returnHome = () => {
    router.push("/ponto-coleta");
  };

  return (
    <>
      <form
        action="https://api.sheetmonkey.io/form/vB1pUYCBvUqnSarEvAgsd6"
        method="post"
      >
        <input
          type="hidden"
          name="Created"
          value="x-sheetmonkey-current-date-time"
        />
      </form>

      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {message}
        </h2>
        <button
          onClick={returnHome}
          className="group relative mb-8 mt-4 flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
        >
          Voltar ao início
        </button>
      </div>
    </>
  );
}
