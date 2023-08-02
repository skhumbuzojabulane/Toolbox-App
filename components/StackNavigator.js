import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './Menu';
import ElectricalToolbox from './ElectricalToolbox';
import MachanicalToolbox from './MachanicalToolbox';
import NPSHcalculator from './NPSHcalculator';
import QuickSelect from './QuickSelect';
import UnitsAndConversions from './UnitsAndConversions';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="ElectricalToolbox" component={ElectricalToolbox} />
        <Stack.Screen name="MachanicalToolbox" component={MachanicalToolbox} />
        <Stack.Screen name="NPSHcalculator" component={NPSHcalculator} />
        <Stack.Screen name="QuickSelect" component={QuickSelect} />
        <Stack.Screen name="UnitsAndConversions" component={UnitsAndConversions} />
      </Stack.Navigator>
  );
};

export default StackNavigator;
