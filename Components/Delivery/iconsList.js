import {FlatList, Box, Button, Slider, Image,Text, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from 'react-native-eva-icons';

const IconsList = () =>{
    const iconsObj =[
        {
        Name:'Live Tracking',
        Icon:'pin'},
        {
            Name:'Online Payment',
            Icon:'credit-card'
        },
        {
            Name:'Offers',
            Icon:'gift'
        },
        {
            Name:'Promos',
            Icon:'percent'
        }
    ]
    return(
        <>
        <Box marginTop='6'>
        <FlatList
        data={iconsObj} 
        horizontal
        renderItem={({item})=>
            <Box width='140' borderRadius='20px'  shadow='6' margin='7px' padding='10px' textAlign='center'>
                <Icon  style={{margin:'auto'}}  name={item.Icon} width={25} height={25} fill='#e32207'  />
                <Text textAlign='center'>
                    {item.Name}
                </Text>
            </Box>
        }
        />
        </Box>
        </>
    )
}

export default IconsList;
