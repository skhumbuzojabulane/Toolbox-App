import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    StatusBar 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  message: {
    
    marginBottom: 20,
    color: '#000'
  },
  tryAgainButton: {
    padding: 10,
    backgroundColor: '#53789E',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
  },
});

const NoInternetScreen = ({ onTryAgain }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Text style={styles.message}>No Internet. Connect to Wi-Fi or Mobile network.</Text>
      <TouchableOpacity style={styles.tryAgainButton} onPress={onTryAgain}>
        <Text style={styles.buttonText}>Try Again!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoInternetScreen;
