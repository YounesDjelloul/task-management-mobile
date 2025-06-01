import React from "react";
import {View, Image, Text} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {Link} from "expo-router";
import SafeContainer from "@/components/SafeContainer";
import {Colors} from "@/constants/Colors";

export default function AuthWelcome() {
    return (
        <SafeContainer>
            <View className="h-full w-full flex justify-center items-center relative">
                <View className="w-full h-[60%] bg-light-authBackground items-center justify-center">
                    <Image
                        className='w-[97%] h-[97%] mt-40'
                        resizeMode="contain"
                        source={require('../assets/images/mockup.png')}
                    />
                </View>

                <LinearGradient
                    colors={[
                        'rgba(245,240,234,0.12)',
                        'rgba(245,240,234,0.83)',
                        'rgba(245,240,234,0.97)',
                        Colors.light.authBackground
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    className="w-full h-20 absolute z-10"
                    style={{
                        top: '59%',
                        transform: [{translateY: -40}]
                    }}
                />

                <View className="w-full h-[40%] bg-light-authBackground pt-12 px-6">
                    <Text className="font-heading text-black text-4xl mb-2">
                        Stay Organized,{`\n`}
                        Work Smarter
                    </Text>
                    <Text className="body text-gray-500 mb-6 text-left text-md">
                        Manage your tasks, track your progress, and collaborate effortlessly—all in one place.
                    </Text>
                    <Link href='./login' className="w-full mb-2">
                        <View className="bg-blue-500 py-3 px-6 w-full rounded-full">
                            <Text className="font-button text-lg text-white text-center font-semibold">Sign In</Text>
                        </View>
                    </Link>
                    <Link href='./registration' className="w-full">
                        <View className="bg-white py-3 px-6 w-full rounded-full">
                            <Text className="font-button text-lg text-black text-center font-semibold">Sign Up</Text>
                        </View>
                    </Link>
                </View>
            </View>
        </SafeContainer>
    )
}
