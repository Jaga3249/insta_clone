import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSignupWithEmailAndPassword from "../../Hooks/useSignupWithEmailAndPassword";

const SignUp = ({ setIsLogin }) => {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
  };
  const [signUpDetail, setSignUpDetail] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const { loading, signUp, user } = useSignupWithEmailAndPassword();

  const handleKeyPress = (
    signUpDetail,
    setSignUpDetail,
    initialState,
    setIsLogin,
    e
  ) => {
    if (e.key === "Enter") {
      signUp(signUpDetail, setSignUpDetail, initialState, setIsLogin);
    }
  };

  const getCustumMessage = (msg) => {
    switch (msg) {
      case "auth/email-already-in-use":
        return "email is already exists";
      case "auth/invalid-email":
        return "Please enter a valid email";
      case "auth/weak-password":
        return "Please choose a strong password";
    }
  };

  const SignUpDetailChange = (e) => {
    const { value, name } = e.target;
    if (name === "fullName") {
      const ValidateFullName = value.replace(/\d/g, "");

      setSignUpDetail({ ...signUpDetail, fullName: ValidateFullName });
    } else if (name === "password" || name === "email") {
      setSignUpDetail({ ...signUpDetail, [name]: value });
    }
  };

  return (
    <>
      <Input
        placeholder="Full Name"
        type="text"
        name="fullName"
        fontSize={14}
        value={signUpDetail.fullName}
        onChange={SignUpDetailChange}
      />

      <Input
        placeholder="Email"
        type="text"
        fontSize={14}
        name="email"
        value={signUpDetail.email}
        onChange={SignUpDetailChange}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          name="password"
          value={signUpDetail.password}
          onChange={SignUpDetailChange}
          onKeyDown={(e) =>
            handleKeyPress(
              signUpDetail,
              setSignUpDetail,
              initialState,
              setIsLogin,
              e
            )
          }
        />

        <InputRightElement>
          <Button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {user && (
        <Alert status="error">
          <AlertIcon />
          {getCustumMessage(user.code)}
        </Alert>
      )}

      <Button
        colorScheme="teal"
        size="md"
        width={"full"}
        onClick={() =>
          signUp(signUpDetail, setSignUpDetail, initialState, setIsLogin)
        }
        isLoading={loading}
      >
        Sign up
      </Button>
    </>
  );
};

export default SignUp;
