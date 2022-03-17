import { Text, View, StyleSheet,  TouchableOpacity, Image } from "react-native";
import React, {useState, useEffect} from "react";
import { collection, getDocs} from 'firebase/firestore/lite'
import { signOut } from 'firebase/auth';
import { auth, db } from "../../Firebase/firebase";


const Me = () =>{
    const [users,setUsers] =useState([]);

    useEffect(()=>{
        async function getUserDetails() {
        const userRef = collection(db,'User')
        const userSnapshot = await getDocs(userRef);
        const userList = userSnapshot.docs.map(doc => doc.data());

        console.log(userList);
        setUsers(userList)
        return userList;
            
      }
      getUserDetails()
    
    },[])

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
    <View style={{ flex: 1, justifyContent: 'center' }}>
    
            {users.map((user) => {
                        
                        if(localStorage.getItem("email") == user.Email){
                            
                                return (
                                    <>
                                    <Image source={{
                                            uri: 'https://www.elmenus.com/public/img/arbitrary-user.svg',
                                        }}
                                        style={styles.img}/>
                                    <View>
                                        <Text style={{fontSize: '20px'}}> 
                                        <Text style={{fontWeight:'bold', fontSize: '20px', color: '#e32207'}}>User Name: </Text>
                                        {user.Name}
                                        </Text>
                                    </View> 
                                    <View style={{marginTop: '2%'}}>
                                        <Text style={{fontSize: '20px'}}> 
                                        <Text style={{fontWeight:'bold', fontSize: '20px', color: '#e32207'}}>User Email: </Text>
                                        {user.Email}
                                        </Text>
                                    </View> 
                                    </>
                                )
                            
                        } 
                       
                    })}
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
  

    button: {
      backgroundColor: '#e32207',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: '4%'
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
    img:{
      width: '150px',
      height: '140px',
      marginBottom: '30px',
      borderRadius: '10px',
      position: 'absolute',
      top: '2%',
      right: '30%'
  },
  })