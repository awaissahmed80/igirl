import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const Welcome = ({goNext}) => {
    return(
        <View  style={styles.bgColor}>
            <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding': null}>
                <View style={{...styles.flex, ...styles.flexCenter}}>
                    <Text style={styles.steps}>Step 1/8</Text>
                    <Text style={styles.heading}>So nice to meet you!</Text>
                </View>
                <View style={{...styles.flex, ...styles.flexTop}}>
                    <Text>What is your name?</Text>
                    <TextInput 
                        style={styles.input}
                    />

                    <TouchableOpacity onPress={goNext} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </View>
    )
}