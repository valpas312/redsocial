import React, { useContext } from "react";
import { contexto } from "../App";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useAxiosChats } from "../hooks/useAxios";
import { Box, Spinner, Text } from "@chakra-ui/react";
import AlertMsg from "../components/AlertMsg";
import AddMessage from "../components/AddMessage";

const Chat = () => {
  const [user, setUser] = useContext(contexto);

  const { chat } = useParams();

  const {
    data: dataChat,
    isError: isErrorChat,
  } = useQuery(
    "chat",
    () => useAxiosChats.get(`chats/${chat}`).then((res) => res.data),
    {
      refetchOnMount: true,
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

  return (
    <>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mt="2rem"
        mb="2rem"
      >
        Chat {dataChat
          ? dataChat.name
          : isErrorChat && (
              <AlertMsg status="error" msg="Error fetching the messages" />
            )}
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
