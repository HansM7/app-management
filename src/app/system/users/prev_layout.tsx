import Aside from "@/ui/aside/aside";
import ActiveLink from "@/ui/users/navigate_users";
import Users from "@/ui/users/users";
import Link from "next/link";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Aside role="admin"></Aside>
      <Users role="admin">
        <main className="w-full p-4">
          <div className="flex flex-col">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200  ">
              <li className="me-2">
                <ActiveLink href="/system/users">Listado</ActiveLink>
              </li>
              <li className="me-2">
                <ActiveLink href="/system/users/create">Listado</ActiveLink>
              </li>
              <li className="me-2">
                <ActiveLink href="/system/users/history">
                  Hisorial de actividad
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div>{children}</div>
        </main>
      </Users>
    </>
  );
}
