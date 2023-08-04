import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './Menu';
import ElectricalToolbox from './ElectricalToolbox';
import MechanicalToolbox from './MechanicalToolbox';
import NPSHcalculator from './NPSHcalculator';
import QuickSelect from './QuickSelect';
import UnitsAndConversions from './UnitsAndConversions';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="ElectricalToolbox" component={ElectricalToolbox} options={{ title: 'Electrical Toolbox' }} />
        <Stack.Screen name="MechanicalToolbox" component={MechanicalToolbox} options={{ title: 'Mechanical Toolbox' }} />
        <Stack.Screen name="NPSHcalculator" component={NPSHcalculator} options={{ title: 'NPSH Calculator' }} />
        <Stack.Screen name="QuickSelect" component={QuickSelect} options={{ title: 'Quick Select' }} />
        <Stack.Screen name="UnitsAndConversions" component={UnitsAndConversions} options={{ title: 'Units & Conversions' }} />
      </Stack.Navigator>
  );
};

export default StackNavigator;
