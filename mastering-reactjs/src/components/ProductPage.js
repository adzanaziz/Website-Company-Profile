// src/components/ProductPage.js
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import {
  Box,
  Spinner,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'; // Menggunakan Chakra UI untuk styling

const ProductPage = ({ products, loading, fetchProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handlePayment = () => {
    toast({
      title: "Payment Successful.",
      description: "Thank you for your purchase!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setSelectedProduct(null);
    onClose();
  };

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        bgGradient="linear(to-r, teal.400, blue.500)"
      >
        <Box textAlign="center" color="white">
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            mb={4}
          />
          <Text fontSize="xl" fontWeight="bold">
            Loading Products...
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box p={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Our Products
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Text fontSize="lg" fontWeight="bold">{product.name}</Text>
              <Text mt={2}>${product.price}</Text>
              <Button
                mt={4}
                colorScheme="teal"
                size="md"
                onClick={() => handleBuyClick(product)}
              >
                Buy
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Pembayaran */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="John Doe" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Card Number</FormLabel>
              <Input placeholder="1234 5678 9012 3456" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Expiration Date</FormLabel>
              <Input placeholder="MM/YY" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>CVV</FormLabel>
              <Input placeholder="123" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handlePayment}>
              Pay
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
