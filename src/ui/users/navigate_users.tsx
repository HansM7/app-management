"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ActiveLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`inline-block p-4 ${
        pathname === href ? "bg-gray-100 " : ""
      }  hover:bg-gray-100  rounded-t-lg `}
    >
      {children}
    </Link>
  );
}
