import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'

import { BooksStackList, BooksScreenNavigationProps } from '~/types'
import { Header } from '~/components'

import { BooksListScreen, BookScreen, AddBookScreen } from './screens'

const BooksStack = createStackNavigator<BooksStackList>()

interface BooksScreenProps
  extends BooksScreenNavigationProps<'BooksList' | 'Book' | 'AddBook'> {}

export const BooksScreen: FC<BooksScreenProps> = ({ navigation }) => {
  return (
    <BooksStack.Navigator>
      <BooksStack.Screen
        name="BooksList"
        component={BooksListScreen}
        options={{
          headerTitle: () => (
            <Header onAddButtonClick={() => navigation.navigate('AddBook')} />
          ),
        }}
      />
      <BooksStack.Screen name="Book" component={BookScreen} />
      <BooksStack.Screen name="AddBook" component={AddBookScreen} />
    </BooksStack.Navigator>
  )
}
