import React, { Component } from "react";
import { Text, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";
import { DetailNoteScreen } from "../screenName";

export default class NoteListComponent extends Component {
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
    this.props.navigation.navigate(DetailNoteScreen, this.props.item)
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
          <Text>{((item.tag).length === 0) ? null : item.tag }</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  listView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "rgb(173,181,189)",
    marginTop: 10
  },
  questionText: {
    fontSize: 20,
    fontWeight: "500",
    color: "rgb(73,80,87)"
  },
  answerText: {
    fontSize: 18,
    fontWeight: "300",
    color: "rgb(73,80,87)"
  },
})
