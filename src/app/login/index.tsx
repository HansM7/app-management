"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    dni: "",
    password: "",
  });

  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await signIn("credentials", {
      dni: data.dni,
      password: data.password,
      redirect: false,
    });

    if (res?.ok) router.push("/system");
    else alert("Credemciales incorrectas");
  }

  return (
    <section className="w-[20rem] mt-12">
      <h1 className="font-semibold text-2xl text-center">
        Verificación de usuario
      </h1>
      <form
        className="flex flex-col shadow-lg rounded-lg p-4 mt-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Ingrese DNI
          </label>
          <input
            className="px-2 py-1 rounded-md outline-none border border-slate-400 mt-2 "
            type="text"
            name=""
            onChange={(e) => setData({ ...data, dni: e.target.value })}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="" className="text-slate-700 font-semibold">
            Ingrese contraseña
          </label>
          <input
            className="px-2 py-1 rounded-md outline-none border border-slate-400 mt-2"
            type="password"
            name=""
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="mt-4">
          <button className="bg-sky-700 text-white px-2 py-1 rounded-md font-semibold">
            Ingresar
          </button>
        </div>
      </form>
    </section>
  );
}
export default Login;
