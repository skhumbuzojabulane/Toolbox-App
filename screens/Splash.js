import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    width: 220,
    height: 220
  }
});

export default function Splash() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <LinearGradient
      colors={['#53789E', '#395877', '#C5E2F7']} 
      useAngle={true}
      angle={45} // change this value to control the angle of the gradient
      style={styles.container}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        {isLoading ? (
            <Image
            source={require('../assets/Loader.png')}
            style={styles.loading}
            resizeMode="contain"/>
        ) : null}

    </LinearGradient>
  );
}
