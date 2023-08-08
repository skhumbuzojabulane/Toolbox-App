import React from 'react';
import { WebView } from 'react-native-webview';

export default class MachenicalToolbox extends React.Component {
  render() {
    return (
      <WebView source={{uri: 'http://www.aquateconline.com/ToolboxApp/PumpToolbox.aspx'}} />
    );
  }
}