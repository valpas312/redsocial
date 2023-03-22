import React from "react";
import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Flex alignItems="center" gap="2" justifyContent="space-around" p="1.2rem" bg="whatsapp.200">
          <Heading size="md">Red Social</Heading>
        <ButtonGroup gap="2">
          <Button colorScheme="teal"><Link to="/register">Register</Link></Button>
          <Button colorScheme="teal"><Link to="/login">Log In</Link></Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default NavBar;
