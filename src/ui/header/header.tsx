"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const session = useSession();
  console.log(session);
  return (
    <header className="w-full h-16 py-4 px-4 border-b-4 border-slate-400 flex flex-row justify-between items-center">
      <Link href={"/home"}>Inicio</Link>
      <div className="flex flex-row gap-4">
        {/* <span>{session.data?.user.name}</span> */}
        <button className="bg-slate-600 text-white rounded-md py-1 px-2">
          Salir
        </button>
      </div>
    </header>
  );
}

export default Header;
