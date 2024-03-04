import React from 'react';
import { Text, TextProps } from 'react-native';
import { DefaultMaxFontSizeMultiplier } from '../constants/contant';

export default function GeneralText({
  maxFontSizeMultiplier,
  ...props
}: TextProps) {
  return (
    <Text
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      maxFontSizeMultiplier={
        maxFontSizeMultiplier || DefaultMaxFontSizeMultiplier
      }
    />
  );
}
