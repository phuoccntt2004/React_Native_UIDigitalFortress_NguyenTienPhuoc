import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GamePlayScreen, HomeScreen } from '../screens';

const AppRouters = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='HOME' component={HomeScreen} />
        <Stack.Screen name='GAMEPLAY' component={GamePlayScreen} />
    </Stack.Navigator>
  )
}

export default AppRouters