import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const GeneralScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Юхимчук Ярослав</Text>
      <Text>Група ІВ-81</Text>
      <Text>ЗК ІВ-8129</Text>
    </View>
  );
};

const SecondItem = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Item 2</Text>
    </View>
  );
};

export const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Icon
                  name={route.name === 'General' ? 'home' : 'cog'}
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
          <Tab.Screen name="Item2" component={SecondItem} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
