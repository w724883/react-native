import React, { Component } from 'react';
import {
  View,
  WebView
} from 'react-native';
import styles from './styles';

import html from './webview/dialog.html';


export default class Webview extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={html}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}
