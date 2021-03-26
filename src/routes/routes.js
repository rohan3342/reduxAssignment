import React from 'react';
import HomeComp from '../components/HomeComp';
import AddItemComp from '../components/AddItemComp';
import UpdateItemComp from '../components/UpdateItemComp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomeComp}
        keyboardHandlingEnabled
        mode="modal"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeComp" component={HomeComp} />
        <Stack.Screen name="AddItemComp" component={AddItemComp} />
        <Stack.Screen name="UpdateItemComp" component={UpdateItemComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
