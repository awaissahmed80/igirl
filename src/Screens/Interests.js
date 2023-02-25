import React, { useState } from 'react'
import { View, Text, TextInput, Alert, Image, ScrollView, TouchableOpacity } from 'react-native'
import { assets } from '../assets'
import { styles } from './styles'

export const Interests = ({goNext, goBack}) => {

    const [ selected, setSelected ] = useState([])

    const interests = [
        'Insagram', 'Astrology', 'Fishing', 'Gardening', 'Fashion', 'Photography', 'Board Games', 'Wines', 'Travel', 'Video Games', 'Music', 'Coffee', 'Sports', 'Art', 'Beer', 'Politics', 'Swimming', 'Cooking', 'Outdoors', 'Working out', 'Shopping', 'Cats'
    ]

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

    console.log("Selected", selected)
    return(
        <View  style={styles.bgColor}>
            
                <View style={{ ...styles.flexCenter, ...styles.topPadding}}>
                    <Text style={styles.steps}>Step 5/8</Text>
                    <Text style={styles.heading}>Select your Interests</Text>
                </View>
                <View style={{width: '100%', paddingHorizontal: 10, ...styles.flex, ...styles.flexTop}}>
                    <ScrollView>
                        <Text style={{ textAlign: "center" }}>Select upto 5 things that you like or associate with. It will help us taylor personality just for you.</Text>
                        <View style={{ marginTop: 30, flexDirection: 'row', flexWrap: "wrap" }}>
                            {
                                interests?.map((item, i) =>
                                    <TouchableOpacity key={i} onPress={() => handleSelection(item)} style={{ paddingHorizontal: 25, paddingVertical: 7, borderWidth: 1, borderColor: "#000", borderRadius: 20, marginHorizontal: 10, marginVertical: 5, backgroundColor: selected.includes(item) ? "#CFB6E0" : "transparent" }}>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </ScrollView>
                    <View style={{ paddingVertical: 15 }}>
                    <TouchableOpacity onPress={goNext} style={styles.button}>
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