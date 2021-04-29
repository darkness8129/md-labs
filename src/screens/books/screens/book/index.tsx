import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AutoHeightImage from 'react-native-auto-height-image'

import { BooksScreenNavigationProps } from '~/types'

import { styles } from './styles'

interface BookScreenProps
  extends BooksScreenNavigationProps<
    'BooksListScreen' | 'BookScreen' | 'AddBookScreen'
  > {}

export const BookScreen: FC<BookScreenProps> = ({ route }) => {
  const book = route.params?.book

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {!!book?.image && (
          <View style={styles.imageContainer}>
            <AutoHeightImage source={book.image} width={200} />
          </View>
        )}

        <Text style={styles.text.base}>
          <Text style={styles.text.title}>Title: </Text>
          {book?.title}
        </Text>

        <Text style={styles.text.base}>
          <Text style={styles.text.title}>Subtitle: </Text>
          {book?.subtitle}
        </Text>

        {book?.desc && (
          <Text style={[styles.text.base, styles.text.mb]}>
            <Text style={styles.text.title}>Description: </Text>
            {book?.desc}
          </Text>
        )}

        {book?.authors && (
          <Text style={styles.text.base}>
            <Text style={styles.text.title}>Authors: </Text>
            {book?.authors}
          </Text>
        )}

        {book?.publisher && (
          <Text style={[styles.text.base, styles.text.mb]}>
            <Text style={styles.text.title}>Publisher: </Text>
            {book?.publisher}
          </Text>
        )}

        {book?.pages && (
          <Text style={styles.text.base}>
            <Text style={styles.text.title}>Pages: </Text>
            {book?.pages}
          </Text>
        )}

        {book?.year && (
          <Text style={styles.text.base}>
            <Text style={styles.text.title}>Year: </Text>
            {book?.year}
          </Text>
        )}

        {book?.rating && (
          <Text style={styles.text.base}>
            <Text style={styles.text.title}>Rating: </Text>
            {book?.rating}/5
          </Text>
        )}

        {book?.price && (
          <Text style={styles.text.base}>
            <Text style={styles.text.title}>Rating: </Text>
            {book?.price}
          </Text>
        )}
      </View>
    </ScrollView>
  )
}
