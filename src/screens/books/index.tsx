import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const BooksScreen: FC = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Books</Text>
    </View>
  );
};
