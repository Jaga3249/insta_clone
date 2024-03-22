import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Tooltip
        label="Home"
        aria-label="A tooltip "
        ml={1}
        display={{ base: "block", md: "none" }}
        placement="right-start"
        hasArrow
      >
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", sm: "start" }}
          gap={2}
          _hover={{ bg: "whiteAlpha.500" }}
          py={2}
          px={1}
          borderRadius={"5px"}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          <FaHome size={24} />

          <Box display={{ base: "none", md: "block", sm: "block" }}>Home</Box>
        </Flex>
      </Tooltip>
    </>
  );
};
export default Home;
