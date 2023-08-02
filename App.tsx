import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 

import Splash from './screens/Splash';
import StackNavigator from './components/StackNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
});

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {isLoading ? <Splash /> : <StackNavigator />}
      </NavigationContainer>
    </View>
  );
}
