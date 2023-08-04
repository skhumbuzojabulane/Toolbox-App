import React, { useState, useEffect} from 'react';
import { 
  View, 
  StyleSheet 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import NetInfo from '@react-native-community/netinfo';

import Splash from './screens/Splash';
import StackNavigator from './components/StackNavigator';
import NoInternet from './components/NoInternet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const checkInternetConnectivity = async () => {
    const netInfoState = await NetInfo.fetch();
    setIsConnected(netInfoState.isConnected);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Clean up the subscription
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    checkInternetConnectivity();
  }, []); // Check connectivity on initial mount

  const handleTryAgain = () => {
    setIsLoading(true);
    checkInternetConnectivity();
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Splash />
      ) : isConnected ? (
        <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>
      ) : (
        <NoInternet onTryAgain={handleTryAgain} />
      )}
    </View>
  );
}
