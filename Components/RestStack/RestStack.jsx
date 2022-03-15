

import { ResDetails } from '../ResDetails/Res';
import { MealDetails } from '../ResDetails/MealDetails';
import Restaurant from '../Restaurant/Restaurant';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export const ResStackScreen=()=> {
    const ResStack = createNativeStackNavigator();
  return (
    <ResStack.Navigator>
      <ResStack.Screen name="Restaurant" component={Restaurant} options={{header: () => null}} />
      <ResStack.Screen name="ResDetails" component={ResDetails}  />
      <ResStack.Screen name="MealDetails" component={MealDetails}/>
    </ResStack.Navigator>
  );
}