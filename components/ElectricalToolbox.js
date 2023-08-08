import React from 'react';
import { WebView } from 'react-native-webview';

export default class ElectricalToolbox extends React.Component {
  render() {
    return (
      <WebView source={{uri: 'http://www.aquateconline.com/ToolboxApp/ElectricalToolbox.aspx'}} />
    );
  }
}