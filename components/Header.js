import { 
  View, 
  Text, 
  Image,
  StyleSheet,
  StatusBar,
 } from 'react-native'
import React from 'react'

const styles = StyleSheet.create( {
  container: {
    position: 'relative', // Set container to relative positioning
    width: '100%',
    height: 200, // Set the height to make it bigger
  },

  image: {
    width: '100%',
    height: '100%', // Set the height to '100%' to fill the container
    resizeMode: 'cover',
  },

  textContainer: {
    position: 'absolute',
    top: 90,
    left: 10,
  },

  text: {
    color: '#185685',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Image
        source={require('../images/background-images/background.png')}
        style={styles.image}/> 
        <View style={styles.textContainer}>
          <Text style={styles.text}>Franklin Engineer's Toolbox</Text>
      </View>
    </View>
  )
}

export default Header