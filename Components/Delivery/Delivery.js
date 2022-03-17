import { Text, View,Button } from 'react-native';
const Delivery = (props) => {
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text Text>Delivery!</Text>
                <Button
                    title="Offers"
                    colorScheme='blue'
                    onPress={() => {
                        props.navigation.navigate({
                            name: 'Offers',
                        })
                    }}
                >
                    <Text>See More...</Text>
                </Button>
                {console.log(props)}
            </View>
        </>
    );
}

export default Delivery;