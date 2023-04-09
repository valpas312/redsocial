import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import { Box, Spinner, Divider, Stack, Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import AlertMsg from "../components/AlertMsg";

const Post = () => {

  const navigate = useNavigate();

  const Toast = useToast();

  const { post } = useParams();

  const { data, isLoading, isError, isRefetching } = useQuery(
    "post",
    () => useAxiosPosts
    .get(`posts/${post}`)
    .then((res) => res.data),
    {
      refetchOnMount: true,
    }
  );

  const {
    data: dataComments,
    isLoading: isLoadingComments,
    isError: isErrorComments,
  } = useQuery(
    "comments",
    () => useAxiosPosts.get("comments").then((res) => res.data),
    {
      refetchOnMount: true,
      refetchInterval: 1000,
    }
  );

  const comments = dataComments?.filter(
    (comment) => comment.postId === post
  );

  const { mutate: mutateDeletePost, isError: isErrorPost, isLoading: isLoadingPost } = useMutation(() =>
    useAxiosPosts.delete(`posts/${post}`)
  );

  const handleDeletePost = () => {
    mutateDeletePost();
    Toast({
      title: "Post deleted",
      description: "The post has been deleted",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

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
        {isRefetching ? <Spinner /> : <Link to="/">Back</Link>}
        <Divider orientation="vertical" />
        <h1>{
          isRefetching
            ? <Spinner />
            : data
            ? data.title
            : isError
            ? "Post not founded"
            : "Post not founded"
        }</h1>
      </Stack>
      {isLoading && <Spinner />}
      {data ? (
        <Box>
          {isRefetching ? (
            <Spinner />
          ) : (
            <>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </>
          )}
          <Divider />
          <Box display="flex" flexDirection="column" gap="1rem">
            <h2>Comments</h2>
            {isLoadingComments && <Spinner />}
            {comments
              ? comments.map(({ _id, body, user }) => (
                  <Comment key={_id + body} body={body} user={user} _id={_id} />
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
        <Button
          colorScheme="red"
          onClick={handleDeletePost}
        >
          {
            isLoadingPost
              ? <Spinner />
              : isError
              ? "Error"
              : "Delete Post"
          }
        </Button>
    </Box>
  );
};

export default Post;