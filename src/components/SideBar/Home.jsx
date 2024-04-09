import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";

import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = ({ isSelected, selectedItemName }) => {
  return (
    <>
      <Tooltip
        label={"Home"}
        aria-label="A tooltip "
        ml={1}
        display={{ base: "block", md: "none" }}
        placement="right-start"
        hasArrow
      >
        <NavLink to={"/"}>
          <Flex
            alignItems={"center"}
            justifyContent={{
              base: "center",
              sm: `${
                isSelected && selectedItemName === "Search" ? "center" : "start"
              }`,
            }}
            gap={2}
            _hover={{ bg: "whiteAlpha.500" }}
            py={2}
            px={1}
            borderRadius={"5px"}
            cursor={"pointer"}
          >
            <FaHome size={24} />

            <Text
              display={{
                base: "none",
                md: `${
                  isSelected && selectedItemName === "Search" ? "none" : "block"
                }`,
                sm: `${
                  isSelected && selectedItemName === "Search" ? "none" : "block"
                }`,
              }}
            >
              Home
            </Text>
          </Flex>
        </NavLink>
      </Tooltip>
    </>
  );
};
export default Home;
