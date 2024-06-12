import { useState } from "react";
import { Box, Heading, VStack, Textarea, Button } from "@chakra-ui/react";

const RealTimeEditing = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const saveContent = () => {
    // Placeholder for save functionality
    console.log("Content saved:", content);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Real-time Editing</Heading>
        <Textarea
          placeholder="Start typing..."
          value={content}
          onChange={handleContentChange}
        />
        <Button onClick={saveContent} colorScheme="teal">
          Save
        </Button>
      </VStack>
    </Box>
  );
};

export default RealTimeEditing;