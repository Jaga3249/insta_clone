import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";
import navBarLogo from "../../../public/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex
        width={"full"}
        alignItems={"center"}
        justifyContent={{ base: "center", sm: "space-between" }}
        gap={{ base: 5, sm: 0 }}
      >
        {/* left side */}

        <Image src={navBarLogo} w={{ base: 120, sm: 200 }} />

        {/* right side */}
        <Flex gap={6}>
          <Link to={"/auth"}>
            <Button colorScheme="teal" size={{ base: "sm", sm: "md" }}>
              Login
            </Button>
          </Link>
          <Link to={"/auth"}>
            <Button
              colorScheme="teal"
              size={{ base: "sm", sm: "md" }}
              variant="outline"
            >
              SignUp
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
export default NavBar;
