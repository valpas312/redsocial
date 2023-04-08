import React, { useState } from "react";
import useAxiosUsers from "../hooks/useAxios";
import { Box, Button, Input, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const toast = useToast();

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [idusuario, setIdusuario] = useState(Math.floor(Math.random() * 1000));

  const [user, setUser] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    useAxiosUsers
      .post("usuario/agregar", {
        name: name,
        password: password,
        email: email,
        idusuario: idusuario,
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        toast({
          title: "Register successful",
          description: "Login to continue",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Register failed",
          description: "Please try again",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });

    setName("");
    setPassword("");
    setEmail("");
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
        Register
      </Text>
      <Box
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        textAlign="center"
        >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          w={isLargerThan768 ? "100%" : "80%"}
        >
          <label htmlFor="name">Name:</label>
          <Input
            variant="filled"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          w={isLargerThan768 ? "100%" : "80%"}
        >
          <label htmlFor="email">Email:</label>
          <Input
            variant="filled"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          w={isLargerThan768 ? "100%" : "80%"}
        >
          <label htmlFor="password">Password:</label>
          <Input
            variant="filled"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Box>
        <Button colorScheme="teal" variant="outline" type="submit">
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
