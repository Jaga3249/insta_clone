import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useUserLogin from "../../Hooks/useSignInWithEmailAndPassword";
// import useSigninWithEmailAndPassword from "../../Hooks/useSignInWithEmailAndPassword";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loginData, setLoginData] = useState(initialState);

  const { signinUser, error, user, loading } = useUserLogin();

  // console.log("loading", loading);
  // console.log(user);

  const custumeMsg = (msg) => {
    switch (msg) {
      case "auth/invalid-email":
        return "Invalid email";
      case "auth/invalid-credential":
        return "Invalid Credential";
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      signinUser(loginData, initialState, setLoginData);
    }
  };

  return (
    <>
      <Input
        variant="flushed"
        placeholder="Email"
        type="text"
        fontSize={14}
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <Input
        variant="flushed"
        placeholder="Password"
        type="password"
        fontSize={14}
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        onKeyDown={handleKeyPress}
      />

      <Box
        as="span"
        width={"100%"}
        fontSize={"13px"}
        fontWeight={"700"}
        letterSpacing={"0.5px"}
        marginTop={"-8px"}
        cursor={"pointer"}
        color={"#5e5ea9"}
        onClick={onOpen}
      >
        ForgotPassword
      </Box>
      {
        <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Reset Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody display={"flex"} flexDirection={"column"} gap={3}>
              <Input
                variant="flushed"
                placeholder="Enter your password"
                type="text"
              />
              <Input
                variant="flushed"
                placeholder="Confirm your password"
                type="password"
              />
              <Button colorScheme="teal" size="sm" width={"100%"}>
                Submit
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      }
      {user && (
        <Alert status="error">
          <AlertIcon />
          {custumeMsg(user.code)}
        </Alert>
      )}
      <Button
        colorScheme="messenger"
        size="md"
        width={"full"}
        onClick={() => signinUser(loginData, initialState, setLoginData)}
        isLoading={loading}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
