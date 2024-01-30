"use client";

import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";

function CreateUser() {
  const [data, setData] = useState({ name: "", dni: "", password: "" });

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (data.name.length > 5 && data.dni.length === 8 && data.password) {
      setIsLoading(true);
      try {
        await axios.post("/api/users", data);
        redirect("/system/user");
      } catch (error) {
        settingError();
      }
    } else settingError();
  }

  function settingError() {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 3000);
  }

  return (
    <main className=" w-full p-4">
      <section className="flex flex-col">
        <h1 className="text-xl font-semibold">Registrar usuario</h1>
        <form
          className="mt-8 border rounded-md p-4 shadow-md flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="" className="text-slate-700">
              Nombres completos
            </label>
            <input
              autoComplete="off"
              className="px-2 py-1 rounded-md outline-none border border-slate-400 mt-2 "
              type="text"
              name=""
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-slate-700 ">
              Documento de indentifación
            </label>
            <input
              autoComplete="off"
              className="px-2 py-1 rounded-md outline-none border border-slate-400 mt-2 "
              type="text"
              name=""
              onChange={(e) => setData({ ...data, dni: e.target.value })}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-red-700 ">
              Contraseña de validación
            </label>
            <span className="text-sm text-slate-500">
              ( Use su contraseña para poder verificar que usted tiene el rol de
              administrador )
            </span>
            <input
              autoComplete="off"
              className="px-2 py-1 rounded-md outline-none border border-slate-400 mt-2 "
              type="text"
              name=""
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <div className="min-h-20 flex flex-col">
            {isLoading ? (
              <button className="bg-sky-700 opacity-85   text-white rounded-md px-2 py-1 w-fit">
                Guardando cambios
              </button>
            ) : (
              <button className="bg-sky-700 text-white rounded-md px-2 py-1 w-fit">
                Registrar usuario
              </button>
            )}

            <span className="mt-4 text-red-600">
              {isError ? "Ocurrio un error al procesar el formulario" : ""}
            </span>
          </div>
        </form>
      </section>
    </main>
  );
}

export default CreateUser;
