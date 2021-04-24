import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

import {GeneralScreen, DrawingScreen} from './screens';

const Diagram: FC = () => {
  return <Text>Drawing</Text>;
};

const Graphic: FC = () => {
  return <Text>Graphic</Text>;
};

export const App = () => {
  const Tab = createBottomTabNavigator();
  enableScreens();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              return (
                <Icon
                  name={route.name === 'General' ? 'home' : 'pencil'}
                  size={size}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="General" component={GeneralScreen} />
          <Tab.Screen name="Drawing" component={DrawingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
