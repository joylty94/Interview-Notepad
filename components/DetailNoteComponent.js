import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableWithoutFeedback, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Moment from 'react-moment';
import { WritingNoteScreen } from "../screenName";

export default class DetailNoteComponent extends Component{
  handleDelet = (detailCategory, navigation) => {
    this.props.onDelete(detailCategory, navigation)
  }
  render() {
    const { navigation, detailCategory, onShare, onModal } = this.props;
    if (detailCategory){
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerBackButton}>
              <Entypo name="chevron-left" size={30} color="rgb(255,255,255)" />
            </TouchableOpacity>
            <View style={styles.headerButtonContainer}>
              {(detailCategory.share)
                ?
                <TouchableOpacity style={styles.headerButton}
                  onPress={() => Alert.alert(
                    "",
                    "메모를 공유 취소합니다.",
                    [
                      {
                        text: '공유 취소', onPress: () => {
                          onShare(detailCategory)
                        }
                      },
                      {
                        text: '취소'
                      },
                    ],
                    { cancelable: false }
                  )}>
                  <Text style={styles.headerText}>공유중</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.headerButton}
                  onPress={() => Alert.alert(
                    "",
                    "메모를 공유합니다.",
                    [
                      {
                        text: '공유', onPress: () => {
                          onShare(detailCategory)
                        }
                      },
                      {
                        text: '취소'
                      },
                    ],
                    { cancelable: false }
                  )}>
                  <Text style={styles.headerText}>공 유</Text>
                </TouchableOpacity>
              }
              <TouchableOpacity style={styles.headerButton}
                onPress={() => onModal()}>
                <Text style={styles.headerText}>이 동</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}
                onPress={() => Alert.alert(
                  "",
                  "메모를 삭제합니다.",
                  [
                    {
                      text: '삭제', onPress: () => {
                        this.handleDelet(detailCategory, navigation)}
                    },
                    {
                      text: '취소'
                    },
                  ],
                  { cancelable: false }
                )}>
                <Text style={styles.headerText}>삭 제</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(WritingNoteScreen, detailCategory)}
            style={styles.bodyContainer}>
            <View style={styles.bodyView}>
              <Text style={styles.questionText}>
                {detailCategory.question}
              </Text>
              <Text style={styles.answerText}>
                {detailCategory.answer}
              </Text>
              <View style={styles.tiemView}>
                <Moment element={Text}
                  date={detailCategory.time}
                  format="YYYY년MM월DD일 HH:mm"
                  style={styles.timeText}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }
    return <View></View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "rgb(77,171,247)",
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
  headerButton: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginLeft: 2
  },
  headerText: {
    fontFamily: "GodoB",
    fontSize : 16,
    color: "rgb(255,255,255)",
  },
  bodyContainer: {
    flex:1,
  },
  bodyView: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor:"rgb(255,255,255)"
  },
  tiemView: {
    alignItems: "flex-end",
    marginTop: 20
  },
  questionText: {
    fontFamily: "GodoB",
    fontSize: 20,
    color: "rgb(73,80,87)"
  },
  answerText: {
    fontFamily: "GodoB",
    fontSize: 18,
    color: "rgb(73,80,87)"
  },
  timeText: {
    fontFamily: "GodoB",
    fontSize: 14,
    color: "rgb(134,142,150)"
  }
})
