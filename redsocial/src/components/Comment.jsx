import { Box } from "@chakra-ui/react";
import React from "react";

const Comment = ({ body, user }) => {
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
        </Box>
      }
    </>
  );
};

export default Comment;
