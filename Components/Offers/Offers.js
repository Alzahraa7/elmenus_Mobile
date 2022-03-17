import { HStack, Text,Box, Image, ScrollView, VStack,View, FlatList } from 'native-base'
import { StyleSheet } from "react-native";

import OffersCard from "./OffersCard";

import stylesOffers from "./OffersStyles";

const Offers = () => {

    const offersStaticDB = [
        {
            Name: "Burger King",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ac4317db-2561-4766-af36-3314513b7d5e.jpg",
            Logo: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/9a5c967e-7937-488f-b4ce-69f165f4c86e.jpg",
            Rate: 3.5,
            Offer: "50% off your 1st order"
        },
        {
            Name: "McDonald's",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/eb1ad4a5-6c50-4c07-aec5-162f5b09266f.jpg",
            Logo: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/4b182745-abbb-4926-9069-ac05ba1e1841.jpg",
            Rate: 5,
            Offer: "80% off your 1st order"
        },
        {
            Name: "Bazooka",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/aad0463c-f53e-4a6c-969c-55bc55fed1bf.jpg",
            Logo: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/d772c046-4a28-4c85-bfe6-0fd4627c37b4.jpg",
            Rate: 3.5,
            Offer: "60% off your 1st order"
        },
        {
            Name: "Kansas Fried Chicken",
            Image: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/91e12be8-ae48-4aa6-826c-47b771502891.jpg",
            Logo: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/9fecd758-50ca-484d-881d-ed17a3080daf.jpg",
            Rate: 4,
            Offer: "20% off your 1st order"
        }
    ]

    return (
        <>
            <ScrollView>
                <Box>
                    {/* <HStack justifyContent="space-between" style={{ margin: "15px" }}>
                        <Text fontSize="lg"> Discover by moods </Text>
                        <Text fontSize="lg" color="#e32207"> See All </Text>
                    </HStack> */}

                    <FlatList
                        style={{ margin: "3px", height: "auto" }}
                        numColumns={1}
                        data={offersStaticDB}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <OffersCard offer={item} />
                        }

                    />
                </Box>
            </ScrollView>
        </>
    )
}

export default Offers;