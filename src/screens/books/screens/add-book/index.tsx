import React, { FC, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import { BookInterface, BooksScreenNavigationProps } from '~/types'

import { styles } from './styles'

interface AddBookScreenProps
  extends BooksScreenNavigationProps<
    'BooksListScreen' | 'BookScreen' | 'AddBookScreen'
  > {}

export const AddBookScreen: FC<AddBookScreenProps> = ({ navigation }) => {
  const [book, setBook] = useState<BookInterface>({
    title: '',
    subtitle: '',
    price: '',
    image: '',
    isbn13: new Date().toString(),
  })
  const [errors, setErrors] = useState<string[]>([])

  const addBook = (): void => {
    const errors: string[] = []

    // check errors
    if (book.title.length > 32 || book.title.length === 0) {
      errors.push('Wrong length of book title!')
    }
    if (book.subtitle.length > 32 || book.subtitle.length === 0) {
      errors.push('Wrong length of book subtitle!')
    }
    if (!/^\d+(\.\d+)?$/.test(book.price)) {
      errors.push('Wrong price of book!')
    }
    setErrors(errors)

    // if no errors - add new book
    if (!errors.length) {
      navigation.navigate('BooksListScreen', {
        newBook: { ...book, price: book.price + '$' },
      })
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Text>Title</Text>

        <TextInput
          style={styles.input}
          onChangeText={(title) => setBook((prev) => ({ ...prev, title }))}
          value={book.title}
        />
      </View>

      <View style={styles.item}>
        <Text>Subtitle</Text>

        <TextInput
          style={styles.input}
          onChangeText={(subtitle) => setBook((prev) => ({ ...prev, subtitle }))}
          value={book.subtitle}
        />
      </View>

      <View style={styles.item}>
        <Text>Price</Text>

        <TextInput
          style={styles.input}
          onChangeText={(price) => setBook((prev) => ({ ...prev, price }))}
          value={book.price}
        />
      </View>

      <View style={styles.item}>
        {errors.map((error) => (
          <Text style={styles.error} key={error}>
            {error}
          </Text>
        ))}
      </View>

      <View style={styles.button.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button.button}
          onPress={addBook}
        >
          <Text style={styles.button.text}>Add</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
