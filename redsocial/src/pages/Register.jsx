import React, { useState } from "react";
import useAxiosUsers from "../hooks/useAxios";
import { Button, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
        alert("Register successful");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("Register failed");
      });

    setName("");
    setPassword("");
    setEmail("");
  }

  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        color="teal.500"
        mt="10"
      >
        Register
      </Text>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="email">Email:</label>
          <Input
            variant="filled"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
          Register
        </Button>
      </form>
    </>
  );
};

export default Register;
