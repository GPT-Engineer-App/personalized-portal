// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Box, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Faving</Heading>
        <Text fontSize="lg">Enhance Community Engagement, Discover Projects, and Contribute to a Better Future.</Text>
        <Button as={RouterLink} to="/projects" colorScheme="teal" size="lg">
          Explore Projects
        </Button>
      </VStack>
      <Box mt={8}>
        <Heading size="md">Quality Indicators</Heading>
        <Text mt={2}>Based on user feedback and ratings, the quality of content and projects is continuously monitored and displayed here.</Text>
      </Box>
    </Container>
  );
};

export default Index;