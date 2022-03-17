import { Text, View, StyleSheet,  TouchableOpacity } from "react-native";
import React, {useState, useEffect} from "react";
import { collection, getDocs} from 'firebase/firestore'
import { signOut } from 'firebase/auth';
import { auth } from "../../Firebase/firebase";


const Me = () =>{

    const signOutUser = () =>{
        signOut(auth)
        .then((res)=>{
            localStorage.removeItem('email');
            localStorage.removeItem('userID');
        })
        .catch((res)=>{
            console.log(res)
        })
    }
     
    return(
        <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Name: </Text>
      <Text>User Email: </Text>
      <TouchableOpacity
      onPress={signOutUser}
            style={styles.button}
          >
            <Text style={styles.buttonText}>logOut</Text>
          </TouchableOpacity>
    </View>
        </>
    )
}

export default Me;


const styles = StyleSheet.create({
  
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