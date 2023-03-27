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
      <h1>Chat {chat}</h1>
      {isLoading && <Spinner />}
      {data
        ? data
            .filter((message) => message.chatId === Number(chat))
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
