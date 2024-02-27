import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
import useLogout from "../../Hooks/useLogout";

const SideBar = () => {
  const sideBarItem = [
    {
      icon: <FaHome size={24} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
      link: "/",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notificaton",
      link: "/",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
      link: "/",
    },
    {
      icon: <RxAvatar size={25} />,
      text: "Profile",
      link: "/",
    },
  ];

  const { isLoggingOut, error, handleLogout } = useLogout();
  console.log("isLoggingOut", isLoggingOut);
  return (
    <Box
      h={"100vh"}
      position={"sticky"}
      top={0}
      left={0}
      py={8}
      px={{ base: 2, md: 4 }}
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
        <Flex direction={"column"} gap={3} mt={2} w={{ base: 10, md: "100%" }}>
          {sideBarItem.map((item, index) => (
            <Tooltip
              label={item.text}
              key={index}
              aria-label="A tooltip "
              // openDelay={5000}
              ml={1}
              display={{ base: "block", md: "none" }}
              placement="right-start"
              hasArrow
            >
              <Link
                display={"flex"}
                alignItems={"center"}
                gap={2}
                to={item.link || null}
                as={RouterLink}
                _hover={{ bg: "whiteAlpha.400" }}
                p={2}
                borderRadius={6}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        <Tooltip
          label="Logout"
          aria-label="A tooltip "
          ml={1}
          display={{ base: "block", md: "none" }}
          placement="right-start"
          hasArrow
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "start" }}
            gap={2}
            to={"/auth"}
            as={RouterLink}
            _hover={{ bg: "whiteAlpha.400" }}
            p={2}
            borderRadius={6}
            mt={"250px"}
            w={"100%"}
          >
            <BiLogOutCircle size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              isLoading={isLoggingOut}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default SideBar;
