"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  telefone: string;
};

export default function HomeComponent() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (typeof window !== "undefined") {
      const to_storage = { telefone: data.telefone };
      localStorage.setItem("dados_descartante", JSON.stringify(to_storage));
      router.push("/ponto-coleta/descarte");
    }
  };

  function getData() {
    if (typeof window !== "undefined") {
      const coleta_telefone = localStorage.getItem("dados_descartante");
      if (coleta_telefone != null) {
        const data = JSON.parse(coleta_telefone);
        return data.telefone;
      }
    }
    return "";
  }

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        Para participar da campanha, insira seu número de telefone para que
        possamos entrar em contato caso você seja o sorteado(a).
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 sm:col-span-2">
          <label
            htmlFor="telefone"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Telefone
          </label>
          <input
            {...register("telefone", { required: true })}
            defaultValue={getData()}
            type="text"
            name="telefone"
            id="telefone"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          {errors.telefone && (
            <span className="text-red-600">Esse campo é obrigatório</span>
          )}
        </div>
        <button
          type="submit"
          className="group relative mb-8 mt-4 flex w-1/2 justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
        >
          Continuar
        </button>
      </form>
    </>
  );
}
