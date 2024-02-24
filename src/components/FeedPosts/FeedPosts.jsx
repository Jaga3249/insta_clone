import {
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import img1 from "../../../public/img1.png";
import img2 from "../../../public/img2.png";
import img3 from "../../../public/img3.png";
import img4 from "../../../public/img4.png";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState([1, 2, 3, 4]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW="md">
      {isLoading &&
        count.map((item, index) => (
          <VStack key={index}>
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              w={"full"}
              gap={2}
              mt={3}
            >
              <SkeletonCircle size="10" />
              <VStack>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <div>contents wrapped</div>
              <div>won't be visible</div>
              <div>won't be visible</div> <div>won't be visible</div>{" "}
              <div>won't be visible</div> <div>won't be visible</div>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img={img1} userName={"Dan Abrahmov"} avatar={img1} />
          <FeedPost img={img2} userName={"josh"} avatar={img2} />
          <FeedPost img={img3} userName={"jandose"} avatar={img3} />
          <FeedPost img={img4} userName={"jandose"} avatar={img4} />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
