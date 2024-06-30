import React from 'react';
import {PaperProvider} from 'react-native-paper';
import ProductViewer from './ProductViewer';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Headphone',
    image: 'https://i.imgur.com/YaSqa06.jpeg',
    price: 9.99,
    category: 'categoryA',
  },
  {
    id: 2,
    name: 'Blue Cap',
    image: 'https://i.imgur.com/wXuQ7bm.jpeg',
    price: 14.99,
    category: 'categoryB',
  },
  {
    id: 3,
    name: 'T-Shirt',
    image: 'https://i.imgur.com/QkIa5tT.jpeg',
    price: 19.99,
    category: 'categoryC',
  },
  {
    id: 4,
    name: 'Mouse',
    image: 'https://i.imgur.com/w3Y8NwQ.jpeg',
    price: 24.99,
    category: 'categoryD',
  },
];

function App() {
  return (
    <PaperProvider>
      <ProductViewer products={products} />
    </PaperProvider>
  );
}

export default App;
