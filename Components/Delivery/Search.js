import { Box, Button, IconButton, Input, sicon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const Search = () =>{
    return(
        <>
        <Box backgroundColor='white' padding='5px' shadow='6'>
            <Box flexDirection='row'>
            <Input width='90%'
            placeholder="Find a Resturant or Dish"
            variant="filled"
            bgColor={'gray.100'}
            InputLeftElement={<Ionicons style={{margin:'10px',fontSize:'15px' ,color:'grey'}} name="search"></Ionicons>}
            borderRadius='10px'
            />
            <Button bgColor={'gray.100'} marginLeft='7px' borderRadius='10px'>
                <Ionicons color='#e32207' style={{fontWeight:'bold',fontSize:'13px'}} name="funnel-outline"></Ionicons>
            </Button>
            </Box>
        </Box>
        </>
    )
}

export default Search;