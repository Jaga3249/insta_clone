import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { auth } from "../../firebase/fireBase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "../../components/Navbar/NavBar";
import useAuthStore from "../../store/AuthStore";

const PageLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const { user } = useAuthStore();
  const rendersidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && pathname !== "/auth";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <PageLayoutSpinner />;
  }

  return (
    <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
      {/* sidebar on the left */}
      {rendersidebar ? (
        <Box w={{ base: "40px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}

      {canRenderNavbar ? <NavBar /> : null}

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
