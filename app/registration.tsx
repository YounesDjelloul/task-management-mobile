import React, {useState} from 'react';
import {Text, View} from "react-native";
import InputField from "@/components/base/InputField";
import SafeContainer from "@/components/SafeContainer";

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeContainer>
            <View className="bg-light-authBackground p-6 h-full pt-32">
                <View>
                    <Text className="mb-1.5 font-bold font-heading text-4xl text-gray-800">Join Us!</Text>
                    <Text className="mb-16 font-normal font-body text-lg text-gray-500">
                        Create your account to get started
                    </Text>
                </View>
                <InputField
                    label="USER NAME"
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                />
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
                <View className="bg-blue-500 py-3 mt-6 px-8 w-[95%] rounded-full">
                    <Text className="font-button text-lg text-white text-center font-semibold">Sign Up</Text>
                </View>

                <View className='w-[95%] flex justify-center items-center mt-8'>
                    <Text className='font-body text-md font-normal text-gray-600'>
                        Already have an account?
                        <Text className='font-bold'> Sign In</Text>
                    </Text>
                </View>
            </View>
        </SafeContainer>
    );
};

export default Registration;
