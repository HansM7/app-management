import Aside from "@/ui/aside/aside";
import ErrorAuthorization from ".";
import { getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const res: any = await getServerSession(handler);
  // console.log("here -------res--------------");
  console.log(res);
  return (
    <>
      <Aside role="admin"></Aside>
      <ErrorAuthorization></ErrorAuthorization>
    </>
  );
}
