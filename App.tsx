import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './src/Screens/Splash'
import Weather from './src/Screens/Weather'
import bottomNavigation from './src/Screens/BottomNavigation'
import BottomNavigation from './src/Screens/BottomNavigation'
const stack=createNativeStackNavigator()
const stackNavigation = () => {
  const [splash,showSplash]=useState(true)
  useEffect(()=>{
setTimeout(() => {
showSplash(false)
},3000);
  },[])
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Bottom'  screenOptions={{headerShown:false}}>
      {splash?
       <stack.Screen name='Splash' component={Splash}/>
       :
       <>
       <stack.Screen name='Weather' component={Weather}/>
        <stack.Screen name='Bottom' component={BottomNavigation}/>
        </>
      }
      </stack.Navigator>
      </NavigationContainer>
  )
}
export default stackNavigation

const styles = StyleSheet.create({})