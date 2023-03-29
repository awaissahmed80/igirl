import React, { useState, useEffect } from 'react'
import { View, Text, Alert, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads'
import { assets } from '../assets'
import { styles } from './styles'

export const Goals = ({goNext, goBack}) => {

    const [ selected, setSelected ] = useState([])

    const goals = [
        'Chat About Random Stuff', 'Feel Less Lonely', 'Have Fun', 'Make Virtual Friend', 'Talk Shame-Free', 'Roleplay', 'Share Emotions', 'Play Chat Games'
    ]

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


    const handleSelection = (val) => {
        let all_selected = [...selected]
        let index = all_selected.findIndex(x => x === val)
        if(index > -1){
            all_selected.splice(index, 1)            
        }else{
            if(all_selected?.length < 5)
                all_selected.push(val)
            else
                Alert.alert("Maximum Selection", "Your maximum selection limit is 5.")
        }
        setSelected(all_selected)
    }

    
    return(
        <View  style={styles.bgColor}>
            
                <View style={{ ...styles.flexCenter, ...styles.topPadding}}>
                    <Text style={styles.steps}>Step 6/8</Text>
                    <Text style={styles.heading}>Select your Goals</Text>
                </View>
                <View style={{width: '100%', paddingHorizontal: 10, ...styles.flex, ...styles.flexTop}}>
                    <ScrollView>
                        <Text style={{ textAlign: "center" }}>Please tell us what are you looking for in your relationship. It will help us taylor personality just for you.</Text>
                        <View style={{ marginTop: 30, alignItems: "center"}}>
                            {
                                goals?.map((item, i) =>
                                    <TouchableOpacity key={i} onPress={() => handleSelection(item)} style={{ paddingHorizontal: 25, paddingVertical: 7, borderWidth: 1, borderColor: "#000", borderRadius: 20, marginHorizontal: 10, marginVertical: 10, backgroundColor: selected.includes(item) ? "#CFB6E0" : "transparent" }}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </ScrollView>
                    <View style={{ paddingVertical: 15 }}>
                    <TouchableOpacity onPress={handlePress} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
                <TouchableOpacity onPress={goBack} style={styles.backButton}>
                    <Image source={assets.leftIcon} style={styles.icon}   alt="Left" />                    
                </TouchableOpacity>       
                
        </View>
    )
}