import React, { FC, useEffect, useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { FlatList, Swipeable, TouchableOpacity } from 'react-native-gesture-handler'

import { BookInterface, BooksScreenNavigationProps } from '~/types'
// RN do not have dynamic imports :(
import * as book1 from '~/screens/books/assets/files/9780321856715.json'
import * as book2 from '~/screens/books/assets/files/9780321862969.json'
import * as book3 from '~/screens/books/assets/files/9781118841471.json'
import * as book4 from '~/screens/books/assets/files/9781430236054.json'
import * as book5 from '~/screens/books/assets/files/9781430237105.json'
import * as book6 from '~/screens/books/assets/files/9781430238072.json'
import * as book7 from '~/screens/books/assets/files/9781430245124.json'
import * as book8 from '~/screens/books/assets/files/9781430260226.json'
import * as book9 from '~/screens/books/assets/files/9781449308360.json'
import * as book10 from '~/screens/books/assets/files/9781449342753.json'

import BooksList from '../../assets/files/BooksList.json'
import { Book } from './components'
import { transformBooks } from './utils'
import { styles } from './styles'

interface BooksListScreenProps
  extends BooksScreenNavigationProps<'BooksList' | 'Book' | 'AddBook'> {}

export const BooksListScreen: FC<BooksListScreenProps> = ({ navigation, route }) => {
  const [filteredBooks, setFilteredBooks] = useState<BookInterface[]>(
    transformBooks(BooksList.books),
  )
  const [allBooks, setAllBooks] = useState<BookInterface[]>(
    transformBooks(BooksList.books),
  )
  const [extendedBooks, setExtendedBooks] = useState<BookInterface[]>([
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
    book8,
    book9,
    book10,
  ])
  const [searchValue, setSearchValue] = useState<string>('')

  // add new book
  useEffect(() => {
    const newBook: BookInterface | undefined = route.params?.newBook

    if (newBook) {
      setFilteredBooks((prev) => [...prev, newBook])
      setAllBooks((prev) => [...prev, newBook])
      setExtendedBooks((prev) => [...prev, newBook])
    }
  }, [route.params?.newBook])

  const onSearch = (value: string): void => {
    setSearchValue(value)

    // filter books
    setFilteredBooks(
      allBooks.filter(
        (book) => book.title.toLowerCase().indexOf(value.toLocaleLowerCase()) !== -1,
      ),
    )
  }

  // delete book
  const onDelete = (id: string): void => {
    setAllBooks((prev) => [...prev].filter((book) => book.isbn13 !== id))
    setFilteredBooks((prev) => [...prev].filter((book) => book.isbn13 !== id))
  }

  // show full info about book
  const showFullInfoAboutBook = (book: BookInterface): void => {
    // get selected book from array of extended books
    const selectedBook: BookInterface = extendedBooks.filter(
      (b) => b.isbn13 === book.isbn13,
    )[0]

    if (selectedBook)
      navigation.navigate('Book', { book: { ...selectedBook, image: book.image } })
  }

  return (
    <View style={styles.container}>
      <View style={styles.input.container}>
        <TextInput
          style={styles.input.input}
          onChangeText={(value) => onSearch(value)}
          value={searchValue}
          placeholder="Search..."
        />
      </View>

      {filteredBooks.length === 0 ? (
        <View style={styles.noBooks.container}>
          <Text style={styles.noBooks.text}>No books matching your search...</Text>
        </View>
      ) : (
        <FlatList
          style={styles.booksList}
          data={filteredBooks}
          keyExtractor={(item) => item.isbn13}
          renderItem={({ item }) => {
            return (
              <Swipeable
                renderRightActions={() => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onDelete(item.isbn13)}
                  >
                    <View style={styles.delete.container}>
                      <Text style={styles.delete.text}>Delete</Text>
                    </View>
                  </TouchableOpacity>
                )}
              >
                <Book
                  book={item}
                  key={item.isbn13}
                  searchValue={searchValue}
                  showFullInfoAboutBook={() => showFullInfoAboutBook(item)}
                />
              </Swipeable>
            )
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  )
}
