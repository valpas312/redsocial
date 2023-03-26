import React, { useContext } from "react";
import { contexto } from "../App";
import { useMutation } from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AlertMsg from "./AlertMsg";

const AddComment = () => {
  const { post } = useParams();

  const [user, setUser] = useContext(contexto);

  const { mutate, isLoading, isError, isSuccess } = useMutation((comment) =>
    useAxiosPosts.post("comments", comment)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const { body } = e.target.elements;
    mutate({
      postId: Number(post),
      user: user.name,
      body: body.value,
    });
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="body">Add a comment</FormLabel>
            <Textarea isRequired id="body" />
          </FormControl>
          <Button type="submit">Add comment</Button>
        </form>
      </Box>

      {isSuccess && (
        <AlertMsg status="success" msg="Comment added successfully" />
      )}

      {isLoading && <Spinner />}
      {isError && <AlertMsg status="error" msg="Error adding comment" />}
    </>
  );
};

export default AddComment;
