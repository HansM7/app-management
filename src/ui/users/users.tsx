"use client";

import { useSession } from "next-auth/react";
import UsersAdmin from "./users_admin";

// function Users({ role, children }: { role: string; children: ReactNode }) {
//   if (role === "admin") {
//     return <UsersAdmin>{children}</UsersAdmin>;
//   } else {
//     return <div>Erro, no autorizado</div>;
//   }
// }
function Users() {
  const res = useSession();
  console.log(res);
  const role = "admin"; // esto debe salir del session D:
  if (role === "admin") {
    return <UsersAdmin></UsersAdmin>;
  } else {
    return <div>Erro, no autorizado</div>;
  }
}

export default Users;
