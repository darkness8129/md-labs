import React, { FC, useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { BookInterface } from '~/types'

import BooksList from '../../assets/files/BooksList.json'
import { Book } from './components'
import { styles } from './styles'

export const BooksListScreen: FC = () => {
  const [books, setBooks] = useState<BookInterface[]>([])

  // const orientation = useOrientation()

  useEffect(() => {
    // need this because RN do not have dynamic imports :(
    const getImage = (index: number) => {
      switch (index) {
        case 1:
          return require('../../assets/images/Image_01.png')
        case 2:
          return require('../../assets/images/Image_02.png')
        case 3:
          return require('../../assets/images/Image_03.png')
        case 5:
          return require('../../assets/images/Image_05.png')
        case 6:
          return require('../../assets/images/Image_06.png')
        case 7:
          return require('../../assets/images/Image_07.png')
        case 8:
          return require('../../assets/images/Image_08.png')
        case 10:
          return require('../../assets/images/Image_10.png')
        default:
          return ''
      }
    }

    // add image for every book
    const books: BookInterface[] = BooksList.books.map((book, index) => {
      return {
        ...book,
        image: getImage(index),
      }
    })

    // set books to the state
    setBooks(books)
  }, [])

  return (
    <ScrollView>
      <View
        style={{
          // TODO remove this comments
          // marginTop:
          //   orientation === Orientation.Portrait ? getStatusBarHeight() : 0,
          marginTop: 0,
        }}
      >
        {books.map((book, index) => (
          <Book
            book={book}
            key={book.isbn13}
            extendStyle={index === books.length - 1 ? styles.noBorder : null}
          />
        ))}
      </View>
    </ScrollView>
  )
}
