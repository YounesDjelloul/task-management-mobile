import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface SafeContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function SafeContainer({children, className = ''}: SafeContainerProps) {
    return (
        <SafeAreaView className="flex-1">
            <View className={`flex-1 ${className}`}>
                {children}
            </View>
        </SafeAreaView>
    );
}
