import { useState } from "react";
import { Box, Heading, VStack, Button, Input, HStack, Text } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaImage, FaVideo, FaLink } from "react-icons/fa";

const RealTimeEditing = () => {
  const [content, setContent] = useState("");

  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const saveContent = () => {
    // Placeholder for save functionality
    console.log("Content saved:", content);
  };

  const embedMedia = () => {
    if (mediaUrl && mediaType) {
      const embedTag = mediaType === "image" ? `<img src="${mediaUrl}" alt="Embedded Image" />` : `<video src="${mediaUrl}" controls></video>`;
      setContent(content + embedTag);
      setMediaUrl("");
      setMediaType("");
    }
  };

return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Real-time Editing</Heading>
        <ReactQuill value={content} onChange={handleContentChange} />
        <HStack spacing={2}>
          <Input
            placeholder="Media URL"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
          />
          <Button onClick={() => setMediaType("image")} leftIcon={<FaImage />}>
            Image
          </Button>
          <Button onClick={() => setMediaType("video")} leftIcon={<FaVideo />}>
            Video
          </Button>
          <Button onClick={embedMedia} colorScheme="teal">
            Embed
          </Button>
        </HStack>
        <Button onClick={saveContent} colorScheme="teal">
          Save
        </Button>
      </VStack>
    </Box>
  );
};

export default RealTimeEditing;