import Home from "@/ui/home/home";
import Aside from "../../ui/aside/aside";

export default function SystemPage() {
  return (
    <>
      <Aside role="admin"></Aside>
      <Home role="admin"></Home>
    </>
  );
}
