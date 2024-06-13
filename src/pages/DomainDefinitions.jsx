import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const DomainDefinitions = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading>Domain Definitions and Functionalities</Heading>

      <Box>
        <Heading size="md">Trust Domain</Heading>
        <Text><strong>Purpose:</strong> To ensure platform integrity and user security.</Text>
        <Text><strong>Core Functions:</strong></Text>
        <Text>- <strong>Security:</strong> Implementing protocols to protect data and user interactions.</Text>
        <Text>- <strong>Identity Management:</strong> Verifying user credentials and maintaining trust scores.</Text>
        <Text><strong>Impact:</strong> Central to the platform as it underpins all interactions, ensuring a secure environment for users.</Text>
      </Box>

      <Box>
        <Heading size="md">Knowledge Domain</Heading>
        <Text><strong>Purpose:</strong> To engage users through continuous learning and knowledge sharing.</Text>
        <Text><strong>Core Functions:</strong></Text>
        <Text>- <strong>Learning Paths:</strong> Providing structured educational content and courses.</Text>
        <Text>- <strong>Information Sharing:</strong> Facilitating the exchange of knowledge through articles, webinars, and tutorials.</Text>
        <Text><strong>Impact:</strong> Crucial for user engagement, supporting personal and professional growth by offering valuable educational resources.</Text>
      </Box>

      <Box>
        <Heading size="md">Tools Domain</Heading>
        <Text><strong>Purpose:</strong> To enhance productivity and collaboration through various utilities.</Text>
        <Text><strong>Core Functions:</strong></Text>
        <Text>- <strong>Project Management:</strong> Offering tools to manage tasks, timelines, and resources.</Text>
        <Text>- <strong>Collaboration:</strong> Providing platforms for team communication and document sharing.</Text>
        <Text><strong>Impact:</strong> Supports productivity by offering essential tools that facilitate efficient project execution and team collaboration.</Text>
      </Box>

      <Box>
        <Heading size="md">Exchange Domain</Heading>
        <Text><strong>Purpose:</strong> To facilitate financial transactions and service exchanges.</Text>
        <Text><strong>Core Functions:</strong></Text>
        <Text>- <strong>Payments:</strong> Handling secure financial transactions.</Text>
        <Text>- <strong>Service Listings:</strong> Managing listings and reviews for services offered on the platform.</Text>
        <Text><strong>Impact:</strong> Vital for economic activities on the platform, enabling users to exchange services and handle payments securely.</Text>
      </Box>

      <Box>
        <Heading size="md">Interactional Interface</Heading>
        <Text><strong>Purpose:</strong> To provide a user-friendly interface for engagement and interaction.</Text>
        <Text><strong>Core Functions:</strong></Text>
        <Text>- <strong>UI Design:</strong> Creating an intuitive and engaging user interface.</Text>
        <Text>- <strong>User Engagement:</strong> Facilitating user interactions with platform features through interactive elements.</Text>
        <Text><strong>Impact:</strong> Essential for user satisfaction, ensuring that the platform is easy to navigate and engaging.</Text>
      </Box>

      <Box>
        <Heading size="md">Operational Domain</Heading>
        <Text><strong>Purpose:</strong> To manage the platform’s backend operations and infrastructure.</Text>
        <Text><strong>Core Functions:</strong></Text>
        <Text>- <strong>Infrastructure Management:</strong> Overseeing the technical infrastructure and ensuring operational efficiency.</Text>
        <Text>- <strong>Logistics:</strong> Managing backend processes to support the platform's functionality.</Text>
        <Text><strong>Impact:</strong> Central to the platform's performance, ensuring smooth and efficient operations behind the scenes.</Text>
      </Box>
    </VStack>
  </Box>
);

export default DomainDefinitions;