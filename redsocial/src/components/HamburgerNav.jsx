import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { contexto } from "../App";
import { useContext } from "react";

const HamburgerNav = () => {

    const [user, setUser] = useContext(contexto);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
      />
      {Object.keys(user).length !== 0 ? (
        <MenuList>
            <MenuItem as={Link} to="/">
                Home
            </MenuItem>
            <MenuItem as={Link} to="/chats">
                Chats
            </MenuItem>
            <MenuItem as={Link} to="/perfil">
                Perfil
            </MenuItem>
            <MenuItem onClick={() => setUser({})} as={Link} to="/login">
                Logout
            </MenuItem>
        </MenuList>
        ) : (
        <MenuList>
            <MenuItem as={Link} to="/login">
                Login
            </MenuItem>
            <MenuItem as={Link} to="/register">
                Register
            </MenuItem>
        </MenuList>
        )}
    </Menu>
  );
};

export default HamburgerNav;
