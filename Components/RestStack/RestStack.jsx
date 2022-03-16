

import { ResDetails } from '../ResDetails/Res';
import { MealDetails } from '../ResDetails/MealDetails';
import Restaurant from '../Restaurant/Restaurant';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyBasket from '../Basket/myBasket';
export const ResStackScreen=()=> {
    const ResStack = createNativeStackNavigator();
  return (
    <ResStack.Navigator>
      <ResStack.Screen name="Restaurant" component={Restaurant} options={{header: () => null}} />
      <ResStack.Screen name="ResDetails" component={ResDetails}  />
      <ResStack.Screen name="MealDetails" component={MealDetails}/>
      <ResStack.Screen name="MyBasket" component={MyBasket}/>
    </ResStack.Navigator>
  );
}