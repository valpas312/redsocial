import { Box, Button, FormLabel, Input, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useMutation } from "react-query";
import AlertMsg from "../components/AlertMsg";
import { useAxiosChats } from "../hooks/useAxios";

const AddChats = () => {
  const { mutate, isLoading, isError } = useMutation((newChat) => {
    useAxiosChats.post("chats", newChat).then((res) => res.data),
      {
        refetchOnMount: true,
        refetchInterval: 500,
      };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target.elements;

    mutate({
      name: name.value,
    });
    e.target.reset();
  };

  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        color="teal.500"
        mt="10"
      >
        Add Chats
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
          w="60%"
        >
        <FormLabel htmlFor="name">Chat name</FormLabel>
        <Input type="text" id="name" />
        <Button type="submit">{isLoading ? <Spinner /> : "Add"}</Button>
      </Box>
      {isError && <AlertMsg status="error" msg="Error adding the chat" />}
      </Box>
    </>
  );
};

export default AddChats;
