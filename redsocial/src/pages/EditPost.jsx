import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { useAxiosPosts } from "../hooks/useAxios";
import AlertMsg from "../components/AlertMsg";
import { useParams } from "react-router-dom";


const EditPost = () => {

  const { post } = useParams();

  const { mutate, isLoading, isError, isSuccess } = useMutation((post) =>
    useAxiosPosts.put(`/posts/${post}`, post)
  );
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;
    mutate({
      title: title.value,
      description: description.value,
    });
  };

  console.log(post)

  return <>
    <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        color="teal.500"
        mt="10"
      >
        Edit Posts
      </Text>
      <Box
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        textAlign="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          w="60%"
        >
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input isRequired id="title" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="descriprion">Description</FormLabel>
          <Textarea isRequired id="description" />
        </FormControl>
        <Button type="submit">Update</Button>
        {isLoading && <Spinner />}
        {isError && (
          <AlertMsg status="error" msg="There was an error updating the post" />
        )}
        {isSuccess && (
          <AlertMsg status="success" msg="Post updated successfully" />
        )}
        </Box>
      </Box>
  </>
}

export default EditPost