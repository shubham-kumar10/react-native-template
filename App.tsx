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
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { getNews } from './src/api';
import NewsItemComp from './src/components/NewsItemComp';
import { NewsResponse } from './src/interface';

const App = () => {
  useEffect(() => {
    getNews('all')
      .then(data => {
        return data.json();
      })
      .then(data => setNews(data.data));
  }, []);

  const [news, setNews] = useState<NewsResponse>();

  console.log(news);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsItemComp news={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default App;
