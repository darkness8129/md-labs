import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Text, View, ViewStyle, TouchableHighlight } from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import Highlighter from 'react-native-highlight-words'

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
import { BookInterface } from '~/types'

import { styles } from './styles'

interface BookProps {
  extendStyle: ViewStyle | null
  book: BookInterface

  searchValue: string
}

export const Book: FC<BookProps> = ({ book, extendStyle, searchValue }) => {
  const navigation = useNavigation()

  const showFullInfoAboutBook = (): void => {
    // get selected book from array of books
    const selectedBook: BookInterface = [
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
    ].filter((b) => b.isbn13 === book.isbn13)[0]

    if (selectedBook)
      navigation.navigate('BookScreen', { book: { ...selectedBook, image: book.image } })
  }

  return (
    <TouchableHighlight onPress={showFullInfoAboutBook} underlayColor="lightgrey">
      <View style={[styles.container.base, extendStyle]}>
        <View style={styles.imageContainer}>
          {!!book.image && <AutoHeightImage source={book.image} width={80} />}
        </View>

        <View style={styles.text.container}>
          <Highlighter
            highlightStyle={styles.text.highlighted}
            searchWords={searchValue.split(' ')}
            textToHighlight={book.title}
            style={[styles.text.base, styles.text.title]}
          />
          {!!book.subtitle && (
            <Text style={[styles.text.base, styles.text.subtitle]}>{book.subtitle}</Text>
          )}
          <Text style={[styles.text.base, styles.text.price]}>{book.price}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}
