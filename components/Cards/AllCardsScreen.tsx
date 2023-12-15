import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

const AllCardsScreen = () => {
    const height = useBottomTabBarHeight();
    
    return (
        <View style={{marginTop: height}}>
            <Text>card 1</Text>
            <Text>card 2</Text>
            <Text>card 3</Text>
            <Text>card 4</Text>
        </View>
    )
}

export default AllCardsScreen;