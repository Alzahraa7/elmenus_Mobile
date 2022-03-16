import { Ionicons } from '@expo/vector-icons';
import { Text, Box, View, AspectRatio, Hidden, Center, Button, Image, useColorMode, ScrollView, VStack, HStack } from 'native-base';
const OrderCard = ({item}) => {
    return (
        <>
            <HStack style={{ marginBottom: "10px" }}>
                <Text style={{ fontWeight: "bold" }}> x{item.Number} </Text>
                <VStack>
                    <Text style={{ fontWeight: "bold" }}> {item.Name} </Text>
                    <Text style={{ color: "#A7A3A3" }}> {item.Size} </Text>
                    <Text style={{ color: "#A7A3A3" }}> {item.Description} </Text>

                    <HStack>
                        <Text style={{ color: "green", marginRight: "10px" }}> <Ionicons name='pencil' /> Edit </Text>
                        <Text style={{ color: "red" }}> <Ionicons name='trash' /> Remove </Text>
                    </HStack>
                </VStack>

                <VStack style={{ marginLeft: "auto" }}>
                    <Text style={{ fontWeight: "bold" }}> 201.00 EGP </Text>
                </VStack>

            </HStack>
        </>
    );
}

export default OrderCard;