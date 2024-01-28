"use client";

import AsideAdmin from "./aside_admin";
import AsideUser from "./aside_user";

function Aside({ role }: { role: string }) {
  if (role === "admin") {
    return <AsideAdmin></AsideAdmin>;
  } else if (role === "user") {
    return <AsideUser></AsideUser>;
  }
}

export default Aside;
