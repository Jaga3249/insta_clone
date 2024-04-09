import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const SearchDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay
          style={{
            marginLeft: "80px",
          }}
        />
        <DrawerContent
          style={{
            position: "fixed",
            left: "80px",
            backgroundColor: "rgb(1,0,0,1)",
            border: "0.5px solid gray ",
            borderRadius: "0 5px 5px 0",
          }}
        >
          <DrawerHeader>Search</DrawerHeader>

          <DrawerBody>{/* <Input placeholder="Type here..." /> */}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SearchDrawer;
