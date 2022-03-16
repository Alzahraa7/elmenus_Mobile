import { Box,FlatList, Button, Slider, Image,Text, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import OffersCard from "./offersCard";
const TastyOffers = () =>{
    const Res = [
        {
            ResName:'Bazooka',
            Type:['Fast Food', 'Chicken'],
            Rate:4.2,
            ImageLogo:'https://bazookaegy.com/public/uploads/resturantes/s_1589125290189592.png',
            ImageURL:'https://i.ibb.co/rcvghjZ/s-1608580862935729.jpg',
            Offer:'30 EGP on orders above 150 EGP'
        },
        {
            ResName:'Bazooka',
            Type:['Fast Food', 'Chicken'],
            Rate:4.2,
            ImageLogo:'https://bazookaegy.com/public/uploads/resturantes/s_1589125290189592.png',
            ImageURL:'https://i.ibb.co/rcvghjZ/s-1608580862935729.jpg',
            Offer:'30 EGP on orders above 150 EGP'
        }
    ]
    return(
        <>
        <Box marginTop='10px' marginLeft='10px' marginRight='10px'>
            <Box flexDirection='row' style={{justifyContent:'space-between'}}>
                <Text fontWeight='extraBlack'> TastyOffers </Text>
                <Text fontWeight='bold' color='#e32207'> See All </Text>
            </Box>

            <Box marginTop='4'>
        <FlatList style={{ flex: 1 }}
        data={Res} 
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>
        <>
        <OffersCard obj={item} />
        </>
        }
        />
        </Box>
        </Box>
        </>
    )
}

export default TastyOffers;