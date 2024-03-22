import { Box, Button, Flex, Link, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../Assets/icons/constants";
import { Tooltip } from "@chakra-ui/react";
import { RxAvatar } from "react-icons/rx";
import { BiLogOutCircle } from "react-icons/bi";
import UseLogOut from "../../Hooks/UseLogOut";
import SideBarItems from "./SideBarItems";

const SideBar = () => {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { handleLogout } = UseLogOut();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderSkeletonPage = isLoading && pathname !== "/auth";

  return (
    <>
      {renderSkeletonPage ? (
        <Stack
          gap={8}
          h={"100vh"}
          py={10}
          px={5}
          borderRight={"1px solid"}
          borderColor={"whiteAlpha.500"}
        >
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" mt={"40%"} />
        </Stack>
      ) : (
        <>
          <Box
            h={"100vh"}
            position={"sticky"}
            top={0}
            left={0}
            py={8}
            px={{ base: 6, md: 4 }}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.500"}
          >
            <Flex
              direction={"column"}
              alignItems={{ base: "center", md: "start" }}
              pt={1}
            >
              <Link
                to="/"
                as={RouterLink}
                display={{ base: "none", md: "block" }}
                cursor={"pointer"}
                ml={2}
                mt={2}
              >
                <InstagramLogo />
              </Link>
              <Link
                to="/"
                as={RouterLink}
                display={{ base: "block", md: "none" }}
                borderRadius={4}
                _hover={{ bg: "whiteAlpha.500" }}
                p={2}
              >
                <InstagramMobileLogo />
              </Link>
              <Box
                width={{ base: 10, sm: "100%" }}
                mt={3}
                // border={"2px solid red"}
              >
                <SideBarItems />
              </Box>

              <Tooltip
                label="Logout"
                aria-label="A tooltip "
                ml={1}
                display={{ base: "block", md: "none" }}
                placement="right-start"
                hasArrow
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={{ base: "center", md: "start" }}
                  gap={2}
                  to={"/auth"}
                  as={RouterLink}
                  _hover={{ bg: "whiteAlpha.400" }}
                  p={2}
                  borderRadius={6}
                  mt={"40%"}
                  w={"100%"}
                  onClick={() => handleLogout(setLoading)}
                >
                  <BiLogOutCircle size={27} />
                  <Box as="span" display={{ base: "none", md: "block" }}>
                    Logout
                  </Box>
                </Flex>
              </Tooltip>
            </Flex>
          </Box>
        </>
      )}
    </>
  );
};

export default SideBar;
