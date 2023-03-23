import React, { useEffect, useState, useContext } from "react";
import useAxiosUsers from "../hooks/useAxios";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { contexto } from "../App";

const Login = () => {
  const [user, setUser] = useContext(contexto);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState();

  useEffect(() => {
    useAxiosUsers
      .get("usuario/lista")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const isEqual = (name, password) => {
    return data.find(
      (user) => user.name === name && user.password === password
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = isEqual(name, password);

    user
      ? (alert("Login successful"), navigate("/"), setUser(user))
      : alert("Login failed");

    setName("");
    setPassword("");
  };

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        color="teal.500"
        mt="10"
      >
        Login
      </Text>
      <Box 
      as="form" 
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            variant="filled"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input
            variant="filled"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button colorScheme="teal" variant="outline" type="submit">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
