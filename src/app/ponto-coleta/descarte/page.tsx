"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { pages } from "next/dist/build/templates/app-page";
import { FloatingLabel } from "flowbite-react";
import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';

type Inputs = {
    papel: number,
    metal: number,
    vidro: number,
    plastico: number
  }

export default function Component() {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();  
  
  
  useEffect(() => {
    // check dados tela anterior
    const currentStep = localStorage.getItem("dados_descartante");
    if (!currentStep) {
      router.replace("/ponto-coleta");
      return
    }
    },[]);
  
  function HandleForm (data: Inputs) {
    const values = Object.values(data);
    const isZero = values.every((value) => !value)
    const isAbove10 = values.some((value) => value > 10)

    if(isAbove10) {
      toast.error("A quantidade máxima por descarte é de 10 unidades")
      return
    }
    if (isZero) {
      toast.error("Insira pelo menos uma quantidade a ser reciclada")
      return
    } 
    if(typeof window !== 'undefined'){
        localStorage.setItem("dados_descarte", JSON.stringify(data));
        router.push("/ponto-coleta/termos")
    }
  }


  return (
<div className="">
  <div className="py-4 px-10">
    <div>
    Agora informe o tipo de resíduo e a quantidade que você quer descartar.
    </div>
  </div>
  <form className="px-10" onSubmit={handleSubmit(HandleForm)}>

  <div className="mb-5">
  <div className="relative">
  <input
    type="number"
    id="floating_outlined"
    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-blue-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
    inputMode="numeric"
    {...register('papel', {})}
  />
  <label
    htmlFor="floating_outlined"
    className="absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
  >
    Papel
  </label>
</div>
  </div>

  <div className="mb-5">
  <div className="relative">
  <input
    type="number"
    id="floating_outlined"
    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-yellow-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-200 peer"
    placeholder=" "
    inputMode="numeric"
    {...register('metal', {})}
  />
  <label
    htmlFor="floating_outlined"
    className="absolute text-sm text-yellow-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
  >
    Metal
  </label>
</div>
  </div>

  <div className="mb-5">
  <div className="relative">
  <input
    type="number"
    id="floating_outlined"
    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-200 peer"
    placeholder=" "
    inputMode="numeric"
    {...register('vidro', {})}
  />
  <label
    htmlFor="floating_outlined"
    className="absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
  >
    Vidro
  </label>
</div>
  </div>

  <div className="mb-5">
  <div className="relative">
  <input
    type="number"
    id="floating_outlined"
    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-red-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
    placeholder=" "
    inputMode="numeric"
    {...register('plastico', {})}
  />
  <label
    htmlFor="floating_outlined"
    className="absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
  >
    Plástico
  </label>
</div>
  </div>
    <div className="grid grid-cols-2 gap-4 content-start py-4 px-4">
      <button
        onClick={() => reset()}
        type="reset"
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#5E5E64] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
      >
        Limpar
      </button>
      <button
        type="submit"

        className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
      >
        Continuar
      </button>
    </div>
  </form>
</div>
  );
}
