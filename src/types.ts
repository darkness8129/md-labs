import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'

export enum Orientation {
  Portrait = 'PORTRAIT',
  Landscape = 'LANDSCAPE',
}

export interface BookInterface {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: any
  authors?: string
  publisher?: string
  pages?: string
  year?: string
  rating?: string
  desc?: string
  url?: string
}

// ------- NAVIGATION ---------
export type RootTabsList = {
  General: undefined
  Drawing: undefined
  Books: undefined
  Images: undefined
}

export type DrawingTabsList = {
  Chart: undefined
  Diagram: undefined
}

export type BooksStackList = {
  BooksList: { newBook: BookInterface; bookId?: string } | undefined
  Book: { bookId: string; newBook?: BookInterface } | undefined
  AddBook: undefined
}

export type BooksScreenNavigationProps<RouteName extends keyof BooksStackList> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<BooksStackList, RouteName>,
    BottomTabNavigationProp<RootTabsList>
  >
  route: RouteProp<BooksStackList, RouteName>
}
