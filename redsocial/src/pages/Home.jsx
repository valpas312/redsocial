import React from "react";
import Posts from "./Posts";
import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      w="100vw"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mt="2rem"
        mb="2rem"
      >
        Posts
      </Text>
      <Posts />
    </Box>
  );
};

export default Home;