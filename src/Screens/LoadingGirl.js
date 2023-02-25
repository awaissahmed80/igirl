import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { assets } from '../assets'
import { AnimatedCircularProgress } from 'react-native-circular-progress'


export const LoadingGirl = ({goBack, percentage}) => {

    
    

    return(
        <View  style={styles.bgColor}>
            <ImageBackground source={assets.girl1} resizeMode="cover" style={styles.background}>                
                <View style={{...styles.flexCenter, ...styles.topPadding}}>
                    <Text style={styles.steps}>Step 7/8</Text>
                    <Text style={styles.heading}>Creating iGirl...</Text>
                </View>
                <View style={{...styles.flex, ...styles.flexBottom, ...styles.bottomPadding}}>
                    <AnimatedCircularProgress
                        size={160}
                        width={8}
                        fill={percentage}
                        lineCap="round"
                        tintColor="yellow"
                        tintColorSecondary="red"
                        rotation={0}
                        backgroundColor="rgba(0,0,0,0.1)"
                        >
                        {() => (
                            <View style={{ backgroundColor: "rgba(0,0,0,0.15)", padding: 10, borderRadius: 50 }}>
                                <Text style={{textAlign: "center", fontWeight: "bold"}}>{percentage}%</Text>                                
                            </View>)
                        }
                    </AnimatedCircularProgress>

                    {/* <TouchableOpacity onPress={goNext} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity> */}

                </View>
                <TouchableOpacity onPress={() => goBack() } style={styles.backButton}>
                    <Image source={assets.leftIcon} style={styles.icon}   alt="Left" />                    
                </TouchableOpacity>       
            </ImageBackground>
        </View>
    )
}