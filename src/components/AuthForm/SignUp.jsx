import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useSignupWithEmailAndPassword from "../../Hooks/useSignupWithEmailAndPassword";

const SignUp = ({ setIsLogin }) => {
  const initialState = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
  };
  const [signUpDetail, setSignUpDetail] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signUp } = useSignupWithEmailAndPassword();

  const handleKeyPress = (
    signUpDetail,
    setSignUpDetail,
    initialState,
    setIsLogin,
    e
  ) => {
    // console.log("enter");
    if (e.key === "Enter") {
      signUp(signUpDetail, setSignUpDetail, initialState, setIsLogin);
    }
  };
  return (
    <>
      <Input
        placeholder="Full Name"
        type="text"
        fontSize={14}
        value={signUpDetail.fullName}
        onChange={(e) =>
          setSignUpDetail({ ...signUpDetail, fullName: e.target.value })
        }
      />
      <Input
        placeholder="UserName"
        type="text"
        fontSize={14}
        value={signUpDetail.userName}
        onChange={(e) =>
          setSignUpDetail({ ...signUpDetail, userName: e.target.value })
        }
      />

      <Input
        placeholder="Email"
        type="text"
        fontSize={14}
        value={signUpDetail.email}
        onChange={(e) =>
          setSignUpDetail({ ...signUpDetail, email: e.target.value })
        }
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          value={signUpDetail.password}
          onChange={(e) =>
            setSignUpDetail({ ...signUpDetail, password: e.target.value })
          }
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

      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.message}
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
