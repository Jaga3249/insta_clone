import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={{ md: "container.lg" }} pt={{ base: 2, md: 10 }}>
      <Flex gap={{ base: 0, md: 20 }} justifyContent={"center"}>
        {/* left section */}
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        {/* right container */}
        <Box
          display={{ base: "none", md: "block" }}
          flex={3}
          mr={{ base: 0, md: 20 }}
          py={10}
          maxW={"300px"}
          // border={"2px solid red"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
