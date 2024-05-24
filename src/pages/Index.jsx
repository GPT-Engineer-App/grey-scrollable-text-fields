import { Container, VStack, Textarea, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        {Array.from({ length: 4 }).map((_, index) => (
          <Box key={index} width="100%">
            <Textarea placeholder={`Text field ${index + 1}`} backgroundColor="gray.100" resize="none" overflow="auto" height="100px" />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
