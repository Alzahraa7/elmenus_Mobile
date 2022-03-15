

import { ResDetails } from '../Res/Res';
import Restaurant from '../Restaurant/Restaurant';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export const ResStackScreen=()=> {
    const ResStack = createNativeStackNavigator();
  return (
    <ResStack.Navigator>
      <ResStack.Screen name="Restaurant" component={Restaurant}  />
      <ResStack.Screen name="ResDetails" component={ResDetails} />
    </ResStack.Navigator>
  );
}