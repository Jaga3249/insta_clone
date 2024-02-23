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
import googlelogo from "../../../public/google.png";
import { toast } from "react-toastify";

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
    <Box border={"1px solid gray"} borderRadius={"6px"} p={3}>
      <VStack spacing={3}>
        <Image src={instagramLogo} h={16} />
        <Input
          placeholder="Email"
          type="text"
          fontSize={14}
          value={userDetail.email}
          onChange={(e) =>
            setUserDetail({ ...userDetail, email: e.target.value })
          }
        />
        <Input
          placeholder="Password"
          type="password"
          fontSize={14}
          value={userDetail.password}
          onChange={(e) =>
            setUserDetail({ ...userDetail, password: e.target.value })
          }
          onKeyDown={handleKeyPress}
        />
        {!isLogin ? (
          <Input
            placeholder="Conform Password "
            type="password"
            fontSize={14}
            onKeyDown={handleKeyPress}
          />
        ) : null}
        <Button
          colorScheme="teal"
          size="md"
          width={"full"}
          onClick={handleAuth}
          isLoading={loading}
        >
          {isLogin ? "Log in" : "Sign up"}
        </Button>

        {/* or text */}
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
          <Box h={"1px"} flex={2} border={"1px solid gray"}></Box>
          <Text mx={1}>OR</Text>
          <Box h={"1px"} flex={2} border={"1px solid gray"}></Box>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <Image src={googlelogo} h={6} />
          <Text mx={2} color={"blue.300"}>
            Login with google
          </Text>
        </Flex>
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
            {isLogin ? "Login" : "Signup"}
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default AuthForm;
