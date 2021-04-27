import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'

import { DrawingTabsList } from '~/types'

import { ChartScreen, DiagramScreen } from './screens'

const DrawingTabs = createBottomTabNavigator<DrawingTabsList>()

export const DrawingScreen: FC = () => {
  return (
    <DrawingTabs.Navigator screenOptions={{ tabBarVisible: false }}>
      <DrawingTabs.Screen name="ChartScreen" component={ChartScreen} />
      <DrawingTabs.Screen name="DiagramScreen" component={DiagramScreen} />
    </DrawingTabs.Navigator>
  )
}
