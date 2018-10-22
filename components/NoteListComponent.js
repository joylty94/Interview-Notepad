import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, FlatList } from "react-native";

export default class NoteListComponent extends Component{
  constructor(props){
    super(props)
    this.state({
      animatePress : new Animated.Value(1)
    })
  }
  AnimateIn = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 0.8,
      duration: 300,
    }).start()
  }
  Animate = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 1,
      duration: 300,
    }).start()
  }
  render(){
    const { noteItem } = this.props;
    return(
      <View>
        <FaltList
          date={ noteItem }
          renderItem= {({item, index}) => {
            <TouchableWithoutFeedback
              onPressIn={() => this.AnimateIn()}
              onPressOut={() => this.AnimateOut()}>
              <Animated.View style={{
                Transform: [
                  {
                    scale: this.state.animatePress
                  }
                ]
              }}>
                <Text>질문</Text>
                <Text>답변</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          }}
          keyExtractor={(item, index) => item.category + `${index}`}>
        </FaltList>
      </View>
    )
  }
}
