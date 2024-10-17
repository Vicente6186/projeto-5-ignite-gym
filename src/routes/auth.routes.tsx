import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import SignUp from "@screens/SignUp";
import SignIn from "@screens/SignIn";

type RootStackParamList = {
    SignIn: undefined
    SignUp: undefined
}

export type AuthNavigationProp =  NativeStackNavigationProp<RootStackParamList>

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default function AuthRoutes() {
    return  (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
    </Navigator>
    )
    
}