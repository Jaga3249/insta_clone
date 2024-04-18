import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProfilePosts from "./ProfilePosts";

const ProfileTabs = () => {
  const [tabsName, setTabsName] = useState("");
  return (
    <Tabs>
      <TabList>
        <Tab fontSize={{ base: "15px", md: "30px" }}>Posts</Tab>
        <Tab fontSize={{ base: "15px", md: "30px" }}> Save</Tab>
        <Tab fontSize={{ base: "15px", md: "30px" }}> Likes</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ProfilePosts />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
