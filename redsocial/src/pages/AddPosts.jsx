import React, {useContext} from 'react'
import { contexto } from '../App'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { useMutation } from 'react-query'
import { useAxiosPosts } from '../hooks/useAxios'
import AlertMsg from '../components/AlertMsg'

const AddPosts = () => {

  const [user, setUser] = useContext(contexto)

  const { mutate, isLoading, isError, isSuccess } = useMutation((post) =>
    useAxiosPosts.post("posts", post)
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, description } = e.target.elements
    mutate({
      title: title.value,
      author: user.name,
      description: description.value,
    })
  }

  return <>
    <h1>Add Posts</h1>
    <form onSubmit={handleSubmit} >
      <FormControl>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input isRequired id="title" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="descriprion">Description</FormLabel>
        <Textarea isRequired id="description" />
      </FormControl>
      <Button type="submit">Add Post</Button>
      {isLoading && <Spinner />}
      {isError && <AlertMsg status="error" msg="There was an error adding the post" />}
      {isSuccess && <AlertMsg status="success" msg="Post added successfully" />}
    </form>
  </>
}

export default AddPosts