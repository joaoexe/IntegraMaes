import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/LoginScreen'; 

const Stack = createStackNavigator();

const App = () => {


  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
};

export default App;
