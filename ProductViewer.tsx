import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';
import Toast from 'react-native-toast-message';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

interface ProductViewerProps {
  products: Product[];
}

const ProductViewer: React.FC<ProductViewerProps> = ({products}) => {
  const [searchText, setSearchText] = useState('');
  const [cart, setCart] = useState([]);

  // Filter products based on search text
  const filteredProducts = products.filter(
    product =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase()),
  );

  // Add product to cart and show toast notification
  const addToCart = (product: any) => {
    // setCart([...cart, product]);
    Toast.show({
      type: 'success',
      text1: `${product.name}`,
      text2: 'Added to cart 👋',
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Filter by name or category"
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Card>
              <Card.Cover
                style={styles.productImage}
                source={{uri: item?.image}}
              />
              <Card.Content style={{}}>
                <Text style={styles.productName}>{item?.name}</Text>
                <Text>${item?.price}</Text>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => addToCart(item)}>Add to card</Button>
              </Card.Actions>
            </Card>
          </View>
        )}
      />
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: 'black',
  },
  productItem: {
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default ProductViewer;
