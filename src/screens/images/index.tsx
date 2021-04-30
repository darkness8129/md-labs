import React, { FC, useState } from 'react'
import { View, Dimensions, Alert } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import ImagePicker, { Image } from 'react-native-image-crop-picker'
import AutoHeightImage from 'react-native-auto-height-image'

import { Header } from '~/components'
import { useOrientation } from '~/hooks'
import { Orientation } from '~/types'

import { styles } from './styles'

export const ImagesScreen: FC = () => {
  const [images, setImages] = useState<Image[]>([])

  const orientation = useOrientation()

  // add image
  const pickImage = async () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    })
      .then((image) => {
        // set images
        setImages((prev) => [...prev, image])
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

  return (
    <View style={styles.container}>
      <Header
        onAddButtonClick={pickImage}
        extendStyle={styles.header(
          orientation === Orientation.Portrait ? getStatusBarHeight() : 10,
        )}
      />

      <View style={styles.images}>
        {images.map((image, index) => (
          <AutoHeightImage
            source={{ uri: `data:${image.mime};base64,${image.data}` }}
            width={
              (index + 1) % 6 === 2
                ? (Dimensions.get('window').width / 5) * 3
                : Dimensions.get('window').width / 5
            }
            key={index}
          />
        ))}
      </View>
    </View>
  )
}
