import React, { memo } from 'react';
import GeneralText from './GeneralText';

import { View } from 'react-native';

function ListEmpty({
  loading,
  message,
  ActivityIndicatorComponent,
  listMessageContainerStyle,
  listMessageTextStyle,
  maxFontSizeMultiplier,
}) {
  return (
    <View style={listMessageContainerStyle}>
      {loading ? (
        <ActivityIndicatorComponent />
      ) : (
        <GeneralText
          maxFontSizeMultiplier={maxFontSizeMultiplier}
          style={listMessageTextStyle}>
          {message}
        </GeneralText>
      )}
    </View>
  );
}

export default memo(ListEmpty);
