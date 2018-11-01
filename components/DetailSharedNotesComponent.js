import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Moment from 'react-moment';
import { FontAwesome } from "@expo/vector-icons";

export default class DetailSharedNotesComponent extends Component {
  handleLikeTyping = () => {
    this.props.onLikeTyping()
  }
  render() {
    const { navigation, sharedItem, like, likesCount, handleScrapModal } = this.props;
    if (sharedItem) {
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerBackButton}>
              <Entypo name="chevron-left" size={30} color="rgb(248,249,250)" />
            </TouchableOpacity>
            <View style={styles.headerButtonContainer}>
              {(like)
                ?
                <TouchableOpacity style={styles.headerHeartButton}
                  onPress={this.handleLikeTyping}>
                  <FontAwesome name="heart" size={25} color="rgb(240,101,149)" />
                  <Text style={styles.headerHeartText}>{likesCount}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.headerHeartButton}
                  onPress={this.handleLikeTyping}>
                  <FontAwesome name="heart-o" size={25} color="rgb(240,101,149)" />
                  <Text style={styles.headerHeartText}>{likesCount}</Text>
                </TouchableOpacity>
              }
              <TouchableOpacity style={styles.headerButton}
                onPress={handleScrapModal}>
                <Text style={styles.headerText}>스크랩</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={styles.bodyContainer}>
            <View style={styles.bodyView}>
              <Text style={styles.questionText}>
                {sharedItem.question}
              </Text>
              <Text style={styles.answerText}>
                {sharedItem.answer}
              </Text>
              <View style={styles.tiemView}>
                <Moment element={Text}
                  date={sharedItem.time}
                  format="YYYY년MM월DD일 HH:mm"
                  style={styles.timeText}
                />
              </View>
            </View>
          </View>
        </View>
      )
    }
    return <View></View>
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 85,
    backgroundColor: "rgb(145,167,255)",
    paddingHorizontal: 10
  },
  headerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 5
  },
  headerBackButton: {
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  headerHeartButton: {
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginLeft: 2
  },
  headerButton: {
    flexDirection:"row",
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginLeft: 2
  },
  headerHeartText: {
    marginLeft: 8,
    fontWeight: "400",
    fontSize: 15,
    color: "rgb(248,249,250)",
  },
  headerText: {
    fontWeight: "400",
    fontSize: 15,
    color: "rgb(248,249,250)",
  },
  bodyContainer: {
    flex: 1,
  },
  bodyView: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  tiemView: {
    alignItems: "flex-end",
    marginTop: 20
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
  timeText: {
    fontSize: 14,
    fontWeight: "200",
    color: "rgb(134,142,150)"
  }
})
