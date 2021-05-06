import React, { FC, useEffect, useState } from 'react'
import {
  View,
  Dimensions,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import ImagePicker from 'react-native-image-crop-picker'
import { ScrollView } from 'react-native-gesture-handler'

import { Header } from '~/components'
import { useOrientation } from '~/hooks'
import { ServerImage, Orientation, GettingData, Images } from '~/types'

import { styles } from './styles'
import { ImageComponent } from './components'
import { addImage } from './utils'
import { INITIAL_IMAGES } from './constatns'

export const ImagesScreen: FC = () => {
  const [images, setImages] = useState<Images>(INITIAL_IMAGES)
  const [gettingServerImages, setGettingServerImages] = useState<GettingData>({
    error: '',
    loading: true,
    refresh: true,
  })

  const orientation = useOrientation()

  useEffect(() => {
    const getServerImages = async () => {
      setGettingServerImages((prev) => ({ ...prev, loading: true, error: '' }))

      try {
        // get images
        const response = await fetch(
          `https://pixabay.com/api/?key=19193969-87191e5db266905fe8936d565&q=red+cars&image_type=photo&per_page=21`,
        )
        const data: { hits: ServerImage[] } = await response.json()

        // variable with initial images
        let serverImages: Images = INITIAL_IMAGES

        // add all images to serverImages variable
        for (let i = 0; i < data.hits.length; i++) {
          serverImages = addImage(serverImages, data.hits[i]) as Images
        }

        // add images to state
        setImages(serverImages)
      } catch (err) {
        setGettingServerImages((prev) => ({ ...prev, error: `Error: ${err.message}` }))
      } finally {
        setGettingServerImages((prev) => ({
          ...prev,
          loading: false,
          refresh: false,
        }))
      }
    }

    // get images only when refresh(first rendering -  refresh seted to true)
    if (gettingServerImages.refresh) getServerImages()
  }, [gettingServerImages.refresh])

  // add image
  const pickImage = async () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    })
      .then((image) => {
        // add image to state
        setImages((prev) => addImage(prev, image) as Images)
      })
      .catch(() => {
        // show error alert
        Alert.alert('Info', 'Image not added', [
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

        {!!gettingServerImages.error && (
          <View>
            <Text style={styles.error}>{gettingServerImages.error}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                setGettingServerImages((prev) => ({
                  ...prev,
                  refresh: true,
                }))
              }
            >
              <Text style={styles.refresh}>Refresh</Text>
            </TouchableOpacity>
          </View>
        )}

        {gettingServerImages.loading && <ActivityIndicator />}

        {images.left.length > 0 &&
          images.center.length > 0 &&
          images.right.length > 0 &&
          !gettingServerImages.loading && (
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
          )}
      </View>
    </ScrollView>
  )
}
