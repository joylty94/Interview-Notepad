import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import * as firebase from "firebase";
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base";

export default class EmailSignUpComponent extends Component {
  render(){
    return(
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
              />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              />
          </Item>
          <Button
            full
            rounded
            success
            style={styles.buttonStyle}
            onPress={() => this.signupUser(this.state.email, this.state.password)}>
            <Text style={styles.buttonText}>SignUp</Text>
          </Button>
        </Form>
        <Text>
          회원가입
        </Text>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "rgb(173,181,189)"
  },
  buttonText: {
    marginLeft: 5,
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18
  }
})
