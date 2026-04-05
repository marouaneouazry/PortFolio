import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marouane Ouazry — CS Engineer & Developer",
  description: "Full-stack developer, Big Data engineer, AI enthusiast. EMSI Casablanca.",
  openGraph: {
    title: "Marouane Ouazry",
    description: "CS & Networks Engineering student building real-world software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
