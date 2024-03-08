import { useState } from "react";

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import UseSignupWithEmailAndPassword from "../../Hooks/UseSignUpWithEmailAndPassword";
import { color } from "framer-motion";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const SignUp = ({ setIsLogin }) => {
  const initialState = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [signUpDetail, setSignUpDetail] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = UseSignupWithEmailAndPassword();

  // signup function
  const handleSignDetailChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setShowPassword(value !== "");
      setSignUpDetail((prev) => {
        return { ...prev, password: value };
      });
    } else if (name === "fullName") {
      const stringWithoutNumber = value
        .split("")
        .filter((item) => isNaN(item))
        .join("");

      setSignUpDetail((prev) => {
        return { ...prev, fullName: stringWithoutNumber };
      });
    } else {
      setSignUpDetail((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createUser(
        signUpDetail,
        setSignUpDetail,
        setLoading,
        setIsLogin,
        initialState
      );
    }
  };

  return (
    <VStack gap={3} width={"100%"}>
      <Input
        name="fullName"
        variant="flushed"
        placeholder="Enter your fullname"
        value={signUpDetail.fullName}
        onChange={handleSignDetailChange}
      />
      <Input
        name="userName"
        variant="flushed"
        placeholder="Enter your username"
        value={signUpDetail.userName}
        onChange={handleSignDetailChange}
      />
      <Input
        name="email"
        variant="flushed"
        placeholder="Enter your email"
        value={signUpDetail.email}
        onChange={handleSignDetailChange}
      />
      <InputGroup>
        <Input
          name="password"
          variant="flushed"
          placeholder="Enter your password"
          value={signUpDetail.password}
          onChange={handleSignDetailChange}
          type={showPassword ? "text" : "password"}
        />
        <InputRightElement>
          <Button
            onClick={() => {
              if (signUpDetail.password !== "") {
                setShowPassword(!showPassword);
              }
            }}
            onKeyDown={(e) => handleShowStatus(e)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Input
        name="confirmPassword"
        variant="flushed"
        placeholder="Enter your confirm password"
        value={signUpDetail.confirmPassword}
        onChange={handleSignDetailChange}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      {signUpDetail.password !== signUpDetail.confirmPassword &&
        signUpDetail.confirmPassword !== "" && (
          <p
            style={{
              color: "#fb7c7c",
              width: "100%",
              fontSize: "15px",
              letterSpacing: "0.5px",
              fontStyle: "oblique",
            }}
          >
            passwod didn't match
          </p>
        )}

      <Button
        colorScheme="messenger"
        onClick={() =>
          createUser(
            signUpDetail,
            setSignUpDetail,
            setLoading,
            setIsLogin,
            initialState
          )
        }
        width={"100%"}
        size={"md"}
        isLoading={loading}
        isDisabled={signUpDetail.confirmPassword !== signUpDetail.password}
      >
        SignUp
      </Button>
    </VStack>
  );
};
export default SignUp;
