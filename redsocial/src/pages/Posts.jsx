import {
  Button,
  Spinner
} from "@chakra-ui/react";
import React from "react";
import { useQuery} from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import ContainerStyled from "../components/styles/ContainerStyled";
import CardsContainer from "../components/styles/CardsContainer";
import AlertMsg from "../components/AlertMsg";
import { Link } from "react-router-dom";

const Posts = () => {
  const { data, isLoading, isError } = useQuery("posts", () =>
    useAxiosPosts.get("posts").then((res) => res.data)
  );

  return (
    <>
      <ContainerStyled/>
        {isLoading && <Spinner />}
        {data
          ? data.map((post) => (
              <CardsContainer>
                <Button as={Link} to={`/posts/${post._id}`}>
                  {post.title}
                </Button>
                <p>{ post.description.slice(0, 100)+'...' }</p>
              </CardsContainer>
            ))
          : isError && (
              <AlertMsg status="error" msg="There was an error fetching the data" />
            )}
        {data && data.length === 0 && <p>No posts yet</p>}
        {data && (
          <Button
          as={Link}
          to="/posts/add"
          colorScheme="teal"
          variant="outline"
          >
            Add Post
          </Button>
        )}
      <ContainerStyled/>
    </>
  );
};

export default Posts;