import { Box, Button, Flex, Link, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import {
  InstagramLogo,
  InstagramMobileLogo,
} from "../../../public/Assets/icons/constants";

import { Tooltip } from "@chakra-ui/react";

import { BiLogOutCircle } from "react-icons/bi";
import UseLogOut from "../../Hooks/useLogout";
import SideBarItems from "./SideBarItems";

import SearchUser from "../SearchUser/SearchUser";
import useSliderState from "../../store/SliderState";
import CreatePost from "../CreatePost/CreatePost";

const SideBar = () => {
  const { isSelected, currentSlider } = useSliderState();
  const { pathname } = useLocation();
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
          gap={6}
          h={"100vh"}
          py={10}
          px={5}
          borderRight={"1px solid"}
          borderColor={"whiteAlpha.500"}
        >
          <Skeleton height="18px" />
          <Skeleton height="18px" />
          <Skeleton height="18px" />
          <Skeleton height="18px" />
          <Skeleton height="18px" />
          <Skeleton height="18px" />
          <Skeleton height="18px" mt={"40%"} />
        </Stack>
      ) : (
        <>
          <Box
            width={`${isSelected ? "6vw" : "18vw"}`}
            cursor={"pointer"}
            h={"100vh"}
            position={"sticky"}
            top={0}
            left={0}
            py={8}
            px={{ base: 6, md: 4 }}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.500"}
            transition={"width 0.8s ease-in-out"}
            transitionDelay={isSelected ? "0.5s" : "0.5s"}
          >
            <Flex
              direction={"column"}
              alignItems={{
                base: "center",
                md: "start",
              }}
              pt={1}
            >
              <Link
                to="/"
                as={RouterLink}
                display={{
                  base: "none",
                  md: isSelected ? "none" : "block",
                }}
                cursor={"pointer"}
                ml={2}
                mt={2}
              >
                <InstagramLogo />
              </Link>
              <Link
                to="/"
                as={RouterLink}
                display={{
                  base: "block",
                  md: isSelected ? "block" : "none",
                }}
                borderRadius={4}
                _hover={{ bg: "whiteAlpha.500" }}
                py={2}
                px={2}
              >
                <InstagramMobileLogo />
              </Link>
              <Box
                width={{
                  base: 10,
                  sm: "100%",
                }}
                mt={3}
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
                  justifyContent={{
                    base: "center",
                    md: isSelected ? "center" : "start",
                  }}
                  gap={2}
                  to={"/auth"}
                  as={RouterLink}
                  _hover={{ bg: "whiteAlpha.400" }}
                  px={1}
                  py={2}
                  borderRadius={6}
                  mt={"40%"}
                  ml={"-5px"}
                  w={"100%"}
                  onClick={handleLogout}
                >
                  <BiLogOutCircle size={27} />
                  <Box
                    as="span"
                    display={{
                      base: "none",
                      md: isSelected ? "none" : "block",
                    }}
                  >
                    Logout
                  </Box>
                </Flex>
              </Tooltip>
            </Flex>
          </Box>

          <Box
            display={{ base: "none", sm: "block" }}
            width={"25vw"}
            height={"100vh"}
            borderRight={"1px solid gray"}
            borderRightRadius={"10px"}
            position={"fixed"}
            top={0}
            left={`${isSelected ? "80px" : "-400px"}`}
            transition={"left 0.8s ease-in-out"}
            transitionDelay={isSelected ? "0s" : "0s"}
            backgroundColor={"black"}
            zIndex={999}
          >
            {currentSlider === "search" && <SearchUser />}
            {currentSlider === "create" && <CreatePost />}
          </Box>
        </>
      )}
    </>
  );
};

export default SideBar;
