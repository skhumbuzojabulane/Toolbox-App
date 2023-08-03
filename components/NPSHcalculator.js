import { View, StyleSheet } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const NPSHcalculator = () => {
  const linkUrl = 'http://www.aquateconline.com/ToolboxApp/PumpToolbox.aspx?Page="NPSH';

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: linkUrl }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default NPSHcalculator