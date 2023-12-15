import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

const WeaknessesScreen = () => {
    const tabBarHeight = useBottomTabBarHeight();
    
    return (
        <View style={{marginTop: tabBarHeight}}>
            <Text>Hospital Debts</Text>
            <Text>Final Rhapsody</Text>
            <Text>Dark Future</Text>
            <Text>The Price of Failure</Text>
        </View>
    )
}

export default WeaknessesScreen;