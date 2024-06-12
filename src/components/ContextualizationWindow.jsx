import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack, Tag, TagLabel, Input, Button, HStack } from '@chakra-ui/react';

const ContextualizationWindow = ({ content }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [trends, setTrends] = useState([]);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    const fetchRecommendationsAndTrends = async () => {
      const fetchedRecommendations = generateRecommendations(content);
      const fetchedTrends = generateTrends(content);
      setRecommendations(fetchedRecommendations);
      setTrends(fetchedTrends);
    };

    fetchRecommendationsAndTrends();
  }, [content]);

  const generateRecommendations = (content) => {
    return ["Recommendation based on " + content, "Another recommendation based on " + content];
  };

  const generateTrends = (content) => {
    return ["Trend based on " + content, "Another trend based on " + content];
  };

  const addTag = () => {
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Heading size="md">Contextualization Window</Heading>
      <VStack spacing={4} align="stretch" mt={4}>
        <Box>
          <Heading size="sm">Recommendations</Heading>
          {recommendations.map((rec, index) => (
            <Text key={index}>{rec}</Text>
          ))}
        </Box>
        <Box>
          <Heading size="sm">Trends</Heading>
          {trends.map((trend, index) => (
            <Text key={index}>{trend}</Text>
          ))}
        </Box>
        <Box>
          <Heading size="sm">Tags</Heading>
          <HStack spacing={2} mt={2}>
            {tags.map((tag, index) => (
              <Tag key={index} size="lg" colorScheme="teal">
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </HStack>
          <HStack mt={4}>
            <Input
              placeholder="Add a new tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
            <Button onClick={addTag} colorScheme="teal">
              Add Tag
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContextualizationWindow;