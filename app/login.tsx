import SafeContainer from "@/components/SafeContainer";
import {View, Text} from "react-native";
import InputField from "@/components/base/InputField";
import React, {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeContainer>
            <View className="bg-light-authBackground p-6 h-full pt-40">
                <View>
                    <Text className="mb-1.5 font-bold font-heading text-4xl text-gray-800">Welcome Back</Text>
                    <Text className="mb-16 font-normal font-body text-lg text-gray-500">Hello there! Sign in to continue</Text>
                </View>
                <InputField
                    label="EMAIL ADDRESS"
                    placeholder="you@example.com"
                    value={email}
                    onChangeText={setEmail}
                />
                <InputField
                    label="PASSWORD"
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                />
                <View className='w-[95%] flex justify-center pb-3 items-end mt-[-0.725rem]'>
                    <Text className='font-body text-sm font-bold text-gray-600'>Forget password?</Text>
                </View>
                <View className="bg-blue-500 py-3 mt-6 px-8 w-[95%] rounded-full">
                    <Text className="font-button text-lg text-white text-center font-semibold">Sign In</Text>
                </View>

                <View className='w-[95%] flex justify-center items-center mt-8'>
                    <Text className='font-body text-md font-normal text-gray-600'>
                        Don't have an account?
                        <Text className='font-bold'> Sign Up</Text>
                    </Text>
                </View>
            </View>
        </SafeContainer>
    )
}
