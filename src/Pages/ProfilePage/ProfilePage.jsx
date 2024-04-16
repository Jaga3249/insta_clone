import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import { Link, Link as RouterLink, useParams } from "react-router-dom";

import UseGetUserProfileByFullName from "../../Hooks/UseGetUserProfileByUsername";

const ProfilePage = () => {
  const { username } = useParams();
  const { userProfile, loading } = UseGetUserProfileByFullName(username);

  const userNotFound = !loading && !userProfile;
  if (userNotFound) return <UserNotFound />;

  return (
    <Container maxW={"container.lg"}>
      {/* top section */}
      <Flex mx={"auto"}>
        {!loading && userProfile && <ProfileHeader />}
        {loading && <ProfileHeaderSkeleton />}
      </Flex>
      {/* buttom section */}
      <Flex flexDirection={"column"}>
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;

const UserNotFound = () => (
  <Flex>
    <Text>user Not Found</Text>
    <Link as={RouterLink} to={"/"}>
      Go home
    </Link>
  </Flex>
);
const ProfileHeaderSkeleton = () => (
  <Flex
    padding="6"
    boxShadow="lg"
    width={"100%"}
    gap={4}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <SkeletonCircle size="20" />
    <Stack width={"40%"}>
      <Skeleton height="15px" />
      <Skeleton height="15px" />
      <Skeleton height="15px" />
    </Stack>
  </Flex>
);
