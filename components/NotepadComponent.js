import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class NotePadComponent extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.questionText}>질문</Text>
        </View>
        <View>
          <Text style={styles.responseText}>답변</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  questionText: {
    textAlign: 'center',
    fontSize: 12,
  },
  responseText: {
    textAlign: 'center',
    fontSize: 12,
  }
})
