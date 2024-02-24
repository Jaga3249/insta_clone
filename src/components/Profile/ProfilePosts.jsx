import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import ProfilePost from "./ProfilePost";
import img1 from "../../../public/img1.png";
import img2 from "../../../public/img2.png";
import img3 from "../../../public/img3.png";
import img4 from "../../../public/img4.png";

const ProfilePosts = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
      cursor={"pointer"}
    >
      {loading &&
        [0, 1, 2, 3, 4, 5].map((_, index) => (
          <VStack key={index} w={"full"}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!loading && (
        <>
          <ProfilePost img={img1} />
          <ProfilePost img={img2} />
          <ProfilePost img={img3} />
          <ProfilePost img={img4} />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
