import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full ">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full bg-zinc-100 dark:bg-zinc-800">
        <Header />
        {children}
      </div>

    </main>
  );
}
