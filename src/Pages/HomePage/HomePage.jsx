import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20} justifyContent={"center"}>
        {/* left container */}
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        {/* right container */}
        <Box
          flex={3}
          display={{ base: "none", md: "block" }}
          mr={20}
          maxW={"300px"}
        >
          Suggested user
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
