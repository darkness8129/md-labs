import { BookInterface } from '~/types'

export const transformBooks = (books: BookInterface[]): BookInterface[] => {
  // need this because RN do not have dynamic imports :(
  const getImage = (index: number) => {
    switch (index) {
      case 1:
        return require('~/screens/books/assets/images/Image_01.png')
      case 2:
        return require('~/screens/books/assets/images/Image_02.png')
      case 3:
        return require('~/screens/books/assets/images/Image_03.png')
      case 5:
        return require('~/screens/books/assets/images/Image_05.png')
      case 6:
        return require('~/screens/books/assets/images/Image_06.png')
      case 7:
        return require('~/screens/books/assets/images/Image_07.png')
      case 8:
        return require('~/screens/books/assets/images/Image_08.png')
      case 10:
        return require('~/screens/books/assets/images/Image_10.png')
      default:
        return ''
    }
  }

  // add image for every book
  const transformedBooks: BookInterface[] = books.map((book, index) => {
    return {
      ...book,
      image: getImage(index),
    }
  })

  return transformedBooks
}
