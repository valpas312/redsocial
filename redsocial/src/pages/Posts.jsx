import {
  Link as ChakraLink,
  Spinner
} from "@chakra-ui/react";
import React from "react";
import { useQuery} from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import { Link } from "react-router-dom";
import ContainerStyled from "../components/styles/ContainerStyled";
import CardsContainer from "../components/styles/CardsContainer";
import AlertMsg from "../components/AlertMsg";

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
                <ChakraLink as={Link} to={`/posts/${post._id}`}>
                  {post.title}
                </ChakraLink>
                <p>{ post.description.slice(0, 100)+'...' }</p>
              </CardsContainer>
            ))
          : isError && (
              <AlertMsg status="error" msg="There was an error fetching the data" />
            )}
        {data && data.length === 0 && <p>No posts yet</p>}
        {data && (
          <ChakraLink as={Link} to="/posts/add">
            Add Post
          </ChakraLink>
        )}
      <ContainerStyled/>
    </>
  );
};

export default Posts;