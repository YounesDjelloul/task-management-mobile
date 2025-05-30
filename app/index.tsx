import {Text, View, Pressable} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View className="h-full flex justify-center items-center bg-red-400 color-white">
            <Text className='color-white'>Hello world!</Text>
            <Link href="./auth-welcome" asChild>
                <Pressable className="bg-blue-500 px-4 py-2 rounded">
                    <Text>Auth</Text>
                </Pressable>
            </Link>
        </View>
    );
}
