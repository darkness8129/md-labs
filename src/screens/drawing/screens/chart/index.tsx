import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import {TabBar} from '../../components';

export const Chart: FC = () => {
  return (
    <View style={styles.container}>
      <TabBar />
      <Text style={{color: 'red'}}>Chart</Text>
    </View>
  );
};
