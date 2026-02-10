import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dephra | Spatial Experience Studio",
  description: "Redefining e-commerce through high-fidelity spatial 3D experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className="font-sans selection:bg-black selection:text-white"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        }}
      >
        {children}
      </body>
    </html>
  );
}
