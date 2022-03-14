import * as React from 'react';
import { Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Delivery from './Components/Delivery/Delivery';
import DineOut from './Components/DineOut/DineOut';
import Restaurant from './Components/Restaurant/Restaurant';
import Me from './Components/Me/Me';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e32207',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Delivery" component={Delivery} />
        <Tab.Screen name="Restaurant" component={Restaurant} />
        <Tab.Screen name="DineOut" component={DineOut} />
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}