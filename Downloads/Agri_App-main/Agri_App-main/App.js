// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FormPage from './src/screens/FormPage';
import ResultPage from './src/screens/ResultPage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitle:false,headerTitleAlign:'left',headerStyle:{backgroundColor:"#bfe3cc",maxHeight:80},headerTransparent:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FormPage" component={FormPage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
