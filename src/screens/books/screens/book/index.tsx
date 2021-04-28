import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AutoHeightImage from 'react-native-auto-height-image'

import { BookScreenNavigationProps } from '~/types'

import { styles } from './styles'

interface BookScreenProps
  extends BookScreenNavigationProps<'BooksListScreen' | 'BookScreen'> {}

export const BookScreen: FC<BookScreenProps> = ({ route }) => {
  const book = route.params!.book

  return (
    <ScrollView style={styles.container}>
      {!!book.image && (
        <View style={styles.imageContainer}>
          <AutoHeightImage source={book.image} width={200} />
        </View>
      )}

      <Text style={styles.text.base}>
        <Text style={styles.text.title}>Title: </Text>
        {route.params?.book.title}
      </Text>

      <Text style={styles.text.base}>
        <Text style={styles.text.title}>Subtitle: </Text>
        {route.params?.book.subtitle}
      </Text>

      <Text style={[styles.text.base, styles.text.mb]}>
        <Text style={styles.text.title}>Description: </Text>
        {route.params?.book.desc}
      </Text>

      <Text style={styles.text.base}>
        <Text style={styles.text.title}>Authors: </Text>
        {route.params?.book.authors}
      </Text>
      <Text style={[styles.text.base, styles.text.mb]}>
        <Text style={styles.text.title}>Publisher: </Text>
        {route.params?.book.publisher}
      </Text>

      <Text style={styles.text.base}>
        <Text style={styles.text.title}>Pages: </Text>
        {route.params?.book.pages}
      </Text>
      <Text style={styles.text.base}>
        <Text style={styles.text.title}>Year: </Text>
        {route.params?.book.year}
      </Text>
      <Text style={styles.text.base}>
        <Text style={styles.text.title}>Rating: </Text>
        {route.params?.book.rating}/5
      </Text>
    </ScrollView>
  )
}
