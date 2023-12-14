import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllCards from './Cards/AllCards';
import Investigators from "./Cards/Investigators";
import Weaknesses from "./Cards/Weaknesses";

const Tab = createBottomTabNavigator();

const CardsScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="All Cards" component={AllCards} />
            <Tab.Screen name="Investigators" component={Investigators} />
            <Tab.Screen name="Weaknesses" component={Weaknesses} />
        </Tab.Navigator>
    )
}

export default CardsScreen;