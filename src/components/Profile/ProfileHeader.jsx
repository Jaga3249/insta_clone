import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import profilePhoto from "../../../public/profilepic.png";
import { BiSolidEdit } from "react-icons/bi";

const ProfileHeader = () => {
  return (
    <Flex
      cursor={"pointer"}
      w={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={{ base: "column", sm: "row" }}
      gap={{ base: 2, sm: 4 }}
    >
      {/* left side */}
      <AvatarGroup size="xl">
        <Avatar name="As a Pogrammer" src={profilePhoto} />
      </AvatarGroup>
      {/* right side */}
      <VStack spacing={1} py={2}>
        <Flex
          w={"full"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={4}
        >
          <Text fontSize={15}>Pogrammer</Text>
          <Button
            // colorScheme="gray"
            backgroundColor={"white"}
            color={"black"}
            size="sm"
            px={3}
            py={4}
            rightIcon={<BiSolidEdit size={20} />}
          >
            Edit Profile
          </Button>
        </Flex>
        <Flex
          w={"full"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={2}
        >
          <Text as="span" fontSize={16} fontWeight={"bold"} color={"white"}>
            4{" "}
          </Text>
          Posts
          <Text fontWeight={"bold"} as="span" fontSize={16}>
            149
          </Text>
          followers
          <Text fontWeight={"bold"} as="span" fontSize={16}>
            200{" "}
          </Text>
          following
        </Flex>
        <Flex direction={"column"} alignItems={"center"}>
          <Text w={"full"} fontSize={15}>
            As a Pogrammer
          </Text>
          <Text fontSize={15}>
            Tutorilas that meants for levelup your skill
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
