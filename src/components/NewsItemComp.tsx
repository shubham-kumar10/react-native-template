/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { NewsItem } from '../interface';

const width = Dimensions.get('window').width;

const NewsItemComp = ({ news }: { news: NewsItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{news.title}</Text>
      <Image source={{ uri: news.imageUrl }} style={styles.imgStyle} />
      <Text>{news.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  imgStyle: {
    height: 100,
    width: width - 32,
    marginVertical: 5
  },
  container: {
    display: 'flex',
    margin: 16
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  }
});

export default NewsItemComp;
