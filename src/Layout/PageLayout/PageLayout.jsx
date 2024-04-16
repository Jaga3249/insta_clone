import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

import useAuthStore from "../../store/AuthStore";
import { UserProfileStore } from "../../store/UserProfileStore";

const PageLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const { user } = useAuthStore();
  const rendersidebar = pathname !== "/auth" && user;
  const { setUserProfile } = UserProfileStore();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const userProfileData = JSON.parse(localStorage.getItem("user_info"));
    if (userProfileData) {
      setUserProfile(userProfileData);
    }
  }, []);
  if (loading) {
    return <PageLayoutSpinner />;
  }

  return (
    <Flex>
      {/* sidebar on the left */}
      {rendersidebar ? (
        <Box
          w={{ base: "40px", md: "240px" }}
          display={{ base: "none", md: "block" }}
        >
          <SideBar />
        </Box>
      ) : null}
      <Box display={{ base: "block", sm: "none" }}></Box>

      {/* page content on right */}

      <Box flex={1} w={{ base: "calc(100%-40px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => (
  <Flex
    flexDirection={"column"}
    h={"100vh"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Spinner size="xl" />
  </Flex>
);
