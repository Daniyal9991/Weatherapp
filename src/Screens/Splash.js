import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{backgroundColor:'blue',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image style={{height:150,width:150}} source={require('../assets/images/cloudthree.png')}/>
    <Text style={{color:'white',fontWeight:'bold',fontSize:35,}}>Weather App</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})