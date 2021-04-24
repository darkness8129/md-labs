import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import {TabBar} from '../../components';

export const Diagram: FC = () => {
  return (
    <View style={styles.container}>
      <TabBar />
      <Text style={{color: 'red'}}>Diagram</Text>
    </View>
  );
};
