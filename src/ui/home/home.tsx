"use client";

import HomeAdmin from "./home_admin";
import HomeUser from "./home_user";

function Home({ role }: { role: string }) {
  if (role === "admin") {
    return <HomeAdmin></HomeAdmin>;
  } else if (role === "user") {
    return <HomeUser></HomeUser>;
  }
}

export default Home;
