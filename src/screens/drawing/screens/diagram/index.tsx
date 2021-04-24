import React, {FC} from 'react';
import {processColor, View, Dimensions} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';

import {styles} from './styles';
import {TabBar} from '../../components';
import {useOrientation} from '../../hooks';
import {Orientation} from '../../types';
import {data} from './constants';

export const DiagramScreen: FC = () => {
  const orientation = useOrientation();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <TabBar />
      <PieChart
        style={{
          width:
            orientation === Orientation.Portrait
              ? windowWidth - 20
              : windowHeight - 120,
          height:
            orientation === Orientation.Portrait
              ? windowWidth - 20
              : windowHeight - 120,
        }}
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
