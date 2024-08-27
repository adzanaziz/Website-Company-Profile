// src/components/ProductPage.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { Box, Spinner, Text } from '@chakra-ui/react'; // Menggunakan Chakra UI untuk styling

class ProductPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, loading } = this.props;

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
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-300 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
