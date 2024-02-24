import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SuggestedUsers = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && (
        <VStack gap={2}>
          <Skeleton height="20px" w={"300px"} />
          <Skeleton height="20px" w={"300px"} />
          <Flex w={"full"} alignItems={"center"} gap={2}>
            <Box>
              <SkeletonCircle size="10" />
            </Box>
            <Skeleton height="20px" w={"300px"} />
          </Flex>
          <Flex w={"full"} alignItems={"center"} gap={2}>
            <Box>
              <SkeletonCircle size="10" />
            </Box>
            <Skeleton height="20px" w={"300px"} />
          </Flex>{" "}
          <Flex w={"full"} alignItems={"center"} gap={2}>
            <Box>
              <SkeletonCircle size="10" />
            </Box>
            <Skeleton height="20px" w={"300px"} />
          </Flex>
          <Skeleton height="20px" w={"300px"} />
        </VStack>
      )}

      {!loading && (
        <VStack>
          <SuggestedHeader />
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"full"}
            px={2}
          >
            <Text color={"gray"}>Suggested for you</Text>
            <Text color={"blue.400"} cursor={"pointer"}>
              Seeall
            </Text>
          </Flex>
          <SuggestedUser
            avatar="https://bit.ly/dan-abramov"
            userName="Dan Abrahmov"
            followers="10000"
          />
          <SuggestedUser
            avatar="https://bit.ly/kent-c-dodds"
            userName="Kent Dodds"
            followers="1000"
          />
          <SuggestedUser
            avatar="https://bit.ly/ryan-florence"
            userName="Ryan Florence"
            followers="1300"
          />

          <Box
            alignSelf={"start"}
            fontSize={16}
            display={"flex"}
            gap={2}
            px={2}
            color={"gray.400"}
            cursor={"pointer"}
            py={4}
          >
            @2024 Build By
            <Link
              href="https://github.com/Jaga3249?tab=repositories"
              target="_blank"
              color="blue.500"
            >
              As a Pogrammer
            </Link>
          </Box>
        </VStack>
      )}
    </>
  );
};

export default SuggestedUsers;
