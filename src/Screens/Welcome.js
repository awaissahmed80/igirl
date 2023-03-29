import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads'
import { styles } from './styles'


export const Welcome = ({goNext}) => {

    const [ shown, setShown ] = useState(false)
    const { isLoaded, isClosed, load, show } = useInterstitialAd(TestIds.INTERSTITIAL, {
        requestNonPersonalizedAdsOnly: true,
    });

    useEffect(() => {        
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed && !shown) {      
            setShown(true)
            goNext()
        }
    }, [isClosed, goNext, shown]);


    const handlePress =() => {        
        if (isLoaded) {
            show();
        }else{
            goNext()
        }          
    }

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

                    <TouchableOpacity onPress={handlePress} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </View>
    )
}