import { Box } from "@chakra-ui/react";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Notification from "./Notification";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import ReelPosts from "./ReelPosts";
import { useState } from "react";

const SideBarItems = ({
  setIsSelected,
  setSelectedItemName,
  isSelected,
  selectedItemName,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}

      // style={{
      //   zIndex: "999",
      // }}
    >
      <Home isSelected={isSelected} selectedItemName={selectedItemName} />
      <Search
        setIsSelected={setIsSelected}
        setSelectedItemName={setSelectedItemName}
        isSelected={isSelected}
        selectedItemName={selectedItemName}
      />
      <Notification
        isSelected={isSelected}
        selectedItemName={selectedItemName}
      />
      <CreatePost isSelected={isSelected} selectedItemName={selectedItemName} />
      <ReelPosts isSelected={isSelected} selectedItemName={selectedItemName} />
      <ProfileLink
        isSelected={isSelected}
        selectedItemName={selectedItemName}
      />
    </Box>
  );
};
export default SideBarItems;
