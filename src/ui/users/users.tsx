"use client";

import { ReactNode } from "react";
import UsersAdmin from "./users_admin";

function Users({ role, children }: { role: string; children: ReactNode }) {
  if (role === "admin") {
    return <UsersAdmin>{children}</UsersAdmin>;
  } else {
    return <div>Erro, no autorizado</div>;
  }
}

export default Users;
