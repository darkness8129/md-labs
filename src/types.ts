import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'
import { Image as ImageType } from 'react-native-image-crop-picker'

export enum Orientation {
  Portrait = 'PORTRAIT',
  Landscape = 'LANDSCAPE',
}

export interface GettingData {
  loading: boolean
  error: string
  refresh?: boolean
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

export interface ServerImage {
  comments: number
  downloads: number
  favorites: number
  id: number
  imageSize: number
  imageHeight: number
  imageWidth: number
  largeImageURL: string
  likes: number
  pageURL: string
  previewHeight: number
  previewWidth: number
  previewURL: string
  tags: string
  type: string
  user: string
  userImageURL: string
  user_id: number
  views: number
  webformatHeight: number
  webformatWidth: number
  webformatURL: string
}

export interface Images {
  left: ImageType[] | ServerImage[]
  center: ImageType[] | ServerImage[]
  right: ImageType[] | ServerImage[]
  column: 'left' | 'center' | 'right'
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
