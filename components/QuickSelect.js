import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: '#000',  
  },
});

const QuickSelect = () => {
  return (
    <View>
      <Text style={styles.text}>QuickSelect</Text>
    </View>
  )
}

export default QuickSelect