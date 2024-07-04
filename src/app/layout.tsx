import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

export const metadata: Metadata = {
  title: "Digital Center",
  description: "An App to centralization of all M/PPS digitalization projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="relative flex flex-col min-h-screen">
        <div className="flex-g flex-1 bg-white">
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  );
}
