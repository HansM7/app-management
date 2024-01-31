"use client";

import { useSession } from "next-auth/react";

function ErrorAuthorization() {
  const { data: session, status } = useSession();

  return (
    <main className=" w-full p-4">
      <div className="flex flex-col">
        <h1 className="text-2xl text-red-500 font-semibold">
          {" "}
          Error de autorización
        </h1>

        <p className="mt-4 text-slate-500">
          Usuario <span className="text-red-500">{session?.user.name}</span>{" "}
          usted{" "}
          <span className="font-semibold">
            ha intentando ingresar a una sección no permitida{". "}
          </span>{" "}
          Recuerda que las actividades no autorizadas no estan permitidas, se
          enviaran reportes en base a la consecuencia de la misma.
        </p>
      </div>
    </main>
  );
}

export default ErrorAuthorization;
