import {
  Box,
  Button,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useMutation } from "react-query";
import { useAxiosChats } from "../hooks/useAxios";
import { useParams, useNavigate } from "react-router-dom";

const EditChat = () => {

  const navigate = useNavigate();

  const { chat } = useParams();

  const { mutate, isLoading, isError } = useMutation((updateChat) => {
    useAxiosChats.put(`chats/${chat}`, updateChat).then((res) => res.data);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    mutate({ name });
    e.target.reset();
    navigate("/chats");
  };

  return <>
  <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        color="teal.500"
        mt="10"
      >
        Update Chat
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
        <Input required type="text" id="name" />
        <Button type="submit">{isLoading ? <Spinner /> : "Update"}</Button>
      </Box>
      {isError && <AlertMsg status="error" msg="Error updating the chat" />}
      </Box>
</>
}

export default EditChat