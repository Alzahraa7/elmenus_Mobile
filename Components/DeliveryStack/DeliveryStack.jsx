import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Delivery from '../Delivery/Delivery';
import Offers from '../Offers/Offers';
export const DeliveryStackScreen=()=> {
    const DelStack = createNativeStackNavigator();
    
  return (
    <DelStack.Navigator>
      <DelStack.Screen name="Delivery" component={Delivery} options={{header: () => null}} />
      <DelStack.Screen name="Offers" component={Offers}  />
    </DelStack.Navigator>
  );
}