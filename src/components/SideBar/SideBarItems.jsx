import { Box } from "@chakra-ui/react";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Notification from "./Notification";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import ReelPosts from "./ReelPosts";

const SideBarItems = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Home />
      <Search />
      <Notification />
      <CreatePost />
      <ReelPosts />
      <ProfileLink />
    </Box>
  );
};
export default SideBarItems;
