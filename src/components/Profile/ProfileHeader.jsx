import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profilePhoto from "../../../public/profilepic.png";
import { BiSolidEdit } from "react-icons/bi";

import { useParams } from "react-router-dom";
import { UserProfileStore } from "../../store/UserProfileStore";
import useAuthStore from "../../store/AuthStore";
import EditProfile from "./EditProfile";
import UseFollowUser from "../../Hooks/UseFollowUser";
import { BeatLoader } from "react-spinners";
import { RiLogoutCircleLine } from "react-icons/ri";
import UseLogOut from "../../Hooks/useLogout";

const ProfileHeader = () => {
  const { handleLogout } = UseLogOut();
  const [open, setOpen] = useState(false);
  const { userProfile } = UserProfileStore();
  const { user } = useAuthStore();
  const { handleFollowUser, isUpdating, isFollowing } = UseFollowUser(
    userProfile.uid
  );

  const visitOwnProfileAndAuth = user && user.fullName === userProfile.fullName;
  const visitAnotherProfileAndAuth =
    user && user.fullName !== userProfile.fullName;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        cursor={"pointer"}
        w={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ base: "column", sm: "row" }}
        gap={{ base: 2, sm: 4 }}
        my={6}
      >
        {/* left side */}
        <AvatarGroup size="xl">
          <Avatar
            name="As a Pogrammer"
            src={
              userProfile.profilePicUrl
                ? userProfile.profilePicUrl
                : profilePhoto
            }
          />
        </AvatarGroup>
        {/* right side */}
        <VStack spacing={1} py={2}>
          <Flex
            w={"full"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={4}
          >
            <Text fontSize={20}>{userProfile.username}</Text>

            {visitOwnProfileAndAuth && (
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "sm", md: "sm" }}
                rightIcon={<BiSolidEdit size={22} />}
                onClick={() => setOpen(true)}
              >
                Edit Profile
              </Button>
            )}
            {visitAnotherProfileAndAuth && (
              <Button
                bg={"blue.500"}
                color={"white"}
                _hover={{ bg: "blue.600" }}
                size={{ base: "xs", md: "md" }}
                isLoading={isUpdating}
                spinner={<BeatLoader size={8} color="white" />}
                onClick={handleFollowUser}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            )}
            <Box display={{ base: "block", md: "none" }} onClick={handleLogout}>
              <RiLogoutCircleLine size={30} />
            </Box>
          </Flex>
          <Flex
            w={"full"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={4}
          >
            <Text as="span" fontSize={16} fontWeight={"bold"} color={"white"}>
              {userProfile?.posts?.length}
              <Text
                ml={2}
                as={"span"}
                fontSize={18}
                fontWeight={500}
                textTransform={"capitalize"}
                letterSpacing={"1px"}
              >
                Posts
              </Text>
            </Text>
            <Text fontWeight={"bold"} as="span" fontSize={16}>
              {userProfile?.followers?.length}
              <Text
                ml={2}
                as={"span"}
                fontSize={16}
                fontWeight={500}
                textTransform={" capitalize !important"}
                letterSpacing={"1px"}
              >
                Followers
              </Text>
            </Text>

            <Text fontWeight={"bold"} as="span" fontSize={16}>
              {userProfile.following.length}
              <Text
                ml={2}
                as={"span"}
                fontSize={16}
                fontWeight={500}
                textTransform={"capitalize"}
                letterSpacing={"1px"}
              >
                Following
              </Text>
            </Text>
          </Flex>

          <Flex width={"100%"}>
            <Text fontSize={16}>{userProfile.bio}</Text>
          </Flex>
        </VStack>
      </Flex>
      {open && (
        <EditProfile isOpen={open} onClose={onClose} setOpen={setOpen} />
      )}
    </>
  );
};

export default ProfileHeader;
