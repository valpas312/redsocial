import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { useAxiosChats } from '../hooks/useAxios'
import { Box, Spinner } from '@chakra-ui/react'
import AlertMsg from '../components/AlertMsg'

const Chat = () => {

  const { chat } = useParams()

  const { data, isLoading, isError } = useQuery('chats', () => useAxiosChats
    .get('chats')
    .then(res => res.data[0].messages))

    console.log(data)

  return <>
    <h1>Chat {chat}</h1>
    {isLoading && <Spinner/>}
    {
      data
      ? data.map(({user, id, body}) => (
        <Box key={id} >
          <p>{user}: {body}</p>
        </Box>
      ))
      : isError && <AlertMsg status="error" msg="Error fetching the messages" />
    }
  </>
}

export default Chat