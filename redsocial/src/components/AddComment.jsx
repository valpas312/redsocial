import React, { useContext } from "react";
import { contexto } from "../App";
import { useMutation } from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

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
        <Alert status="success">
          <AlertIcon />
          The comment was added successfully
        </Alert>
      )}

      {isLoading && <Spinner />}
      {isError && (
        <Alert status="error">
          <AlertIcon />
          There was an error adding the comment
        </Alert>
      )}
    </>
  );
};

export default AddComment;
