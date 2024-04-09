import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import leftImg from "../../../public/auth.png";
import AuthForm from "../../components/AuthForm/AuthForm";
import playstoreLogo from "../../../public/playstore.png";
import microsoft from "../../../public/microsoft.png";

const AuthPage = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} minH={"100vh"} px={4}>
      <Container maxW={"container.lg"}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* left hand side  */}
          <Box display={{ base: "none", md: "block" }} cursor={"pointer"}>
            <Image src={leftImg} alt="" h={550} />
          </Box>
          {/* right hand-side */}
          <VStack spacing={2} alignItems={"center"} justifyContent={"center"}>
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
