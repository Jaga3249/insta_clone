import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import googlelogo from "../../../public/google.png";

const GoogleAuth = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
      <Image src={googlelogo} h={6} />
      <Text mx={2} color={"blue.300"}>
        Login with google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
