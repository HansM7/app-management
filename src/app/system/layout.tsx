import Header from "../../ui/header/header";
import "../globals.css";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header></Header>
      <div className="flex flex-row">{children}</div>
    </main>
  );
}
