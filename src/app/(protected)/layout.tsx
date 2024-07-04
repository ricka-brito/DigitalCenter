"use client";

import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accounts } = useMsal();
  const user = accounts[0];

  const router = useRouter();

  useEffect(() => {
    if (!user) {
        router.push("/login") 
    }
  }, [user]);

  return <>{children}</>;
}
