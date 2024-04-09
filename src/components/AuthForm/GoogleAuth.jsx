import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import googlelogo from "../../../public/google.png";
import UseLoginWithGoogle from "../../Hooks/UseLoginWithGoogle";
import { BeatLoader } from "react-spinners";

const GoogleAuth = ({ prefix }) => {
  const [loading, setLoading] = useState(false);
  const { loginWithGoogle } = UseLoginWithGoogle();
  return (
    <Button
      mx={2}
      color={"blue.300"}
      onClick={() => loginWithGoogle(setLoading)}
      isLoading={loading}
      spinner={<BeatLoader size={8} color="white" />}
      width={"100%"}
    >
      <Image src={googlelogo} h={6} mr={3} />
      {prefix} with google
    </Button>
  );
};

export default GoogleAuth;
