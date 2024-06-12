import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Home
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Button as={RouterLink} to="/profile" colorScheme="teal" variant="outline" mr={4}>
            Profile
          </Button>
          <Button as={RouterLink} to="/about" colorScheme="teal" variant="outline" mr={4}>
            About
          </Button>
          <Button as={RouterLink} to="/contact" colorScheme="teal" variant="outline">
            Contact
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;