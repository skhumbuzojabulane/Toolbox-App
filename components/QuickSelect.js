import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const QuickSelect = () => {
  const linkUrl = 'http://aol-prebeta.aquateconline.com/(S(xd3gfz3dbjjhcehqg3pnxis1))/duty_franklin.aspx';

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: linkUrl }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default QuickSelect