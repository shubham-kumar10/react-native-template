import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const Product = ({ product }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.buttonStyles}>
        <Image
          source={{ uri: product.image }}
          style={{
            width: 60,
            height: 60
          }}
        />
        <Text
          style={{ fontSize: 15, fontWeight: '500', flexWrap: 'wrap' }}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {product.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    margin: 10
  }
});

export default Product;
