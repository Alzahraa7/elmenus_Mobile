import { Box, Image, Text, Avatar } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Icon } from 'react-native-eva-icons';
const OffersCard = (props) => {
  const { width: windowWidth } = Dimensions.get("window");
  return (
    <>
      <Box margin="2">
        <Image
          borderRadius="10px"
          width={windowWidth * 0.8}
          height="150px"
          source={{ uri: props.obj.ImageURL }}
        />
        <Box
          margin="2"
          flexDirection="row"
          style={{ justifyContent: "space-between" }}
        >
          <Box flexDirection="row">
            <Avatar source={{ uri: props.obj.ImageLogo }} />
            <Box flexDirection="column">
              <Text
                fontWeight="extrabold"
                fontSize="15px"
                marginTop="2"
                marginLeft="2"
              >
                {props.obj.ResName}
              </Text>
              <Text
                fontWeight="bold"
                color="grey"
                fontSize="15px"
                marginLeft="2"
              >
                {props.obj.Type}
              </Text>
              
            </Box>
          </Box>
          <Box flexDirection="row">
            <Ionicons name="star" color="#e32207" marginTop="2" />
            <Text marginLeft="2">{props.obj.Rate}</Text>
          </Box>
        </Box>
      <Box borderRadius='15px' bgColor='#cdf0d7' width='90%' padding='10px' flexDirection='row'>
            <Icon name='percent' width={20}></Icon>
            <Text >
              {props.obj.Offer}
            </Text>
              </Box>
      </Box>
    </>
  );
};

export default OffersCard;
