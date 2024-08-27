import React from 'react';
import { Box, Text, Button, Image, Stack, VStack } from '@chakra-ui/react';
import logo from '../assets/Poto.png'; 
const Home = () => {
  return (
    <Box
      p={8}
      bgGradient="linear(to-r, teal.400, blue.500)"
      minH="100vh"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Stack spacing={8} maxW="lg" mx="auto">
        <VStack spacing={4} align="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src={logo}  
            alt="Company Logo"
            mb={4}
          />
          <Text fontSize="5xl" fontWeight="bold" mb={4}>
            Welcome to Adziz Store
          </Text>
          <Text fontSize="xl" mb={6}>
          Kami menawarkan produk terbaik hanya untuk Anda. Jelajahi rangkaian produk dan layanan berkualitas tinggi yang memenuhi kebutuhan Anda.
          </Text>
          <Button
            as="a"
            href="/products"
            colorScheme="teal"
            size="lg"
            px={6}
            py={4}
            borderRadius="full"
            _hover={{ bg: 'blue.600', transform: 'scale(1.05)' }}
            transition="all 0.3s ease"
          >
            Explore Products
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Home;
