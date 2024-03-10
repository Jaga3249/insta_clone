import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import instagramLogo from "../../../public/logo.png";

import { toast } from "react-toastify";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const initialState = {
    email: "",
    password: "",
    confirm_password: "",
  };
  const [isLogin, setIsLogin] = useState(true);
  const [userDetail, setUserDetail] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleAuth = () => {
    setLoading(true);
    if (!userDetail.email || !userDetail.password) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAuth();
    }
  };
  return (
    <Box
      border={"1px solid gray"}
      borderRadius={"6px"}
      p={3}
      height={isLogin ? "auto" : "550px"}
      width={320}
    >
      <VStack spacing={3}>
        <Image src={instagramLogo} h={16} />

        {isLogin ? <Login /> : <SignUp />}

        {/* or text */}
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
          <Box h={"1px"} flex={2} border={"1px solid gray"}></Box>
          <Text mx={1}>OR</Text>
          <Box h={"1px"} flex={2} border={"1px solid gray"}></Box>
        </Flex>
        <GoogleAuth prefix={isLogin ? "LogIn" : "SignUp"} />

        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid gray"}
          p={"10px"}
          borderRadius={"5px"}
          cursor={"pointer"}
        >
          <Box mx={1.5} fontSize={16}>
            {isLogin ? "Don't have an account" : "Already have an account"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => {
              setUserDetail(initialState);
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Signup" : "Login"}
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default AuthForm;
