import React from "react";
import Posts from "./Posts";
import { Box, Text } from "@chakra-ui/react";
import ContainerStyled from "../components/styles/ContainerStyled";

const Home = () => {
  return (
    <ContainerStyled>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mt="2rem"
      >
        Posts
      </Text>
      <Posts />
    </ContainerStyled>
  );
};

export default Home;