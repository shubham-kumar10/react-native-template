/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme
} from 'react-native';

import { getProducts } from './src/api';
import Product from './src/components/Product';

const App = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // console.log(getProducts());
    getProducts().then(data => {
      console.log(data);
      setProducts(data);
      console.log(data.map(item => item.category));
    });
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text>Hello World</Text>
      <Button
        title="Press Me"
        onPress={() => {
          setShow(true);
        }}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        numColumns={3}
      />

      <Modal
        animationType="slide"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Button title="Close" onPress={() => setShow(false)} />
          <Text style={{ fontSize: 24, fontWeight: '500', flexWrap: 'wrap' }}>
            Hello World
          </Text>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
});

export default App;
