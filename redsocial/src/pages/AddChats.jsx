import { FormLabel, Input, Spinner} from '@chakra-ui/react'
import React from 'react'
import { useMutation } from 'react-query'
import AlertMsg from '../components/AlertMsg'
import { useAxiosChats } from '../hooks/useAxios'

const AddChats = () => {

  const { mutate, isLoading, isError } = useMutation((newChat) => {
    useAxiosChats
    .post('chats', newChat)
    .then(res => res.data),
    {
      refetchOnMount: true,
      refetchInterval: 500,
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name } = e.target.elements

    mutate({
      name: name.value
    })
    e.target.reset()
  }

  return <>
    <h1>Add Chats</h1>
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">Chat name</FormLabel>
      <Input type="text" id="name" />
      <button type="submit">{isLoading ? <Spinner/> : 'Add'}</button>
    </form>
    {
      isError && <AlertMsg status="error" msg="Error adding the chat" />
    }
  </>
}

export default AddChats