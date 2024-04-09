import { Box, Button, Flex, Link, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";

import {
  InstagramLogo,
  InstagramMobileLogo,
} from "../../../public/Assets/icons/constants";

import { Tooltip } from "@chakra-ui/react";

import { BiLogOutCircle } from "react-icons/bi";
import UseLogOut from "../../Hooks/useLogout";
import SideBarItems from "./SideBarItems";
import SearchDrawer from "../../drawer/SearchDrawer";

const SideBar = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState("");
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
            cursor={"pointer"}
            h={"100vh"}
            width={`${
              isSelected && selectedItemName === "Search" ? 20 : "auto"
            }`}
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
                display={{
                  base: "none",
                  md: `${
                    isSelected && selectedItemName === "Search"
                      ? "none"
                      : "block"
                  }`,
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
                  md: `${
                    isSelected && selectedItemName === "Search"
                      ? "block"
                      : "none"
                  }`,
                }}
                borderRadius={4}
                _hover={{ bg: "whiteAlpha.500" }}
                py={2}
                px={2}
              >
                <InstagramMobileLogo />
              </Link>
              <Box
                // display={"flex"}
                width={{
                  base: 10,
                  sm: `${
                    isSelected && selectedItemName === "Search" ? 10 : "100%"
                  }`,
                }}
                mt={3}
              >
                <SideBarItems
                  setIsSelected={setIsSelected}
                  isSelected={isSelected}
                  setSelectedItemName={setSelectedItemName}
                  selectedItemName={selectedItemName}
                />
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
                    md: `${
                      isSelected && selectedItemName === "Search"
                        ? "center"
                        : "start"
                    }`,
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
                  onClick={() => handleLogout(setLoading)}
                >
                  <BiLogOutCircle size={27} />
                  <Box
                    as="span"
                    display={{
                      base: "none",
                      md: `${
                        isSelected && selectedItemName === "Search"
                          ? "none"
                          : "block"
                      }`,
                    }}
                  >
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
