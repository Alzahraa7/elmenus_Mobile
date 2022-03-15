import * as React from 'react';
import { Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider} from "native-base";
import Delivery from './Components/Delivery/Delivery';
import DineOut from './Components/DineOut/DineOut';
import Restaurant from './Components/Restaurant/Restaurant';
import Me from './Components/Me/Me';
import { db } from './Firebase/firebase';
import { collection,getDocs } from 'firebase/firestore/lite';
import { Res } from './Components/ResDetails/Res';
import { ResStackScreen } from './Components/RestStack/RestStack';
const Tab = createBottomTabNavigator();

export default function App() {
  // for test firebase
  // async function getCities() {
  //   const citiesCol = collection(db, 'Cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   console.log(cityList) ;
  // }getCities()
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Delivery') {
            iconName = focused
              ? 'bicycle'
              : 'bicycle-outline';
          } else if (route.name === 'DineOut') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          }
          else if (route.name === 'Restaurant') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          }
          else if (route.name === 'Me') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return  <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e32207',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Delivery" component={Delivery} />
        <Tab.Screen name="Restaurant" component={ResStackScreen} options={{header: () => null}}  />
        <Tab.Screen name="DineOut" component={DineOut} />
        <Tab.Screen name="Me" component={Me} />
       
      </Tab.Navigator>

    </NavigationContainer>
    </NativeBaseProvider>
  );
}