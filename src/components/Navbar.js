
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Button } from '@chakra-ui/react'; 
const Navbar = () => {
  return (
    <Flex as="nav" bg="teal.500" color="white" p={4} justify="space-between" align="center">
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          <Link to="/">Adziz Store</Link>
        </Text>
      </Box>
      <Flex>
        <Button variant="link" color="white" mx={2}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="link" color="white" mx={2}>
          <Link to="/products">Products</Link>
        </Button>
        <Button variant="link" color="white" mx={2}>
          <Link to="/about">About Us</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
