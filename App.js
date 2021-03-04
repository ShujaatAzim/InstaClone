import React from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './Components/Auth/Landing';

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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;