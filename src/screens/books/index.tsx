import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React, { FC } from 'react'

import { BooksStackList, BooksScreenNavigationProps } from '~/types'

import { BooksListScreen, BookScreen, AddBookScreen } from './screens'
import { styles } from './styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

const BooksStack = createStackNavigator<BooksStackList>()

const BooksListHeader: FC = () => {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('AddBookScreen')}>
      <View style={styles.booksListHeader}>
        <Icon name="plus" size={24} color="black" />
      </View>
    </TouchableWithoutFeedback>
  )
}

interface BooksScreenProps
  extends BooksScreenNavigationProps<
    'BooksListScreen' | 'BookScreen' | 'AddBookScreen'
  > {}

export const BooksScreen: FC<BooksScreenProps> = () => {
  return (
    <BooksStack.Navigator>
      <BooksStack.Screen
        name="BooksListScreen"
        component={BooksListScreen}
        options={{ headerTitle: () => <BooksListHeader /> }}
      />
      <BooksStack.Screen name="BookScreen" component={BookScreen} />
      <BooksStack.Screen name="AddBookScreen" component={AddBookScreen} />
    </BooksStack.Navigator>
  )
}
