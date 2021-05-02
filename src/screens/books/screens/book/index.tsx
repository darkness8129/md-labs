import React, { FC, useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AutoHeightImage from 'react-native-auto-height-image'

import { BookInterface, BooksScreenNavigationProps } from '~/types'

import { styles } from './styles'

interface BookScreenProps
  extends BooksScreenNavigationProps<'BooksList' | 'Book' | 'AddBook'> {}

export const BookScreen: FC<BookScreenProps> = ({ route }) => {
  const [book, setBook] = useState<BookInterface | undefined>(undefined)
  const [refresh, setRefresh] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getBook = async () => {
      setLoading(true)
      setError('')

      try {
        // get book
        const response = await fetch(
          `https://api.itbook.store/1.0/books/${route.params?.bookId}`,
        )
        const book: BookInterface = await response.json()

        setBook(book)
      } catch (err) {
        setError(`Error: ${err.message}`)
      } finally {
        setLoading(false)
        setRefresh(false)
      }
    }

    // get book only when refresh(first rendering -  refresh seted to true)
    if (refresh) getBook()
  }, [refresh, route.params?.bookId])

  return (
    <ScrollView style={styles.scrollView}>
      {!!error && (
        <View>
          <Text style={styles.error}>{error}</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setRefresh(true)}>
            <Text style={styles.refresh}>Refresh</Text>
          </TouchableOpacity>
        </View>
      )}

      {loading && <ActivityIndicator />}

      {book && (
        <View style={styles.container}>
          {!!book?.image && (
            <View style={styles.imageContainer}>
              <AutoHeightImage source={{ uri: book.image }} width={200} />
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
      )}
    </ScrollView>
  )
}
