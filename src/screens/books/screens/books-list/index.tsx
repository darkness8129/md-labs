import React, { FC, useEffect, useState } from 'react'
import { View, TextInput, Text, ActivityIndicator } from 'react-native'
import { FlatList, Swipeable, TouchableOpacity } from 'react-native-gesture-handler'

import { BookInterface, BooksScreenNavigationProps, GettingData } from '~/types'

import { Book } from './components'
import { styles } from './styles'

interface Query {
  search: string
}

interface BooksListScreenProps
  extends BooksScreenNavigationProps<'BooksList' | 'Book' | 'AddBook'> {}

export const BooksListScreen: FC<BooksListScreenProps> = ({ route }) => {
  const [books, setBooks] = useState<BookInterface[]>([])
  const [gettingBooks, setGettingBooks] = useState<GettingData>({
    error: '',
    loading: false,
  })
  const [query, setQuery] = useState<Query>({ search: '' })

  useEffect(() => {
    const getBooks = async () => {
      setGettingBooks({ loading: true, error: '' })

      try {
        // get books
        const response = await fetch(
          // encodeURIComponent need here to replacing
          // each defined character sequence with one, two, three, or four character sequences
          // it works for all symbols exclude latin letters, decimal digits, - _. ! ~ * '()
          `https://api.itbook.store/1.0/search/${encodeURIComponent(query.search)}`,
        )
        const data: { books: BookInterface[] } = await response.json()

        setBooks(data.books)
      } catch (err) {
        setGettingBooks((prev) => ({ ...prev, error: `Error: ${err.message}` }))
      } finally {
        setGettingBooks((prev) => ({ ...prev, loading: false }))
      }
    }

    // get books only when search length greater than 3
    if (query.search.length >= 3) {
      getBooks()
    } else {
      setBooks([])
    }
  }, [query])

  // add new book
  useEffect(() => {
    const newBook: BookInterface | undefined = route.params?.newBook

    // if have new book in params - add new book
    if (newBook) setBooks((prev) => [...prev, newBook])
  }, [route.params?.newBook])

  // delete book
  const onDelete = (id: string): void => {
    setBooks((prev) => [...prev].filter((book) => book.isbn13 !== id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.input.container}>
        <TextInput
          style={styles.input.input}
          onChangeText={(value) => setQuery({ search: value })}
          value={query.search}
          placeholder="Search..."
        />
      </View>

      {books.length === 0 && !gettingBooks.loading && !gettingBooks.error && (
        <Text style={styles.text.noBooks}>No books found...</Text>
      )}

      {!!gettingBooks.error && (
        <View>
          <Text style={styles.text.error}>{gettingBooks.error}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setQuery((prev) => ({ ...prev }))}
          >
            <Text style={styles.refresh}>Refresh</Text>
          </TouchableOpacity>
        </View>
      )}

      {gettingBooks.loading && <ActivityIndicator />}

      {books.length > 0 && (
        <FlatList
          style={styles.booksList}
          data={books}
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
                <Book book={item} key={item.isbn13} searchValue={query.search} />
              </Swipeable>
            )
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  )
}
