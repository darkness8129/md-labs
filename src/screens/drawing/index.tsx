import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';

import {Chart, Diagram} from './screens';

export const Drawing: FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{tabBarVisible: false}}>
      <Tab.Screen name="Chart" component={Chart} />
      <Tab.Screen name="Diagram" component={Diagram} />
    </Tab.Navigator>
  );
};
