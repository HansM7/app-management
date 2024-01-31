import Aside from "@/ui/aside/aside";
import ErrorAuthorization from ".";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const res = await getServerSession(authOptions);

  return (
    <>
      <Aside role="admin"></Aside>
      <ErrorAuthorization></ErrorAuthorization>
    </>
  );
}
