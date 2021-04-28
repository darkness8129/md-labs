import React, { FC, useEffect, useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { BookInterface } from '~/types'

import BooksList from '../../assets/files/BooksList.json'
import { Book } from './components'
import { transformBooks } from './utils'
import { styles } from './styles'

export const BooksListScreen: FC = () => {
  const [books, setBooks] = useState<BookInterface[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    // add image for every book and set to the state
    setBooks(transformBooks(BooksList.books))
  }, [])

  const onSearch = (value: string): void => {
    setSearchValue(value)

    setBooks(
      transformBooks(BooksList.books).filter(
        (book) => book.title.toLowerCase().indexOf(value.toLocaleLowerCase()) !== -1,
      ),
    )
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.input.container}>
          <TextInput
            style={styles.input.input}
            onChangeText={(value) => onSearch(value)}
            value={searchValue}
            placeholder="Search..."
          />
        </View>

        {books.map((book, index) => (
          <Book
            book={book}
            key={book.isbn13}
            extendStyle={index === books.length - 1 ? styles.noBorder : null}
            searchValue={searchValue}
          />
        ))}

        {books.length === 0 && (
          <View style={styles.noBooks.container}>
            <Text style={styles.noBooks.text}>No books matching your search...</Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}
