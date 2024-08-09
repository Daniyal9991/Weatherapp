import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './Search'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Weather from './Weather'
const bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <bottom.Navigator screenOptions={{headerShown:false,tabBarHideOnKeyboard:true}}>
      <bottom.Screen name='Home' options={{tabBarIcon:()=>(
        <MaterialCommunityIcons name="home" color={'white'} size={30} />
      ),tabBarActiveBackgroundColor:'blue',tabBarInactiveBackgroundColor:'yellow' }} component={Weather}/>
      <bottom.Screen name='Search' options={{tabBarIcon:()=>( 
        <MaterialIcons name="search" color={'white'} size={30} />
      ),tabBarActiveBackgroundColor:'blue',tabBarInactiveBackgroundColor:'yellow' }}  component={Search}/>
    </bottom.Navigator>
  )
}
export default BottomNavigation

const styles = StyleSheet.create({})