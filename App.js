import React, { useReducer, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './Components/Auth/Landing';
import RegisterScreen from './Components/Auth/Register';
import LoginScreen from './Components/Auth/Login';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Redux/Reducers';
import thunk from 'redux-thunk';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAJIJaVRRgpZesv69yhieym6bGGLX-dWpI",
  authDomain: "instaclone-436f3.firebaseapp.com",
  projectId: "instaclone-436f3",
  storageBucket: "instaclone-436f3.appspot.com",
  messagingSenderId: "446027581759",
  appId: "1:446027581759:web:0acad14064edf1c814ab8a",
  measurementId: "G-KHHFBF999X"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const App = () => {

  const [state, setState] = useReducer((state, newState) => ({...state, ...newState}),
    { loaded: false, loggedIn: false }
  )

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        return (
          setState({ loaded: true, loggedIn: false })
        )
      } else {
        return setState({ loaded: true, loggedIn: true })
      }
    })
  }, [])

  if (!state.loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>
          Loading...
        </Text>
      </View>
    );
  } 
  
  if (!state.loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  } 

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>
        User logged in!
      </Text>
    </View>
  );
}

export default App;