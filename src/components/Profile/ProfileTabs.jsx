import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import ProfilePosts from "./ProfilePosts";

const ProfileTabs = () => {
  return (
    <Tabs variant="enclosed">
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
          <p>Save Posts</p>
        </TabPanel>
        <TabPanel>
          <p>Likes Post</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
