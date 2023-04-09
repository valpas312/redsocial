import React, { useContext } from "react";
import { contexto } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { useAxiosChats } from "../hooks/useAxios";
import { Box, Button, Spinner, Text, useToast } from "@chakra-ui/react";
import AlertMsg from "../components/AlertMsg";
import AddMessage from "../components/AddMessage";

const Chat = () => {

  const Toast = useToast();

  const navigate = useNavigate();

  const [user, setUser] = useContext(contexto);

  const { chat } = useParams();

  const {
    data: dataChat,
    isError: isErrorChat,
    isLoading: isLoadingChat,
  } = useQuery(
    "chat",
    () => useAxiosChats.get(`chats/${chat}`).then((res) => res.data),
    {
      refetchOnMount: true,
      cacheTime: 0,
    }
  );

  const { data, isLoading, isError } = useQuery(
    "messages",
    () => useAxiosChats.get("messages").then((res) => res.data),
    {
      refetchOnMount: true,
      refetchInterval: 500,
    }
  );

  const { mutate: mutateDeleteChat } = useMutation(
    () => useAxiosChats.delete(`chats/${chat}`),
  );

  const handleDeleteChat = () => {
    mutateDeleteChat();
    Toast({
      title: "Chat deleted",
      description: "The chat has been deleted",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setTimeout(() => {
      navigate("/chats");
    }, 1000);
  };

  return (
    <>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mt="2rem"
        mb="2rem"
      >
        {
          isLoadingChat
            ? <Spinner />
            : dataChat
              ? `Chat ${dataChat.name}`
              : isErrorChat && (
              <AlertMsg status="error" msg="Error fetching the messages" />
            )}
            <Button
              colorScheme="red"
              variant="outline"
              onClick={handleDeleteChat}
            >
              Delete chat
            </Button>
      </Text>
      {isLoading && <Spinner />}
      {data
        ? data
            .filter((message) => message.chatId === chat)
            .map((message) => (
              <Box key={message.id} p={4} shadow="md" borderWidth="1px">
                <Text
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  color={
                    message.user.toLowerCase() === user.name
                      ? "teal.600"
                      : "red"
                  }
                  fontWeight="bold"
                >
                  {message.user}
                </Text>
                <p>{message.body}</p>
              </Box>
            ))
        : isError && (
            <AlertMsg status="error" msg="Error fetching the messages" />
          )}
      <AddMessage />
    </>
  );
};

export default Chat;
