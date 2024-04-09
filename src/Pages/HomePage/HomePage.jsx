import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"} pt={10}>
      <Flex gap={20} justifyContent={"center"}>
        {/* left section */}
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        {/* right container */}
        <Box
          flex={3}
          display={{ base: "none", md: "block" }}
          mr={20}
          py={10}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
