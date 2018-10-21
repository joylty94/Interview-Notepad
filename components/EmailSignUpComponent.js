import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Platform, Alert } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";

export default class EmailSignUpComponent extends Component {
  constructor(props){
    super(props)
    this.state = ({
      email : "",
      password : "",
      identifyPW : "",
    })
  }
  signupUser = async (email, password, identifyPW) => {
    try {
      if (!email.includes("@")){
        Alert.alert("이메일 오류!!!", "이메일 형식에 맞지 않습니다.")
        return;
      } else if (password.length < 8) {
        Alert.alert("패스워드 오류!!!", "패스워드를 8글자 이상 입력해주세요.")
        return;
      } else if ( password !== identifyPW ) {
        Alert.alert("패스워드 오류!!!", "패스워드가 같지 않습니다.")
        return;
      }
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await firebase.auth().signOut()
      Alert.alert(
        "회원가입",
        "회원가입 완료!!!",
        [
          { text: 'OK', onPress: () => {
            this.props.navigation.goBack()
          }},
        ],
        { cancelable: false }
      )
    }
    catch (error) {
      console.log(e.toString())
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>회원 가입</Text>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>아이디</Text>
            <TextInput
              style={styles.input}
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType='next'
              onSubmitEditing={() => this.refs.password.focus()}
              onChangeText={(email) => this.setState({ email })}
            />
            <Text style={styles.labelText}>패스워드</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType='next'
              ref={"password"}
              onSubmitEditing={() => this.refs.identifyPW.focus()}
              onChangeText={(password) => this.setState({ password })}
            />
            <Text style={styles.labelText}>패스워드 확인</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              ref={"identifyPW"}
              onChangeText={(identifyPW) => this.setState({ identifyPW })}
            />
          </View>
            <Button
              full
              style={styles.button}
              onPress={() => this.signupUser(this.state.email, this.state.password, this.state.identifyPW)}
              >
              <Text style={styles.buttonText}>가입</Text>
            </Button>
            <Button
              full
              style={styles.button}
              onPress={() => this.props.navigation.goBack()}
              >
              <Text style={styles.buttonText}>취소</Text>
            </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Platform.OS === "ios" ? 34 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    color: "rgb(73,80,87)",
    fontWeight: "bold",
    marginVertical: 25
  },
  labelText: {
    fontSize: 18,
    color: "rgb(134,142,150)",
    fontWeight: "300",
    marginBottom: 8,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: "rgb(206,212,218)",
  },
  input: {
    height: 40,
    width: 350,
    backgroundColor: 'rgb(222,226,230)',
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "rgb(52,58,64)",
    marginBottom: 20
  },
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginTop: 20,
    backgroundColor: "rgb(201,42,42)"
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(255,245,245)',
    fontWeight: 'bold',
    fontSize: 18
  },
})
