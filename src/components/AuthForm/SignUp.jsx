import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [signUpDetail, setSignUpDetail] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        placeholder="Full Name"
        type="text"
        fontSize={14}
        value={signUpDetail.fullName}
        onChange={
          (e) => setSignUpDetail({ ...signUpDetail, fullName: e.target.value })
          // console.log(e.target.value)
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
        // onKeyDown={handleKeyPress}
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
        />

        <InputRightElement>
          <Button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button
        colorScheme="teal"
        size="md"
        width={"full"}
        // onClick={handleAuth}
        // isLoading={loading}
      >
        Sign up
      </Button>
    </>
  );
};

export default SignUp;
