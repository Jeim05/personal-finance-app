import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full ">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full">
        <Header />
        <div className="bg-zinc-100">
          {children}
        </div>
      </div>

    </main>
  );
}
