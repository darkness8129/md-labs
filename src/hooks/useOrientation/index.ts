import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

import { Orientation } from '../../types'

export const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>(Orientation.Portrait)

  const isPortrait = () => {
    const dim = Dimensions.get('screen')
    return dim.height >= dim.width
  }

  useEffect(() => {
    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      setOrientation(isPortrait() ? Orientation.Portrait : Orientation.Landscape)
    })

    // initial setting
    setOrientation(isPortrait() ? Orientation.Portrait : Orientation.Landscape)
  }, [])

  return orientation
}
