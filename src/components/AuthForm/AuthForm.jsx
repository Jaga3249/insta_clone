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

  return (
    <Flex flexDirection={"column"} gap={3} backgroundColor={"rgb(25, 25, 28)"}>
      <Box
        border={"1px solid gray"}
        borderRadius={"6px"}
        p={3}
        height={isLogin ? "auto" : "500px"}
        width={340}
      >
        <VStack spacing={3}>
          {/* <Image src={instagramLogo} h={16} /> */}
          <Box
            style={{
              fontSize: "28px",
              fontStyle: "oblique",
              fontWeight: "bold",
              color: "lightslategray",
              padding: "10px 0",
            }}
          >
            MysticMingle
          </Box>

          <GoogleAuth prefix={isLogin ? "LogIn" : "SignUp"} />

          {/* or text */}
          <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
            <Box height={"1px"} flex={2} border={"1px solid gray"}></Box>
            <Text mx={1}>OR</Text>
            <Box h={"1px"} flex={2} border={"1px solid gray"}></Box>
          </Flex>

          {isLogin ? <Login /> : <SignUp />}
        </VStack>
      </Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid gray"}
        py={"14px"}
        px={"8px"}
        borderRadius={"5px"}
        cursor={"pointer"}
        width={"100%"}
      >
        <Box mx={1.5} fontSize={16}>
          {isLogin ? "Don't have an account" : "Already have an account"}
        </Box>
        ?
        <Box
          ml={1}
          color={"blue.500"}
          cursor={"pointer"}
          onClick={() => {
            setUserDetail(initialState);
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Signup" : "Log in"}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AuthForm;
