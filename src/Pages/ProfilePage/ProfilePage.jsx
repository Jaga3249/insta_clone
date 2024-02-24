import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} px={8} py={10}>
      {/* top section */}
      <Flex>
        <ProfileHeader />
      </Flex>
      {/* buttom section */}
      <Flex
        flexDirection={"column"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
