import {TextInput, View, Text} from "react-native";
import {useState} from "react";

interface InputFieldProps {
    placeholder?: string | undefined,
    value?: string | undefined,
    label?: string,
    onChangeText?: ((text: string) => void) | undefined
}

export default function InputField({placeholder, value, label, onChangeText}: InputFieldProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className='mb-6'>
            <Text className="text-gray-500 text-sm font-medium font-body mb-[-0.275rem]">{label}</Text>
            <TextInput
                className={
                    `border-b w-[95%] text-md text-gray-700 h-12 pl-0
                    ${isFocused ? 'border-blue-500' : 'border-gray-300'}`
                }
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    )
}
