import "./globals.css";

export const metadata = {
  title: "Nexora",
  description: "AI Marketing Platform for Salla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        {children}
      </body>
    </html>
  );
}
