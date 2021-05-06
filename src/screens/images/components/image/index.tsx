import React, { FC, useState } from 'react'
import { View, Image as ImageElement, ActivityIndicator } from 'react-native'
import { Image as ImageType } from 'react-native-image-crop-picker'
import AutoHeightImage from 'react-native-auto-height-image'

import { ServerImage } from '~/types'

import { styles } from './styles'

interface ImageComponentProps {
  image: ImageType | ServerImage

  size: number
}

export const ImageComponent: FC<ImageComponentProps> = ({ image, size }) => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <View style={styles.container(size)}>
      {((image as ImageType).width || (image as ServerImage).imageWidth) >=
      ((image as ImageType).height || (image as ServerImage).imageHeight) ? (
        <AutoHeightImage
          source={{
            uri:
              'width' in image
                ? `data:${image.mime};base64,${image.data}`
                : image.largeImageURL,
          }}
          width={size - 2} // -2  - because 2px for borders
          onLoadEnd={() => setLoading(false)}
        />
      ) : (
        <ImageElement
          source={{
            uri:
              'width' in image
                ? `data:${image.mime};base64,${image.data}`
                : image.largeImageURL,
          }}
          style={styles.verticalImage(size)}
          resizeMode="contain"
          onLoadEnd={() => setLoading(false)}
        />
      )}

      {loading && <ActivityIndicator style={styles.loader} />}
    </View>
  )
}
