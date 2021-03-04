import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSignUp

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