import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../Style/Styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Constant from '../Style/Constant'
const Login = () => {
  return (
    <View style={Styles.Heading}>
      <Text style={Styles.styl}>Welcome</Text>
      <Text style={Styles.styl}>Back!</Text>
      <View style={Styles.sub}>
      <FontAwesome6 name={'user-large'} size={25} color={'black'} />
      <TextInput  placeholder='Username or Email' placeholderTextColor={'#676767'}/>
      </View>
      <View style={Styles.sub}>
      <Fontisto name={'locked'} size={25} color={'black'} />
      <TextInput  placeholder=' Password' placeholderTextColor={'#676767'}/>
      </View>
      <Text style={Styles.forget}>Forgot Password?</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={Styles.login}>Login</Text>
      </TouchableOpacity>
      <Text style={Constant.continue}>- OR Continue with -</Text>
      <View style={Constant.image}>
        <TouchableOpacity style={Constant.touch}>
        <Image source={require('../assets/images/google.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={Constant.touch}>
        <Image source={require('../assets/images/apple.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={Constant.touch}>
        <Image source={require('../assets/images/facebook.png')}/>
        </TouchableOpacity>
      </View>
      <View style={Constant.image}>
      <Text style={Constant.create}>Create An Account</Text>
      <TouchableOpacity>
      <Text style={Constant.sign}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})