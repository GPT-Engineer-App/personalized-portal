import { Box, Heading, Text, VStack, Tag, TagLabel, Input, Button, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ContextualizationWindow = ({ content }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [trends, setTrends] = useState([]);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [weights, setWeights] = useState({});

  useEffect(() => {
    const fetchRecommendationsAndTrends = async () => {
      try {
        const fetchedRecommendations = await getRecommendations(content);
        const fetchedTrends = await getTrends(content);
        setRecommendations(fetchedRecommendations);
        setTrends(fetchedTrends);
      } catch (error) {
        console.error("Error fetching recommendations and trends:", error);
      }
    };

    fetchRecommendationsAndTrends();
  }, [content]);

  const getRecommendations = async (content) => {
    return ["Personalized Recommendation 1", "Personalized Recommendation 2"];
  };

  const getTrends = async (content) => {
    return ["Personalized Trend 1", "Personalized Trend 2"];
  };

  const addTag = () => {
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleSliderChange = (tag, value) => {
    setWeights({ ...weights, [tag]: value });
    updateUserPreferences(tag, value);
  };

  const updateUserPreferences = async (tag, value) => {
    try {
      console.log(`Updated ${tag} weight to ${value}`);
    } catch (error) {
      console.error("Error updating user preferences:", error);
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
                <Slider
                  aria-label={`slider-${tag}`}
                  defaultValue={weights[tag] || 0}
                  min={0}
                  max={100}
                  onChange={(value) => handleSliderChange(tag, value)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
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