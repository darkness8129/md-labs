import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, processColor, View} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';

import {styles} from './styles';
import {TabBar} from '../../components';

interface Point {
  x: number;
  y: number;
}

export const ChartScreen: FC = () => {
  const [generating, setGenerating] = useState<boolean>(true);
  const [data, setData] = useState<Point[]>([]);

  useEffect(() => {
    const generateData = (): void => {
      // array of points
      let data: Point[] = [];

      // pi with 3 digits
      const PI: number = Number(Math.PI.toFixed(3));

      // initial value of x
      let x: number = -2 * PI;

      while (x <= 2 * PI) {
        // push point to array
        data.push({x, y: Math.sin(x)});

        // increase x
        x += 0.001;
      }

      setData(data);
      setGenerating(false);
    };

    generateData();
  }, []);

  return (
    <View style={styles.container}>
      <TabBar />
      {generating ? (
        <ActivityIndicator />
      ) : (
        <LineChart
          style={styles.chart}
          data={{
            dataSets: [
              {
                label: '',
                values: data,
                config: {
                  circleColor: processColor('blue'),
                  circleRadius: 2,
                },
              },
            ],
          }}
          legend={{enabled: false}}
        />
      )}
    </View>
  );
};
