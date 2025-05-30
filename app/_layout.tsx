import '../global.css';
import {Stack} from "expo-router";

import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold,} from '@expo-google-fonts/inter';
import {Poppins_600SemiBold, Poppins_700Bold,} from '@expo-google-fonts/poppins';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="auth-welcome" options={{headerShown: false}}/>
            <Stack.Screen name="login" options={{headerShown: false}}/>
        </Stack>
    );
}
