import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const GeneralScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Юхимчук Ярослав</Text>
      <Text>Група ІВ-81</Text>
      <Text>ЗК ІВ-8129</Text>
    </View>
  );
};
