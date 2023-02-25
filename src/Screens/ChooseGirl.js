import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { assets } from '../assets'

export const ChooseGirl = ({goBack, goNext}) => {

    const [ current, setCurrent ] = useState(assets.girl1)
    return(
        <View  style={styles.bgColor}>
            <ImageBackground source={current} resizeMode="cover" style={styles.background}>                
                <View style={{...styles.flexCenter, ...styles.topPadding}}>
                    <Text style={styles.steps}>Step 2/8</Text>
                    <Text style={styles.heading}>Choose your iGirl</Text>
                </View>
                <View style={{...styles.flex, ...styles.flexBottom, ...styles.bottomPadding}}>
                    <View style={styles.chooseGirl}>
                        <TouchableOpacity style={styles.rowItem}>
                            <Image source={assets.plusIcon} style={styles.circleSize}   alt="Left" />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setCurrent(assets.girl1)} style={{...styles.rowItem, ...(current === assets.girl1 && styles.selected)}}>
                            <Image source={assets.girl1} style={styles.circleSize}   alt="Left" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setCurrent(assets.girl2)} style={{...styles.rowItem, ...(current === assets.girl2 && styles.selected)}}>
                            <Image source={assets.girl2} style={styles.circleSize}   alt="Left" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCurrent(assets.girl3)} style={{...styles.rowItem, ...(current === assets.girl3 && styles.selected)}}>
                            <Image source={assets.girl3} style={styles.circleSize}   alt="Left" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={goNext} style={styles.button}>
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