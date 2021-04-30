import { View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React, { FC } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { styles } from './styles'

interface HeaderProps {
  extendStyle?: ViewStyle

  onAddButtonClick: () => any
}

export const Header: FC<HeaderProps> = ({ onAddButtonClick, extendStyle }) => {
  return (
    <TouchableWithoutFeedback onPress={onAddButtonClick}>
      <View style={[styles.container, extendStyle]}>
        <Icon name="plus" size={24} color="black" />
      </View>
    </TouchableWithoutFeedback>
  )
}
