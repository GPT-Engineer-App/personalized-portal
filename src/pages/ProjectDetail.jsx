import { useParams } from "react-router-dom";
import { Box, Heading, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";
import EcktSlider from "../components/EcktSlider";

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects[id];
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const submitReview = () => {
    // Placeholder for review submission logic
    console.log("Review submitted:", review);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>{project.title}</Heading>
        <Text>{project.description}</Text>
        <Heading size="md" mt={4}>Goals</Heading>
        <VStack spacing={2} align="stretch">
          {project.goals.map((goal, index) => (
            <Text key={index}>- {goal}</Text>
          ))}
        </VStack>
        <Heading size="md" mt={4}>Rate this project</Heading>
        <EcktSlider value={rating} onChange={handleRatingChange} />
        <Heading size="md" mt={4}>Leave a review</Heading>
        <Textarea value={review} onChange={handleReviewChange} />
        <Button onClick={submitReview} colorScheme="teal" mt={4}>
          Submit Review
        </Button>
      </VStack>
    </Box>
  );
};

export default ProjectDetail;