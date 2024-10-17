import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import SignUp from "@screens/SignUp";
import SignIn from "@screens/SignIn";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "@gluestack-ui/themed";
import HomeSVG from '@assets/home.svg'
import HistorySVG from '@assets/history.svg'
import ProfileSVG from '@assets/profile.svg'
import { gluestackUIConfig } from "@theme/gluestack-ui.config";
import Home from "@screens/Home";
import History from "@screens/History";
import Profile from "@screens/Profile";
import ReadExercise from "@screens/ReadExercise";

type RootStackParamList = {
    Home: undefined
    History: undefined
    Profile: undefined
    ReadExercise: undefined
}

export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>()

export default function AppRoutes() {


    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: gluestackUIConfig.tokens.colors.gray600,
                borderTopWidth: 0,
                height: 96
            },
            tabBarShowLabel: false,
            tabBarInactiveTintColor: gluestackUIConfig.tokens.colors.gray200,
            tabBarActiveTintColor: gluestackUIConfig.tokens.colors.green500,
            tabBarIconStyle: { height: 32, width: 32 }
        }}>
            {[{ name: 'Home', Component: Home, Icon: HomeSVG },
            { name: 'History', Component: History, Icon: HistorySVG },
            { name: 'Profile', Component: Profile, Icon: ProfileSVG }]
                .map(({ name, Component, Icon }) => (
                    <Screen name={name as keyof RootStackParamList} component={Component}
                        options={{ tabBarIcon: ({ color }) => <Icon fill={color} /> }} />
                ))}

            <Screen name={'ReadExercise'} component={ReadExercise} options={{ tabBarButton: () => null }}  />

        </Navigator>
    )

}