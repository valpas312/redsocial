import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import { Box, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AddComment from "../components/AddComment";

const Post = () => {
  const { post } = useParams();

  const { data, isLoading, isError} = useQuery("post", () =>
    useAxiosPosts.get(`posts/${post}`).then((res) => res.data)
  );

  const {
    data: dataComments,
    isLoading: isLoadingComments,
    isError: isErrorComments,
  } = useQuery("comments", () =>
    useAxiosPosts.get("comments").then((res) => res.data),
    // {refetchInterval: 1000}
  );

  const comments = dataComments?.filter(
    (comment) => comment.postId === Number(post)
  );

  return (
    <Box>
      <Link to="/">Volver</Link>
      <h1>Post {post ? post : "not founded"}</h1>
      {isLoading && <Spinner />}
      {data ? (
        <Box>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <Box>
            <h2>Comments</h2>
            {isLoadingComments && <Spinner />}
            {comments
              ? comments.map(({ id, body, user }) => (
                    <Box key={id+body}>
                      <h3>{user}</h3>
                      <p>{body}</p>
                    </Box>
                ))
              : isErrorComments && (
                  <Alert status="error">
                    <AlertIcon />
                    There are no comments for this post
                  </Alert>
                )}
            <AddComment />
          </Box>
        </Box>
      ) : (
        isError && (
          <Alert status="error">
            <AlertIcon />
            There was an error fetching the comments
          </Alert>
        )
      )}
    </Box>
  );
};

export default Post;