import { useState } from "react";
import { Box, Heading, VStack, Input, Button, Textarea, HStack, Text } from "@chakra-ui/react";

const DiscussionForums = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState({ title: "", content: "" });

  const addThread = () => {
    if (newThread.title && newThread.content) {
      setThreads([...threads, newThread]);
      setNewThread({ title: "", content: "" });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Discussion Forums</Heading>
        <Box>
          <Heading size="md">Start New Thread</Heading>
          <Input
            placeholder="Thread Title"
            value={newThread.title}
            onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
            mt={2}
          />
          <Textarea
            placeholder="Thread Content"
            value={newThread.content}
            onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
            mt={2}
          />
          <Button onClick={addThread} colorScheme="teal" mt={4}>
            Create Thread
          </Button>
        </Box>
        <Box>
          <Heading size="md">Existing Threads</Heading>
          {threads.map((thread, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" mt={4}>
              <Heading size="sm">{thread.title}</Heading>
              <Text mt={2}>{thread.content}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default DiscussionForums;