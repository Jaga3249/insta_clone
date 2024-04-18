import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { CreatePostLogo } from "../../../public/Assets/icons/constants";
import useAuthStore from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "../../Modals/CreatePostModal";
import { useState } from "react";

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const { onClose } = useDisclosure();
  const navigate = useNavigate();
  const { user } = useAuthStore();

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        cursor={"pointer"}
      >
        {/* home,create,profile,logout */}
        <FaHome size={24} onClick={() => navigate("/")} />
        <Box onClick={() => setOpen(true)}>
          <CreatePostLogo />
        </Box>
        <Image
          src={user?.profilePicUrl || "https://bit.ly/dan-abramov"}
          width={"30px"}
          h={"30px"}
          borderRadius={"full"}
          onClick={() => navigate(user?.username)}
        />
      </Flex>
      {open && (
        <CreatePostModal isOpen={open} onClose={onClose} setOpen={setOpen} />
      )}
    </>
  );
};
export default NavigationMenu;
