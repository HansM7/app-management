"use client";

import Link from "next/link";

const items = [
  {
    title: "Inicio",
    path: "/system",
  },
  {
    title: "Usuarios",
    path: "/system/users",
  },
  {
    title: "Equipos",
    path: "/system/equipments",
  },
  {
    title: "Ordenes de trabajo",
    path: "/system/otms",
  },
];

function AsideAdmin() {
  return (
    <aside className="min-h-screen flex flex-col p-2 border-r-2 border-slate-200">
      <section className="flex flex-col gap-4">
        {items.map((item, index) => (
          <Link
            className="border rounded-md border-slate-300 font-semibold text-gray-600 px-4 py-2 hover:bg-slate-200 transition-all"
            key={index}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </section>
    </aside>
  );
}

export default AsideAdmin;
