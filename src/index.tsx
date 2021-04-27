import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'

import { GeneralScreen, DrawingScreen, BooksScreen } from './screens'
import { RootTabsList } from './types'

const RootTabs = createBottomTabNavigator<RootTabsList>()

export const App = () => {
  enableScreens()

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootTabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName: string = 'home'

              if (route.name === 'Drawing') iconName = 'pencil'
              else if (route.name === 'Books') iconName = 'book'

              return <Icon name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <RootTabs.Screen name="General" component={GeneralScreen} />
          <RootTabs.Screen name="Drawing" component={DrawingScreen} />
          <RootTabs.Screen name="Books" component={BooksScreen} />
        </RootTabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
