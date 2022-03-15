import { Box, Button, Slider, Image,Text, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Search from "./Search";
import IconsList from "./iconsList";
import BannerList from "./bannerList";
const Delivery = () =>{
    return(
        <>
        <Box bgColor='white'>
            <Search />
            <Box margin='5' flexDirection='row'>
            <Image width='50px' height='50px' source={{uri:'https://previews.123rf.com/images/arcady31/arcady311606/arcady31160600002/59113161-offre-sp%C3%A9ciale-ic%C3%B4ne-%C3%A9toile-rouge.jpg'}} > 
            </Image>
            <Text marginLeft='4' fontSize='14px' fontWeight='bold' >
                Get 30 EGP discount on your 
                FIRST THREE orders above 80 EGP with code 
                THREE30 
            </Text>
            </Box>
            <IconsList />
            <BannerList />
        </Box>
        </>
    );
}

export default Delivery;