"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Inputs = {
  telefone: number;
};

export default function HomeComponent() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const values = Object.values(data);
    const isZero = values.every((value) => !value);
    const isAbove9 = values.some((value) => value > 9);

    if (isAbove9) {
      toast.error("Insira um número de telefone válido");
      return;
    }
    if (isZero) {
      toast.error("Insira um número de telefone para continuar");
      return;
    }
    if (typeof window !== "undefined") {
      console.log(data);
      var to_storage = { telefone: data.telefone };
      localStorage.setItem("dados_descartante", JSON.stringify(to_storage));
    }

    router.push("/ponto-coleta/descarte");
  };

  function getData() {
    if (typeof window !== "undefined") {
      const coleta_telefone = localStorage.getItem("dados_descartante");
      if (coleta_telefone != null) {
        console.log(coleta_telefone);
        const data = JSON.parse(coleta_telefone);
        return data.telefone;
      }
    }
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
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Telefone
          </label>
          <input
            {...register("telefone", {
              value: getData(),
            })}
            inputMode="numeric"
            type="number"
            name="telefone"
            id="telefone"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
        </div>
        {errors.telefone && errors.telefone.type === "required" && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Por favor</span> Insira um número de
            telefone
          </p>
        )}
        <div className="p-4">
          <label></label>
          <button
            type="submit"
            //  className="mt-4 w-full rounded-md bg-[#002266] py-2 font-bold text-white hover:bg-[#64a23d]"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
          >
            {" "}
            Continuar
          </button>
        </div>
      </form>
    </>
  );
}
