import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { BookScreenNavigationProps } from '~/types'

interface BookScreenProps
  extends BookScreenNavigationProps<'BooksListScreen' | 'BookScreen'> {}

export const BookScreen: FC<BookScreenProps> = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{route.params?.book.title}</Text>
    </View>
  )
}
