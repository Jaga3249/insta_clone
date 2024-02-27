import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
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
        // onKeyDown={handleKeyPress}
      />

      <Button
        colorScheme="teal"
        size="md"
        width={"full"}
        // onClick={handleAuth}
        // isLoading={loading}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
