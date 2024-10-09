import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import AppRouters from './src/navigators/AppRouters'

const App = () => {
  return (
    <>
      <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent />
        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
    </>
  )
}

export default App