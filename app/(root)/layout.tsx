export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flexs">
        SIDEBAR
        {children}
    </main>
  );
}
