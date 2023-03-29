import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads'
import {Slider} from '@miblanchard/react-native-slider';
import { styles } from './styles'
import { assets } from '../assets'

export const Personality = ({goBack, goNext}) => {

    
    const [ state, setState ] = useState({})
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
            <ImageBackground source={assets.girl1} resizeMode="cover" style={styles.background}>                
                <View style={{...styles.flexCenter, ...styles.topPadding}}>
                    <Text style={styles.steps}>Step 3/8</Text>
                    <Text style={styles.heading}>Tweak Personality</Text>
                </View>
                <View style={{...styles.flex, ...styles.flexBottom, ...styles.bottomPadding}}>

                    <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text>Shy</Text>
                                <Text>Flirty</Text>                            
                            </View>
                            <View style={{flex: 1, marginVertical: 10, alignItems: 'stretch', justifyContent: 'center', }}>
                                <Slider
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="#E50000"                                
                                    trackStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                                    thumbTintColor="red"
                                        value={state?.one || 50}
                                        onValueChange={value => setState({...state, one: value})}
                                    />
                            </View>
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text>Pessimistic</Text>
                                <Text>Optimistic</Text>                            
                            </View>
                            <View style={{flex: 1, marginVertical: 10, alignItems: 'stretch', justifyContent: 'center', }}>
                                <Slider
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="#E50000"                                
                                    trackStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                                    thumbTintColor="red"
                                        value={state?.two || 50}
                                        onValueChange={value => setState({...state, two: value})}
                                    />
                            </View>
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text>Ordinary</Text>
                                <Text>Mysterious</Text>                            
                            </View>
                            <View style={{flex: 1, marginVertical: 10, alignItems: 'stretch', justifyContent: 'center', }}>
                                <Slider
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="#E50000"                                
                                    trackStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                                    thumbTintColor="red"
                                        value={state?.three || 50}
                                        onValueChange={value => setState({...state, three: value})}
                                    />
                            </View>
                        </View>

                    </View>

                    <TouchableOpacity onPress={handlePress} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={goBack} style={styles.backButton}>
                    <Image source={assets.leftIcon} style={styles.icon}   alt="Left" />                    
                </TouchableOpacity>       
            </ImageBackground>
        </View>
    )
}