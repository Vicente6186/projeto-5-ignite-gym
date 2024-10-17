import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { gluestackUIConfig } from '@theme/gluestack-ui.config';
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import ReadExercise from "@screens/ReadExercise";

export default function Routes() {

    const theme = DefaultTheme
    theme.colors.background = gluestackUIConfig.tokens.colors.gray700
    return (
        <NavigationContainer theme={theme}>
            {/* <AppRoutes />  */}
            <AuthRoutes />
        </NavigationContainer>
    )
}