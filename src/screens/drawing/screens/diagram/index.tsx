import React, {FC} from 'react';
import {processColor, Text, View} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';

import {styles} from './styles';
import {TabBar} from '../../components';

export const DiagramScreen: FC = () => {
  const data = [
    {
      percent: 0.05,
      color: 'brown',
    },
    {
      percent: 0.05,
      color: 'cyan',
    },
    {
      percent: 0.1,
      color: 'orange',
    },
    {
      percent: 0.8,
      color: 'blue',
    },
  ];

  return (
    <View style={styles.container}>
      <TabBar />
      <PieChart
        style={styles.diagram}
        data={{
          dataSets: [
            {
              label: '',
              values: data.map(item => ({
                value: item.percent,
              })),
              config: {
                colors: data.map(item => processColor(item.color)),
                drawValues: false,
              },
            },
          ],
        }}
        legend={{enabled: false}}
        transparentCircleRadius={0}
      />
    </View>
  );
};
