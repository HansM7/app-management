"use client";

function HomeAdmin() {
  // consumir info de base de datos
  return (
    <main className="w-full p-4">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-row justify-between  items-center shadow-md px-2 py-2 rounded-md border">
          <span className="font-semibold text-slate-600">
            Ordenes de trabajo
          </span>
          <span className="bg-red-300 p-1 rounded-md text-sm w-fit ">
            PENDIENTE
          </span>
          <span className="text-red-500 font-semibold">23</span>
        </div>
        <div className="w-full flex flex-row justify-between  items-center shadow-md px-2 py-2 rounded-md border">
          <span className="font-semibold text-slate-600">
            Ordenes de trabajo
          </span>
          <span className="bg-orange-300 p-1 rounded-md text-sm w-fit ">
            EN PROCESO
          </span>
          <span className="text-orange-500 font-semibold">23</span>
        </div>
        <div className="w-full flex flex-row justify-between  items-center shadow-md px-2 py-2 rounded-md border">
          <span className="font-semibold text-slate-600">
            Ordenes de trabajo
          </span>
          <span className="bg-green-400 p-1 rounded-md text-sm w-fit ">
            REALIZADOS
          </span>
          <span className="text-green-500 font-semibold">23</span>
        </div>
        <div className="w-full flex flex-row justify-between  items-center shadow-md px-2 py-2 rounded-md border">
          <span className="font-semibold text-slate-600">
            Ordenes de trabajo
          </span>
          <span className="bg-gray-400 p-1 rounded-md text-sm w-fit ">
            ANULADOS
          </span>
          <span className="text-gray-500 font-semibold">23</span>
        </div>
      </div>
    </main>
  );
}

export default HomeAdmin;
