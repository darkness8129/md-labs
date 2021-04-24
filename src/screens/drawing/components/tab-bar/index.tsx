import {useNavigation, useRoute} from '@react-navigation/core';
import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export const TabBar: FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.text.container}>
        <TouchableOpacity
          style={[
            styles.button.base,
            route.name === 'ChartScreen' && styles.button.active,
          ]}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('ChartScreen');
          }}>
          <Text
            style={[
              styles.text.base,
              route.name === 'ChartScreen' && styles.text.active,
            ]}>
            Графік
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button.base,
            route.name === 'DiagramScreen' && styles.button.active,
          ]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('DiagramScreen')}>
          <Text
            style={[
              styles.text.base,
              route.name === 'DiagramScreen' && styles.text.active,
            ]}>
            Діаграма
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};