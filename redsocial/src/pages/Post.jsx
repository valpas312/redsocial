import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import { Box, Spinner, Divider, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import AlertMsg from "../components/AlertMsg";

const Post = () => {
  const { post } = useParams();

  const { data, isLoading, isError } = useQuery("post", () =>
    useAxiosPosts.get(`posts/${post}`).then((res) => res.data)
  );

  const {
    data: dataComments,
    isLoading: isLoadingComments,
    isError: isErrorComments,
  } = useQuery(
    "comments",
    () => useAxiosPosts.get("comments").then((res) => res.data),
    { refetchInterval: 1000 }
  );

  const comments = dataComments?.filter(
    (comment) => comment.postId === Number(post)
  );

  return (
    <Box
      p="1rem"
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      textAlign="center"
    >
      <Stack direction="row" h="50px" spacing={4} align="center">
        <Link to="/">Back</Link>
        <Divider orientation="vertical" />
        <h1>Post {post ? post : "not founded"}</h1>
      </Stack>
      {isLoading && <Spinner />}
      {data ? (
        <Box>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <Divider />
          <Box display="flex" flexDirection="column" gap="1rem">
            <h2>Comments</h2>
            {isLoadingComments && <Spinner />}
            {comments
              ? comments.map(({ id, body, user }) => (
                  <Comment key={id + body} body={body} user={user} />
                ))
              : isErrorComments && (
                  <AlertMsg status="error" msg="Comments not founded" />
                )}
            <AddComment />
          </Box>
        </Box>
      ) : (
        isError && <AlertMsg status="error" msg="Post not founded" />
      )}
    </Box>
  );
};

export default Post;
