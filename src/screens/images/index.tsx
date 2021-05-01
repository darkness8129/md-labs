import React, { FC, useState } from 'react'
import { View, Dimensions, Alert } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import ImagePicker, { Image as ImageType } from 'react-native-image-crop-picker'
import { ScrollView } from 'react-native-gesture-handler'

import { Header } from '~/components'
import { useOrientation } from '~/hooks'
import { Orientation } from '~/types'

import { styles } from './styles'
import { ImageComponent } from './components'

interface Images {
  left: ImageType[]
  center: ImageType[]
  right: ImageType[]
  column: 'left' | 'center' | 'right'
}

export const ImagesScreen: FC = () => {
  const [images, setImages] = useState<Images>({
    left: [],
    center: [],
    right: [],
    column: 'right',
  })

  const orientation = useOrientation()

  // add image
  const pickImage = async () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    })
      .then((image) => {
        // set images
        setImages((prev) => {
          // when prev column 'right' - next will be 'left'
          if (prev.column === 'right') {
            return { ...prev, column: 'left', left: [...prev.left, image] }
          } else if (
            // when prev column 'left' and prev image small
            // or prev column 'center' - next will be right
            (prev.column === 'left' &&
              (prev.left.length + prev.center.length + prev.right.length + 1) % 7 !==
                2) ||
            prev.column === 'center'
          ) {
            return { ...prev, column: 'right', right: [...prev.right, image] }
          }

          // when prev column 'left' and prev image small
          return { ...prev, column: 'center', center: [...prev.center, image] }
        })
      })
      .catch(() => {
        // show error alert
        Alert.alert('Error', 'Failed to add image', [
          {
            text: 'Ok',
          },
        ])
      })
  }

  // sizes of images
  const smallSize: number = Dimensions.get('window').width / 5
  const bigSize: number = (Dimensions.get('window').width / 5) * 3

  return (
    <ScrollView style={styles.container}>
      <View>
        <Header
          onAddButtonClick={pickImage}
          extendStyle={styles.header(
            orientation === Orientation.Portrait ? getStatusBarHeight() : 10,
          )}
        />

        <View style={styles.images}>
          <View>
            {images.left.map((image, index) => (
              <ImageComponent image={image} key={index} size={smallSize} />
            ))}
          </View>

          <View>
            {images.center.map((image, index) => (
              <ImageComponent image={image} key={index} size={bigSize} />
            ))}
          </View>

          <View>
            {images.right.map((image, index) => (
              <ImageComponent image={image} key={index} size={smallSize} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
