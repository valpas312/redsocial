import { Button, FormControl, Input, Spinner } from "@chakra-ui/react";
import React, { useContext } from "react";
import { contexto } from "../App";
import { useMutation } from "react-query";
import { useAxiosChats } from "../hooks/useAxios";
import { useParams } from "react-router-dom";

const AddMessage = () => {
  const [user, setUser] = useContext(contexto);

  const { chat } = useParams();

  const { mutate, isLoading} = useMutation((newMessage) =>
    useAxiosChats.post("messages", newMessage).then((res) => res.data)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const { body } = e.target.elements;

    mutate({
      chatId: chat,
      user: user.name,
      body: body.value,
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
      padding={4}
      display="flex">
        <Input type="text" id="body" />
        <Button type="submit">
          {isLoading ? <Spinner size="sm" /> : "Send"}
        </Button>
      </FormControl>
    </form>
  );
};

export default AddMessage;
