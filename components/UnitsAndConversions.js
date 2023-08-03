import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UnitsAndConversions = () => {
  const linkUrl = 'http://www.aquateconline.com/ToolboxApp/PumpToolbox.aspx?Page="Units';

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: linkUrl }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default UnitsAndConversions