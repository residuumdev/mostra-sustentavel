'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"


export default function FeedbackPonto() {
  const router = useRouter();
  const [data, setData] = useState("");

  // check dados pagina anterior
  const currentStep = localStorage.getItem("aceitou_termos");
  if (!currentStep) {
    router.replace("/ponto-coleta");
    return
  }


  useEffect(() => {
    const foo = localStorage.getItem("aceitou_termos");
    if(foo != null) {
      if(foo == "true") {
        setData("Você está concorrendo e desejamos boa sorte! Se você for o vencedor, a nossa equipe entrará em contato com você pelo número de telefone que você cadastrou.")
      } 
    }
  
    const dados_descartante = JSON.parse(localStorage.getItem("dados_descartante") || "{}")
    const aceitou_termos = localStorage.getItem("aceitou_termos")
  
    // pegar os dados do local storage
    const localData = {
      dados_descartante: dados_descartante.telefone,
      dados_descarte: JSON.parse(localStorage.getItem("dados_descarte") || "{}"),
      aceitou_termos: aceitou_termos,
      ponto_coleta_id: 1
    }
    
    const fetchData = async () => {
      try {
        await fetch('http://localhost:8888/coletas', {
          method: 'POST',
          body : JSON.stringify(
            localData
          )
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData()
  
    const timer = setTimeout(() => {
      localStorage.clear();
      router.replace('/ponto-coleta');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [])

    return(
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Parabéns!
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">    
      {data ? data : "Você destinou seu resíduo de forma correta!"}
    </p>
  </div>
</div>

    )
}