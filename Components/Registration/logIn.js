import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import {auth} from '../../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
const logIn = () =>{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((res)=>{
      localStorage.setItem('email', email);
      localStorage.setItem('userID', res.user.uid);
      setEmail('');
      setPassword('');
      // console.log(res);
      // console.log(res.user.uid);
      setTimeout(()=>{
        window.location.reload()
    },500)
    })
    .catch((res)=>{
      console.log(res);

    })
  }

    return(
      
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
         <Image source={{
            uri: 'https://static.startupsgalaxy.com/images/startups/14/1594816158054.png',
          }}
          style={styles.logo}/>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
          onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    
    )
}

export default logIn;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#e32207',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
    logo:{
      width: '200px',
      height: '50px',
      marginBottom: '30px',
      borderRadius: '10px'
  },
  })