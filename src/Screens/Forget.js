import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../Style/Styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Constant from '../Style/Constant'
const Login = () => {
  return (
    <View style={Styles.Heading}>
      <Text style={Styles.styl}>Forget</Text>
      <Text style={Styles.styl}>password?</Text>
      <View style={Styles.sub}>
      <MaterialCommunityIcons name={'email'} size={25} color={'black'} />
      <TextInput  placeholder='Enter your email address' placeholderTextColor={'#676767'}/>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={Constant.star}>*</Text>
      <Text style={Constant.text}>We will send you a message to set or reset</Text>
      </View>
      <Text style={Constant.text}>  your new password</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={Styles.login}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})