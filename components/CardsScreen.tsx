import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllCardsScreen from './Cards/AllCardsScreen';
import InvestigatorsScreen from "./Cards/InvestigatorsScreen";
import WeaknessesScreen from "./Cards/WeaknessesScreen";

const Tab = createBottomTabNavigator();

const CardsScreen = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { 
                position: 'absolute',
                top: 0,
                height: 30,
            },
            tabBarIconStyle: {
                display: 'none',
            },
            tabBarLabelStyle: {
                fontSize: 18,
            },
            headerShown: false,
        }}>
            <Tab.Screen name="All Cards" component={AllCardsScreen} />
            <Tab.Screen name="Investigators" component={InvestigatorsScreen} />
            <Tab.Screen name="Weaknesses" component={WeaknessesScreen} />

            {/* pass props: */}
            {/* <Tab.Screen name="All Cards" children={props => <AllCardsScreen {...props} />} />
            <Tab.Screen name="Investigators" children={props => <InvestigatorsScreen {...props} />} />
            <Tab.Screen name="Weaknesses" children={props => <WeaknessesScreen {...props} />} /> */}

            {/* alternate way: */}
            {/* <Tab.Screen name="All Cards" >
                {() => <AllCardsScreen tabBarHeight={tabBarHeight}/>}
            </Tab.Screen> */}
        </Tab.Navigator>
    )
}

export default CardsScreen;