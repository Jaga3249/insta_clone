import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import { NotificationsLogo } from "../../Assets/icons/constants";

const Notification = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={{ base: "center", sm: "start" }}
        gap={2}
        _hover={{ bg: "whiteAlpha.500" }}
        py={2}
        px={1}
        borderRadius={"5px"}
        cursor={"pointer"}
      >
        <NotificationsLogo />
        <Box display={{ base: "none", md: "block" }}>Notification</Box>
      </Flex>
    </>
  );
};
export default Notification;
