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
            <Text fontSize={20}>Pogrammer</Text>
            {/* <Button
              rightIcon={<BiSolidEdit size={22} />}
              colorScheme="teal"
              variant="outline"
            >
              Edit profile
            </Button> */}

            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
              rightIcon={<BiSolidEdit size={22} />}
              // onClick={onOpen}
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
              <Text
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
              149
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
              200
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
          {/* <Text w={"full"} fontSize={15}>
              As a Pogrammer
            </Text> */}
          <Text fontSize={16} width={"100%"}>
            Tutorilas that meants for levelup your skill
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileHeader;
