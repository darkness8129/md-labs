import React, {FC} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import {BookInterface} from '../../types';
import {styles} from './styles';

interface BookProps {
  extendStyle: ViewStyle | null;
  book: BookInterface;
}

export const Book: FC<BookProps> = ({book, extendStyle}) => {
  return (
    <View style={[styles.container.base, extendStyle]}>
      <View style={styles.imageContainer}>
        {!!book.image && <AutoHeightImage source={book.image} width={80} />}
      </View>

      <View style={styles.text.container}>
        <Text style={[styles.text.base, styles.text.title]}>{book.title}</Text>
        {!!book.subtitle && (
          <Text style={[styles.text.base, styles.text.subtitle]}>
            {book.subtitle}
          </Text>
        )}
        <Text style={[styles.text.base, styles.text.price]}>{book.price}</Text>
      </View>
    </View>
  );
};
