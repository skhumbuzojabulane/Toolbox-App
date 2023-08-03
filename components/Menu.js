import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';

import Header from './Header'

const styles = StyleSheet.create({
  container: {
    
  },
  menuItem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingVertical: 25,
    paddingBottom: 25,
    borderWidth: 1,
    borderBottomColor: '#CCCCCC',
    borderTopColor: '#CCCCCC',
  },
  menuText: {
    fontSize: 18,
    marginLeft: 40,
    color: '#000',  
  },

  menuImage: {
    width: 35, 
    height: 35,
  },
});

const Stack = createStackNavigator();

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MechanicalToolbox')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/Icons/Pump.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>Mechanical Toolbox</Text>
        </View>
        <Icon name="arrow-forward-outline" size={25} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('NPSHcalculator')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/Icons/Calculator.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>NPSH Calculator</Text>
        </View>
        <Icon name="arrow-forward-outline" size={25} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ElectricalToolbox')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/Icons/Electric.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>Electrical Toolbox</Text>
        </View>
        <Icon name="arrow-forward-outline" size={25} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('QuickSelect')} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/Icons/Quick.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>Quick Select</Text>
        </View>
        <Icon name="arrow-forward-outline" size={25} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UnitsAndConversions')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/Icons/unit.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>Units and Conversions</Text>
        </View>
        <Icon name="arrow-forward-outline" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
