import Aside from "@/ui/aside/aside";
import CreateUser from ".";

export default function Page() {
  return (
    <>
      <Aside role="admin"></Aside>
      <CreateUser></CreateUser>
    </>
  );
}
