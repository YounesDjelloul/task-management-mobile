import React from 'react';
import {Pressable, Text, View} from "react-native";
import InputField from "@/components/base/InputField";
import SafeContainer from "@/components/SafeContainer";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Link} from "expo-router";

interface State {
    username: string
    email: string
    password: string
}

const registrationSchema = z.object({
    username: z.string(),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

const initialValues: State = {
    username: '',
    email: '',
    password: ''
}

const Registration = () => {
    const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(registrationSchema),
        defaultValues: initialValues,
    });

    const onSubmit = async (data: State) => {
        console.log(data)
    }

    return (
        <SafeContainer>
            <View className="bg-light-authBackground p-6 h-full pt-32">
                <View>
                    <Text className="mb-1.5 font-bold font-heading text-4xl text-gray-800">Join Us!</Text>
                    <Text className="mb-16 font-normal font-body text-lg text-gray-500">
                        Create your account to get started
                    </Text>
                </View>
                <Controller
                    control={control}
                    name="username"
                    render={({field: {onChange, value}}) => (
                        <InputField
                            label="USER NAME"
                            placeholder='Username'
                            value={value}
                            onChangeText={onChange}
                            error={errors.username?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    render={({field: {onChange, value}}) => (
                        <InputField
                            label="EMAIL ADDRESS"
                            placeholder='you@example.com'
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

                <Pressable
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="bg-blue-500 py-3 mt-6 px-8 w-[95%] rounded-full"
                >
                    <Text className="font-button text-lg text-white text-center font-semibold">Sign Up</Text>
                </Pressable>

                <View className='w-[95%] flex justify-center items-center mt-8'>
                    <Text className='font-body text-md font-normal text-gray-600'>
                        Already have an account?
                        <Link href='./login'>
                            <Text className='font-bold'> Sign In</Text>
                        </Link>
                    </Text>
                </View>
            </View>
        </SafeContainer>
    );
};

export default Registration;
