import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { auth } from "../../firebase/fireBase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "../../components/Navbar/NavBar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const rendersidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const checkingUserIsauth = !user && loading;
  if (checkingUserIsauth) {
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
