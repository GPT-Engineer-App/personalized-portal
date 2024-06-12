import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading>About Us</Heading>
      <Text>
        This is a platform where users can create and customize their profiles, showcasing their skills, interests, and project involvements.
      </Text>
    </VStack>
  </Box>
);

export default About;