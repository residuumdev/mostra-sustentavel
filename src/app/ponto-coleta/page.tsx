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
      <div className="m-auto max-w-2xl px-4 py-8 lg:py-16">
        Para participar da campanha, insira seu número de telefone para que
        possamos entrar em contato caso você seja o sorteado(a).
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 sm:col-span-2">
          <label
            htmlFor="telefone"
            className="mb-2 block text-sm font-medium text-gray-900 "
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
            placeholder="(DDD) 0000-0000"
            className="focus:ring-primary-600 focus:border-primary-600    block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
          />
        </div>
        {errors.telefone && errors.telefone.type === "required" && (
          <p className="mt-2 text-sm text-red-600 ">
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
            Continuar
          </button>
        </div>
      </form>
    </>
  );
}
