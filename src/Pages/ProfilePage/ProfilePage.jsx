import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams();
  // console.log("res", res);

  return (
    <Container maxW={"container.lg"}>
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
