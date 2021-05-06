import { Image as ImageType } from 'react-native-image-crop-picker'

import { ServerImage, Images } from '~/types'

export const addImage = (images: Images, image: ImageType | ServerImage) => {
  // when prev column 'right' - next will be 'left'
  if (images.column === 'right') {
    return { ...images, column: 'left', left: [...images.left, image] }
  } else if (
    // when prev column 'left' and prev image small
    // or prev column 'center' - next will be right
    (images.column === 'left' &&
      (images.left.length + images.center.length + images.right.length + 1) % 7 !== 2) ||
    images.column === 'center'
  ) {
    return { ...images, column: 'right', right: [...images.right, image] }
  }

  // when prev column 'left' and prev image small
  return { ...images, column: 'center', center: [...images.center, image] }
}
