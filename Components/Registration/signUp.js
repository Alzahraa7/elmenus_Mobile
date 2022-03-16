import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'

const signUp = () =>{
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
            placeholder="Name"
            // value={}
            // onChangeText={}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            // value={}
            // onChangeText={}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            // value={password}
            // onChangeText={text => setPassword(text)}
            style={styles.input}
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // onPress={}
            style={styles.button}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    
    )
}

export default signUp;


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
    },
  })