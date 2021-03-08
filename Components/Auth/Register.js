import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'firebase';

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      firebase.firestore().collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({name, email})
      console.log(result)
    })
    .catch(err => console.log(err))
  }

  return (
    <View>
      <TextInput placeholder="name" onChangeText={name => setName(name)} />
      <TextInput placeholder="email" onChangeText={email => setEmail(email)} />
      <TextInput placeholder="password" onChangeText={password => setPassword(password)} secureTextEntry={true} />
      <Button title="Sign Up" onPress={() => onSignUp()} />
    </View>
  );
}

export default Register;