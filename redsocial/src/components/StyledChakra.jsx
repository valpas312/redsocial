import { Box } from "@chakra-ui/react";

export const BoxStyled = ({ children }) => {
    return (
        <Box
        p="1rem"
        w="100vw"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        >
        {children}
        </Box>
    );
};