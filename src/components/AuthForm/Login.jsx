import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import UseSignInWithEmailAndPassword from "../../Hooks/UseSignInWithEmailAndPassword";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const { userLogin } = UseSignInWithEmailAndPassword();

  const handlechange = (e) => {
    const { value, name } = e.target;
    if (name === "password") {
      value === "" && setShowPassword(false);
      setLoginData((prev) => {
        return { ...prev, password: value };
      });
    } else {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      userLogin(loginData, setLoginData, setLoading, initialState);
    }
  };

  return (
    <>
      <Input
        variant="flushed"
        placeholder="Email"
        name="email"
        type="text"
        fontSize={14}
        value={loginData.email}
        onChange={handlechange}
      />
      <InputGroup>
        <Input
          name="password"
          variant="flushed"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          value={loginData.password}
          onChange={handlechange}
          onKeyDown={handleKeyPress}
        />
        <InputRightElement>
          <Button
            onClick={() => {
              if (loginData.password !== "") setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Box
        as="span"
        width={"100%"}
        fontSize={"13px"}
        fontWeight={"700"}
        letterSpacing={"0.5px"}
        marginTop={"-8px"}
        cursor={"pointer"}
        color={"#5e5ea9"}
        // onClick={onOpen}
      >
        ForgotPassword
      </Box>

      <Button
        colorScheme="messenger"
        size="md"
        width={"full"}
        isLoading={loading}
        onClick={() =>
          userLogin(loginData, setLoginData, setLoading, initialState)
        }
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
