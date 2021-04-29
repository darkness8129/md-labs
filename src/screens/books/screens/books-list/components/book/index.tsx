import React, { FC } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import Highlighter from 'react-native-highlight-words'

import { BookInterface } from '~/types'

import { styles } from './styles'

interface BookProps {
  book: BookInterface

  searchValue: string

  showFullInfoAboutBook: () => any
}

export const Book: FC<BookProps> = ({
  book,

  searchValue,

  showFullInfoAboutBook,
}) => {
  return (
    <TouchableHighlight onPress={showFullInfoAboutBook} underlayColor="lightgrey">
      <View style={styles.container}>
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
