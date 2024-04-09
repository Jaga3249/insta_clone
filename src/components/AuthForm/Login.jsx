import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import UseForgotPassword from "../../Hooks/UseForgotPassword";
import UseSignInWithEmailAndPassword from "../../Hooks/useSignInWithEmailAndPassword";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loginData, setLoginData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { userLogin } = UseSignInWithEmailAndPassword();
  const { sendResetPasswordMail } = UseForgotPassword();
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
  const handleKeyPressForPassword = (e) => {
    if (e.key === "Enter") {
      if (!email) {
        toast.info("Required field cann't empty");
        return;
      }
      sendResetPasswordMail(email, setLoading, setEmail);
    }
  };

  return (
    <>
      <Input
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
        onClick={onOpen}
      >
        ForgotPassword
      </Box>

      <Button
        colorScheme="messenger"
        size="md"
        width={"full"}
        isLoading={loading}
        spinner={<BeatLoader size={8} color="white" />}
        onClick={() =>
          userLogin(loginData, setLoginData, setLoading, initialState)
        }
      >
        Log in
      </Button>
      {/* modal for password reset */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Password Reset </ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setEmail("");
              onClose();
            }}
          />
          <ModalBody>
            <Input
              variant="flushed"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => handleKeyPressForPassword(e)}
            />
            <Button
              width={"full"}
              colorScheme="teal"
              size="md"
              my={3}
              onClick={() => sendResetPasswordMail(email, setLoading)}
              isLoading={loading}
            >
              Send
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
