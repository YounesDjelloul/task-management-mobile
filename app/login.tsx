import SafeContainer from "@/components/SafeContainer";
import {View, Text, Pressable} from "react-native";
import InputField from "@/components/base/InputField";
import React, {useState} from "react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';

interface State {
    email: string;
    password: string;
}

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

const initialValues: State = {
    email: '',
    password: ''
}

export default function Login() {
    const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: initialValues,
    });

    const onSubmit = async (data: State) => {
        console.log(data)
    }

    return (
        <SafeContainer>
            <View className="bg-light-authBackground p-6 h-full pt-40">
                <View>
                    <Text className="mb-1.5 font-bold font-heading text-4xl text-gray-800">Welcome Back</Text>
                    <Text className="mb-16 font-normal font-body text-lg text-gray-500">Hello there! Sign in to
                        continue</Text>
                </View>

                <Controller
                    control={control}
                    name="email"
                    render={({field: {onChange, value}}) => (
                        <InputField
                            label="EMAIL ADDRESS"
                            placeholder="you@example.com"
                            value={value}
                            onChangeText={onChange}
                            error={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({field: {onChange, value}}) => (
                        <InputField
                            label="PASSWORD"
                            placeholder="password"
                            value={value}
                            onChangeText={onChange}
                            error={errors.password?.message}
                            secureTextEntry
                        />
                    )}
                />
                <View className='w-[95%] flex justify-center pb-3 items-end mt-[-0.725rem]'>
                    <Text className='font-body text-sm font-bold text-gray-600'>Forget password?</Text>
                </View>
                <Pressable
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="bg-blue-500 py-3 mt-6 px-8 w-[95%] rounded-full"
                >
                    <Text className="font-button text-lg text-white text-center font-semibold">
                        {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </Text>
                </Pressable>

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
