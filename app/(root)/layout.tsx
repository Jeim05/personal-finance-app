import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full ">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        {children}
      </div>

    </main>
  );
}
