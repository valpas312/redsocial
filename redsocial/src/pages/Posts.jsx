import {
  Alert,
  AlertIcon,
  Box,
  Link as ChakraLink,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import { Link } from "react-router-dom";

const Posts = () => {
  const { data, isLoading, isError } = useQuery("posts", () =>
    useAxiosPosts.get("posts").then((res) => res.data)
  );

  return (
    <>
      <Box
        w="100vw"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        flexWrap="wrap"
      >
        {isLoading && <Spinner />}
        {data
          ? data.map((post) => (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
                w="30%"
                h="30%"
                p="1rem"
                border="1px solid black"
                borderRadius="5px"
                key={post._id}
              >
                <ChakraLink as={Link} to={`/posts/${post._id}`}>
                  {post.title}
                </ChakraLink>
                <p>{ post.description.slice(0, 100)+'...' }</p>
              </Box>
            ))
          : isError && (
              <Alert status="error">
                <AlertIcon />
                There was an error fetching the data
              </Alert>
            )}
        {data && data.length === 0 && <p>No posts yet</p>}
        {data && (
          <ChakraLink as={Link} to="/posts/add">
            Add Post
          </ChakraLink>
        )}
      </Box>
    </>
  );
};

export default Posts;
