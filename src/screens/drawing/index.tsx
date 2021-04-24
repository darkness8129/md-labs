import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {FC} from 'react';

import {ChartScreen, DiagramScreen} from './screens';

export const DrawingScreen: FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{tabBarVisible: false}}>
      <Tab.Screen name="ChartScreen" component={ChartScreen} />
      <Tab.Screen name="DiagramScreen" component={DiagramScreen} />
    </Tab.Navigator>
  );
};
