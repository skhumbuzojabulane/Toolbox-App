import React from 'react';
import { WebView } from 'react-native-webview';

export default class QuickSelect extends React.Component {
  render() {
    return (
      <WebView source={{uri: 'http://aol-prebeta.aquateconline.com/login.aspx?Login=Franklin&cAuth=wjz.J7zO7gq7kYleQtITYe/kH2TF0vvUFpjuVYY96jW4mJZ9mzXbm&MobileApp=True'}} />
    );
  }
}