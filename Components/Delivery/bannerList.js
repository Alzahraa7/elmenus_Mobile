import {FlatList, Box, Button, Slider, Image,Text, Input } from "native-base";
import { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const BannerList = () =>{
    let [index, setIndex] =useState(0);
    const { width: windowWidth} = Dimensions.get("window");
    const Images = [
        {
            id:0,
            url:'https://i.ibb.co/wNk7mB0/s-163636000573099.jpg'
        },
        {
            id:1,
            url:'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/28fdffe08898fa7833268198d3885710ba8c8ebc-2000x1000.jpg?w=750&q=40&fit=max&auto=format'
        }
    ]
    const indexRef = useRef(index);
  indexRef.current = index;
    const onScroll = (e) =>{
        const slideSize = e.nativeEvent.layoutMeasurement.width;
    const index = e.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
    }
    console.log(index)
}
useEffect(() => {
    console.warn(index);
}, [index]);
    return(
        <>
        <Box marginTop='6'>
        <FlatList style={{ flex: 1 }}
        data={Images} 
        horizontal
        pagingEnabled={true}
        onScroll={(e)=>{onScroll(e)}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>
        <>
            <Image margin='3' flex='1' borderRadius='20px' width={windowWidth*0.9} height='250px' source={{uri:item.url}} />

        </>
        }
        />
        <Box margin='auto' flexDirection='row'>
            {Images.map((i)=>{
                if(i.id==index){
                    return <Ionicons color='#e32207' style={{fontWeight:'bold',fontSize:'13px',marginLeft:'5px'}} name="ellipse" ></Ionicons>
                }
                else{
                    return <Ionicons color='grey' style={{fontWeight:'bold',fontSize:'13px',marginLeft:'5px'}} name="ellipse" ></Ionicons>
                }
            })}
        </Box>
        </Box>
        </>
    )
}

export default BannerList;