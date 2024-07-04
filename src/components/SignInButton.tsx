"use client";

import { useMsal } from "@azure/msal-react";
import Button from "./Button";

/**
 * Component Button for signin with MSAL.
 *
 * @component
 *
 * @returns {React.ReactElement} A button for signin.
 */
const SignInButton = (): React.ReactElement => {
  const { instance } = useMsal();

  return (
    <Button
      className="w-[24vw]"
      
      onClick={async () => {
        instance.loginPopup();
      }}
    >Bosch Login</Button>
  );
};

export default SignInButton;
