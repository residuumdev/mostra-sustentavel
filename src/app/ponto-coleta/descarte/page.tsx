"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

type Inputs = {
  papel: number;
  metal: number;
  vidro: number;
  plastico: number;
};

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
      return;
    }
  }, []);

  function HandleForm(data: Inputs) {
    const values = Object.values(data);
    const isZero = values.every((value) => !value);
    const isAbove10 = values.some((value) => value > 10);

    if (isAbove10) {
      toast.error("A quantidade máxima por descarte é de 10 unidades");
      return;
    }
    if (isZero) {
      toast.error("Insira pelo menos uma quantidade a ser reciclada");
      return;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("dados_descarte", JSON.stringify(data));
      router.push("/ponto-coleta/termos");
    }
  }

  return (
    <div className="">
      <div className="px-10 py-4">
        <div>
          Agora informe o tipo de resíduo e a quantidade que você quer
          descartar.
        </div>
      </div>
      <form className="px-10" onSubmit={handleSubmit(HandleForm)}>
        <div className="mb-5">
          <div className="relative">
            <input
              type="number"
              id="floating_outlined"
              className="peer block w-full appearance-none rounded-lg border-2 border-blue-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              inputMode="numeric"
              {...register("papel", {})}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-blue-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
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
              className="peer block w-full appearance-none rounded-lg border-2 border-yellow-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-yellow-200 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              inputMode="numeric"
              {...register("metal", {})}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-yellow-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-yellow-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-yellow-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
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
              className="peer block w-full appearance-none rounded-lg border-2 border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-200 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-green-500"
              placeholder=" "
              inputMode="numeric"
              {...register("vidro", {})}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-green-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-green-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
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
              className="peer block w-full appearance-none rounded-lg border-2 border-red-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-red-500"
              placeholder=" "
              inputMode="numeric"
              {...register("plastico", {})}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-red-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-red-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-red-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Plástico
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 content-start gap-4 px-4 py-4">
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
