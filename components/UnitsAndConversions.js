import React from 'react';
import {View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default class UnitsAndConversions extends React.Component {
  render() {
    return ( <WebView source={{uri: 'http://www.aquateconline.com/ToolboxApp/PumpToolbox.aspx?Page=Units'}} />
    );
  }
}