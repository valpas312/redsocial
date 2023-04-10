import { Box } from "@chakra-ui/react"

const CardsContainer = ({children}) => {
  return <Box
      h="100%"
      w="40%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      textAlign="center"
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      p="1rem"
  >
    {children}
  </Box>
}

export default CardsContainer