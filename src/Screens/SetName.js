import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, ImageBackground, Image,  Platform, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { assets } from '../assets'

export const SetName = ({goNext, goBack}) => {
    return(
        <View  style={styles.bgColor}>
            <ImageBackground source={assets.girl1} resizeMode="cover" style={styles.background}>  
                <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', left:0, right:0,top:0,bottom:0}} />
                <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding': null}>
                    <View style={{...styles.flex, ...styles.flexCenter}}>
                        <Text style={styles.steps}>Step 4/8</Text>
                        <Text style={styles.heading}>Set Name!</Text>
                    </View>
                    <View style={{...styles.flex, ...styles.flexTop}}>                        
                        <TextInput 
                            style={styles.input}
                        />

                        <TouchableOpacity onPress={goNext} style={styles.button}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>

                <TouchableOpacity onPress={goBack} style={styles.backButton}>
                    <Image source={assets.leftIcon} style={styles.icon}   alt="Left" />                    
                </TouchableOpacity>       
            </ImageBackground>
        </View>
    )
}