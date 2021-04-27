import { createStackNavigator } from '@react-navigation/stack'

import React, { FC } from 'react'

import { BooksStackList } from '~/types'

import { BooksListScreen, BookScreen } from './screens'

const BooksStack = createStackNavigator<BooksStackList>()

export const BooksScreen: FC = () => {
  return (
    <BooksStack.Navigator>
      <BooksStack.Screen name="BooksListScreen" component={BooksListScreen} />
      <BooksStack.Screen name="BookScreen" component={BookScreen} />
    </BooksStack.Navigator>
  )
}
