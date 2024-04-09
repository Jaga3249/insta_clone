import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { GiThreeLeaves } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const ReelPosts = ({ isSelected, selectedItemName }) => {
  return (
    <div>
      <Tooltip
        label="Reels"
        aria-label="A tooltip "
        ml={1}
        display={{ base: "block", md: "none" }}
        placement="right-start"
        hasArrow
      >
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return { backgroundColor: isActive ? "red" : "" };
          }}
        >
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
            // backgroundColor={(isActive) => console.log(isActive)}
          >
            <GiThreeLeaves size={24} />

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
              Reel
            </Text>
          </Flex>
        </NavLink>
      </Tooltip>
    </div>
  );
};
export default ReelPosts;
