import { useState } from "react";
import { Box, Heading, VStack, Textarea, Button, Input } from "@chakra-ui/react";
import RichTextEditor from '../components/RichTextEditor';
import MultimediaEmbed from '../components/MultimediaEmbed';
import InteractiveElement from '../components/InteractiveElement';
import ContextualizationWindow from '../components/ContextualizationWindow';

const RealTimeEditing = () => {
  const [content, setContent] = useState("");
  const [richTextContent, setRichTextContent] = useState('');
  const [multimediaURL, setMultimediaURL] = useState('');

  const handleContentChange = (content) => {
    setRichTextContent(content);
    setContent(content);
  };

  const handleMultimediaURLChange = (e) => {
    setMultimediaURL(e.target.value);
  };

  const saveContent = () => {
    // Placeholder for save functionality
    console.log("Content saved:", content);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Real-time Editing</Heading>
        <RichTextEditor value={richTextContent} onChange={handleContentChange} />
        <Input
          placeholder="Enter multimedia URL"
          value={multimediaURL}
          onChange={handleMultimediaURLChange}
          mt={4}
        />
        {multimediaURL && <MultimediaEmbed url={multimediaURL} />}
        <InteractiveElement onClick={() => alert('Button clicked!')} label="Click Me" />
        <ContextualizationWindow content={content} />
        <Button onClick={saveContent} colorScheme="teal">
          Save
        </Button>
      </VStack>
    </Box>
  );
};

export default RealTimeEditing;