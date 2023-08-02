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
    
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: 109,
  },

  textContainer: {
    position: 'absolute',
    top: 40, 
    left: 10, 
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
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