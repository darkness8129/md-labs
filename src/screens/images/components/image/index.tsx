import React, { FC } from 'react'
import { View, Image as ImageElement } from 'react-native'
import { Image as ImageType } from 'react-native-image-crop-picker'
import AutoHeightImage from 'react-native-auto-height-image'

import { styles } from './styles'

interface ImageProps {
  image: ImageType

  size: number
}

export const ImageComponent: FC<ImageProps> = ({ image, size }) => {
  return (
    <View style={styles.container(size)}>
      {image.width >= image.height ? (
        <AutoHeightImage
          source={{ uri: `data:${image.mime};base64,${image.data}` }}
          width={size - 2} // -2  - because 2px for borders
        />
      ) : (
        <ImageElement
          source={{ uri: `data:${image.mime};base64,${image.data}` }}
          style={styles.verticalImage(size)}
          resizeMode="contain"
        />
      )}
    </View>
  )
}
