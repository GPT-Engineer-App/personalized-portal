import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading>Contact Us</Heading>
      <Text>
        If you have any questions, feel free to reach out to us at contact@ourplatform.com.
      </Text>
    </VStack>
  </Box>
);

export default Contact;