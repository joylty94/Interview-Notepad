import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Animated, Platform, ImageBackground } from "react-native"

export default class LoadingContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animatePress: new Animated.Value(1)
    }
  }
  animate = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 0.9,
      duration: 600,
    }).start(() => {
      Animated.timing(this.state.animatePress, {
        toValue: 1.1,
        duration: 600,
      }).start(() => {
        this.animate()
      });
    });
  }
  componentDidMount(){
    this.animate()
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.backgroundImage}
        >
          <Animated.View style={[ styles.backgroundImage, {
            transform: [
              {
                scale: this.state.animatePress,
              }
            ]
          }]}
            >
        <Image style={styles.imageContainer} source={require('../images/book.png')}/>
        <Text style={styles.loadingText}>Loading...</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    flex: 1,
    backgroundColor:"rgb(248,249,250)"
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: 'rgb(134,142,150)',
    fontWeight: '500',
    marginTop: 20,
    fontSize: 24,
  },
  imageContainer: {
    height: 250,
    width: 300
  }
})
