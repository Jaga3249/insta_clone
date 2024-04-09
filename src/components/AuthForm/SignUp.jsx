import { useState } from "react";

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import UseSignupWithEmailAndPassword from "../../Hooks/useSignupWithEmailAndPassword";
import { BeatLoader } from "react-spinners";

const SignUp = () => {
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

    if (name === "confirmPassword") {
      // setShowPassword(value !== "");
      setSignUpDetail((prev) => {
        return { ...prev, confirmPassword: value };
      });
    } else if (name === "fullName") {
      const stringWithoutNumber = value.replace(/[0-9]/g, "");

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

        initialState
      );
    }
  };

  return (
    <VStack gap={3} width={"100%"}>
      <Input
        name="email"
        placeholder="Email"
        value={signUpDetail.email}
        onChange={handleSignDetailChange}
      />
      <Input
        name="fullName"
        placeholder="Full Name"
        value={signUpDetail.fullName}
        onChange={handleSignDetailChange}
      />
      <Input
        name="userName"
        placeholder="Username"
        value={signUpDetail.userName}
        onChange={handleSignDetailChange}
      />

      <Input
        name="password"
        placeholder="Password"
        value={signUpDetail.password}
        onChange={handleSignDetailChange}
        type="password"
      />

      <InputGroup>
        <Input
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          value={signUpDetail.confirmPassword}
          onChange={handleSignDetailChange}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <InputRightElement>
          <Button
            onClick={() => {
              if (signUpDetail.confirmPassword === "") {
                setShowPassword(true);
              } else {
                setShowPassword(!showPassword);
              }
            }}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

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

            initialState
          )
        }
        width={"100%"}
        size={"md"}
        isLoading={loading}
        isDisabled={signUpDetail.confirmPassword !== signUpDetail.password}
        spinner={<BeatLoader size={8} color="white" />}
      >
        SignUp
      </Button>
    </VStack>
  );
};
export default SignUp;
