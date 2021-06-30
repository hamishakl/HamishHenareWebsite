import React from "react";
// import styled from "styled-components";
// import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'

// const breakpoints = createBreakpoints({
//   sm: "30em",
//   md: "48em",
//   lg: "62em",
//   xl: "80em",
//   "2xl": "96em",
// });

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState("right");

  return (
    <>
      <Menu>
        <MenuButton
          onClick={onOpen}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
      </Menu>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Hamish Henare</DrawerHeader>
          <DrawerBody>
            <p>About me</p>
            <p>My work</p>
            <p>Contact me</p>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
