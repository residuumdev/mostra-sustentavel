"use client";
import { useForm, SubmitHandler } from "react-hook-form";
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
    const currentStep = localStorage.getItem("dados_descartante");
    if (!currentStep) {
      router.replace("/ponto-coleta");
      return;
    }
  }, [router]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (typeof window !== "undefined") {
      if (!data.papel && !data.metal && !data.vidro && !data.plastico) {
        toast.error("Você deve informar pelo menos um resíduo.");
        return;
      }
      localStorage.setItem("dados_descarte", JSON.stringify(data));
      router.push("/ponto-coleta/termos");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        Agora informe o tipo de resíduo e a quantidade que você quer descartar
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 sm:col-span-2">
          <label
            htmlFor="papel"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Papel (kg)
          </label>
          <input
            {...register("papel")}
            type="number"
            name="papel"
            id="papel"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          {errors.papel && (
            <span className="text-red-600">Esse campo é obrigatório</span>
          )}
        </div>

        <div className="p-4 sm:col-span-2">
          <label
            htmlFor="metal"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Metal (kg)
          </label>
          <input
            {...register("metal")}
            type="number"
            name="metal"
            id="metal"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          {errors.metal && (
            <span className="text-red-600">Esse campo é obrigatório</span>
          )}
        </div>

        <div className="p-4 sm:col-span-2">
          <label
            htmlFor="vidro"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Vidro (kg)
          </label>
          <input
            {...register("vidro")}
            type="number"
            name="vidro"
            id="vidro"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          {errors.vidro && (
            <span className="text-red-600">Esse campo é obrigatório</span>
          )}
        </div>

        <div className="p-4 sm:col-span-2">
          <label
            htmlFor="plastico"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Plástico (kg)
          </label>
          <input
            {...register("plastico")}
            type="number"
            name="plastico"
            id="plastico"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          {errors.plastico && (
            <span className="text-red-600">Esse campo é obrigatório</span>
          )}
        </div>

        <button
          type="submit"
          className="group relative mb-8 mt-4 flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
        >
          Informar resíduos
        </button>
      </form>
    </>
  );
}
