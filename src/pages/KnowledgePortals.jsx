import { useState } from "react";
import { Box, Heading, VStack, Input, Button, Textarea, HStack, Tag, TagLabel, Select, Text } from "@chakra-ui/react";

const KnowledgePortals = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState({ title: "", category: "", description: "", rating: 0 });
  const [categories, setCategories] = useState(["Programming", "Design", "Marketing", "Business"]);
  const [newCategory, setNewCategory] = useState("");
  const [expertReviews, setExpertReviews] = useState([]);
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});

  const addContent = () => {
    if (newContent.title && newContent.category && newContent.description) {
      setContent([...content, newContent]);
      setNewContent({ title: "", category: "", description: "", rating: 0 });
    }
  };

  const addCategory = () => {
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const addExpertReview = (index, review) => {
    const updatedReviews = [...expertReviews];
    if (!updatedReviews[index]) {
      updatedReviews[index] = [];
    }
    updatedReviews[index].push(review);
    setExpertReviews(updatedReviews);
  };

  const handleRating = (contentIndex, rating) => {
    setRatings({ ...ratings, [contentIndex]: rating });
  };

  const handleReview = (contentIndex, review) => {
    setReviews({ ...reviews, [contentIndex]: review });
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Knowledge Portals</Heading>
        <Box>
          <Heading size="md">Submit New Content</Heading>
          <Input
            placeholder="Title"
            value={newContent.title}
            onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
            mt={2}
          />
          <Select
            placeholder="Select Category"
            value={newContent.category}
            onChange={(e) => setNewContent({ ...newContent, category: e.target.value })}
            mt={2}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Select>
          <Textarea
            placeholder="Description"
            value={newContent.description}
            onChange={(e) => setNewContent({ ...newContent, description: e.target.value })}
            mt={2}
          />
          <Button onClick={addContent} colorScheme="teal" mt={4}>
            Submit Content
          </Button>
        </Box>
        <Box>
          <Heading size="md">Add New Category</Heading>
          <HStack mt={2}>
            <Input
              placeholder="New Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <Button onClick={addCategory} colorScheme="teal">
              Add Category
            </Button>
          </HStack>
        </Box>
        <Box>
          <Heading size="md">Submitted Content</Heading>
          {content.map((item, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" mt={4}>
              <Heading size="sm">{item.title}</Heading>
              <Text mt={2}>Category: {item.category}</Text>
              <Text mt={2}>{item.description}</Text>
              <Text mt={2}>Rating: {item.rating}</Text>
              <Box mt={4}>
                <Heading size="xs">Rate this content</Heading>
                <Input
                  type="number"
                  max={5}
                  min={1}
                  value={ratings[index] || ""}
                  onChange={(e) => handleRating(index, e.target.value)}
                  mt={2}
                />
              </Box>
              <Box mt={4}>
                <Heading size="xs">Leave a review</Heading>
                <Textarea
                  value={reviews[index] || ""}
                  onChange={(e) => handleReview(index, e.target.value)}
                  mt={2}
                />
              </Box>
              <Box mt={4}>
                <Heading size="xs">Expert Reviews</Heading>
                {expertReviews[index] && expertReviews[index].map((review, reviewIndex) => (
                  <Text key={reviewIndex} mt={1}>- {review}</Text>
                ))}
                <Textarea
                  placeholder="Add expert review"
                  mt={2}
                  onBlur={(e) => addExpertReview(index, e.target.value)}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default KnowledgePortals;