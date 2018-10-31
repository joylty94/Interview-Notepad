import React, { Component } from "react";
import { Text, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";

export default class SharedNotesListAnimatedComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animatePress: new Animated.Value(1)
    }
  }

  AnimateIn = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 0.95,
      duration: 200,
    }).start()
  }
  AnimateOut = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 1,
      duration: 200,
    }).start()
  }
  render() {
    const { item } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.AnimateIn()}
        onPressOut={() => this.AnimateOut()}
      >
        <Animated.View style={[{
          transform: [
            {
              scale: this.state.animatePress,
            }
          ]
        }, styles.listView]}>
          <Text style={styles.questionText}>{item.question}</Text>
          <Text style={styles.answerText}>{item.answer}</Text>
          {
            ((item.tag).length === 0)
              ?
              null
              :
              <Text style={styles.tagText}>#{item.tag}</Text>
          }
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  listView: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginTop: 10,
    borderColor: "rgb(173,181,189)",
    backgroundColor: "rgb(241,243,245)",
    borderRadius: 5
  },
  questionText: {
    fontSize: 20,
    fontWeight: "500",
    color: "rgb(73,80,87)",
    marginBottom: 2
  },
  answerText: {
    fontSize: 18,
    fontWeight: "300",
    color: "rgb(73,80,87)",
    marginBottom: 10,
    marginLeft: 2
  },
  tagText: {
    fontSize: 16,
    fontWeight: "200",
    color: "rgb(134,142,150)",
    marginLeft: 3
  },
  heartButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
  }
})
