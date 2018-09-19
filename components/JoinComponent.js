import React, { Component } from 'react';
import { Container, Form, Input, Item, Button, Label } from 'native-base';

export default class JoinComponent extends Component{
  render(){
    return(
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </Button>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: 'white' }}>Login With FaceBook</Text>
          </Button>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.loginWithGoogle()}
          >
            <Text style={{ color: 'white' }}>Login With Google</Text>
          </Button>
        </Form>
      </Container>
    )
  }
}
