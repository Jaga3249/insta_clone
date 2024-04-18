import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

import useAuthStore from "../../store/AuthStore";
import { UserProfileStore } from "../../store/UserProfileStore";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Header from "../../components/Header/Header";

const PageLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const { user } = useAuthStore();
  const rendersidebar = pathname !== "/auth" && user;
  const { setUserProfile } = UserProfileStore();
  const renderSearchBar = pathname === "/" && user;

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
    <Flex flexDirection={{ base: "column", md: "row" }}>
      {/* sidebar on the left */}
      {rendersidebar ? (
        <Box
          w={{ base: "40px", md: "240px" }}
          display={{ base: "none", md: "block" }}
        >
          <SideBar />
        </Box>
      ) : null}

      {renderSearchBar ? (
        <Box width={"100%"} display={{ base: "block", sm: "none" }} pt={3}>
          <Header />
        </Box>
      ) : null}

      <Flex
        display={{ base: "block", sm: "none" }}
        width={"100%"}
        backgroundColor={"black"}
        position={"fixed"}
        bottom={"0"}
        borderTop={"1px solid gray"}
        p={2}
        zIndex={999}
      >
        <NavigationMenu />
      </Flex>

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
