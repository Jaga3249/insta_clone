import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useUserLogin from "../../Hooks/useSignInWithEmailAndPassword";
// import useSigninWithEmailAndPassword from "../../Hooks/useSignInWithEmailAndPassword";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { signinUser, loading, error } = useUserLogin();
  console.log("loading", loading);
  return (
    <>
      <Input
        placeholder="Email"
        type="text"
        fontSize={14}
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        type="password"
        fontSize={14}
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
      />

      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      )}

      <Button
        colorScheme="teal"
        size="md"
        width={"full"}
        onClick={() => signinUser(loginData)}
        isLoading={loading}
        // isLoading={loading}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
