import React, { useContext } from "react";
import { Flex, Heading, ButtonGroup, Button, useMediaQuery} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { contexto } from "../App";
import HamburgerNav from "./HamburgerNav";

const NavBar = () => {
  const [user, setUser] = useContext(contexto);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>

      <Flex
        alignItems="center"
        gap="2"
        justifyContent="space-around"
        p="1.2rem"
        bg="whatsapp.200"
      >
      {isLargerThan768 ? (
        <>
        <Heading size="md">Red Social</Heading>
        <ButtonGroup gap="2">
          {Object.keys(user).length !== 0 ? (
            <>
              <Button colorScheme="teal" as={Link} to="/">
                Home
              </Button>
              <Button colorScheme="teal" as={Link} to="/chats">
                Chats
              </Button>
              <Button colorScheme="teal" as={Link} to="/perfil">
                Perfil
              </Button>
              <Button
                onClick={() => setUser({})}
                colorScheme="teal"
                as={Link}
                to="/login"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button colorScheme="teal" as={Link} to="/login">
                Login
              </Button>
              <Button colorScheme="teal" as={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </ButtonGroup>
        </>
      ) : (
        <HamburgerNav/>
      )}
      </Flex>
    </>
  );
};

export default NavBar;
