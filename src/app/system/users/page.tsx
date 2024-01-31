import { authOptions, handler } from "@/app/api/auth/[...nextauth]/route";
import Aside from "@/ui/aside/aside";
import Users from "@/ui/users/users";
import { getServerSession } from "next-auth";

export default async function Page() {
  const res: any = await getServerSession(authOptions);
  console.log("here -------res--------------");
  console.log(res);
  return (
    <>
      <Aside role="admin"></Aside>
      <Users></Users>
    </>
  );
}
