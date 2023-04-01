import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useAxiosPosts } from "../hooks/useAxios";
import { useMutation } from "react-query";

const Comment = ({ body, user, _id }) => {
  const { mutate, isLoading, isSuccess } = useMutation(() =>
    useAxiosPosts.delete(`comments/${_id}`)
  );

  return (
    <>
      {
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap="1rem"
          border="1px solid black"
          borderRadius="5px"
          p="1rem"
        >
          <h3>{user}</h3>
          <p>{body}</p>
          <Button
            colorScheme="red"
            onClick={() => {
              mutate();
            }}
          >
            {isLoading ? "Deleting..." : isSuccess ? "Deleted" : "Delete"}
          </Button>
        </Box>
      }
    </>
  );
};

export default Comment;
