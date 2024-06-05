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
      Created: "x-sheetmonkey-current-date-time",
    };

    axios
      .post("https://api.sheetmonkey.io/form/qiYSNzwERRJEutYCC7udk4", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.clear();
          setMessage(
            termosParsed
              ? "Você está concorrendo e desejamos boa sorte! Se você for o vencedor, a nossa equipe entrará em contato com você pelo número de telefone que você cadastrou."
              : "Você destinou seu resíduo de forma correta!",
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

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Parabéns!
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{message}</p>
      </div>
    </div>
  );
}
