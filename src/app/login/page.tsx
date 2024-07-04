"use client";

import SignInButton from "@/components/SignInButton";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { redirect } from "next/navigation";
import { useEffect, } from "react";
import Image from "next/image";


const Login = () => {
  const { accounts } = useMsal();
  const user = accounts[0];

  useEffect(() => { 
    if (user) {
      redirect('/')
    }
  }, [user]);

  return (
    <div className="w-full h-screen bg-purple bg-cover items-center flex justify-center">
      <div className="self-center bg-white w-2/6 h-3/6 flex items-center justify-center flex-col max-xl:w-3/6">
        <div className="flex w-4/6 justify-between">
        </div>
        <h1 className="font-sans text-3xl my-12 text-center text-black">Login to continue</h1>
        <SignInButton />
      </div>
    </div>
  );
};

export default Login