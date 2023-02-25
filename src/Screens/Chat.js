import React, { useState } from 'react'
import { View, Text, TextInput, Alert, KeyboardAvoidingView, ImageBackground, Image,  Platform, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { assets } from '../assets'

export const Chat = ({goNext, goBack}) => {

    const interests = [
        'Insagram', 'Astrology', 'Fishing', 'Gardening', 'Fashion', 'Photography', 'Board Games', 'Wines', 'Travel', 'Video Games', 'Music', 'Coffee', 'Sports', 'Art', 'Beer', 'Politics', 'Swimming', 'Cooking', 'Outdoors', 'Working out', 'Shopping', 'Cats'
    ]

    let messages = [
        { from: 'sender', text: "Hi how are you?" },
        { from: 'sender', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid" },
        { from: 'reciever', text: "Nice to meet you" }
    ]

    const [ chat, setChat ] = useState(messages)
    const [ value, setValue ] = useState("")
    const chatRef = React.useRef(null)

    const sendMessage = () => {
        if(value){
            let all_messages = [...chat]
            all_messages.push({
                from: "sender", text: value
            })
            setChat(all_messages)
            setValue("")        
        }else{
            Alert.alert("Message", "Please enter message")
        }
    }
    return(
        <View  style={styles.bgColor}>
            <ImageBackground source={assets.girl1} resizeMode="cover" style={styles.background}>  
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ backgroundColor: 'rgba(255,255,255,0.2)', position: 'absolute', left:0, right:0,top:0,bottom:0}} />
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 50, position: 'absolute', right: 15, top: 36}}>
                        <Image source={assets.girl1} style={styles.circleSizeSmall}   alt="Left" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "#ccc",borderRadius: 50, position: 'absolute', right: 15, top: 80}}>
                        <Image source={assets.gift} style={styles.circleSizeSmall}   alt="Left" />
                    </TouchableOpacity>

                    <View style={{ paddingHorizontal: 20, paddingVertical: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity style={{ width: '15%' }} onPress={goBack}>
                            <Image source={assets.leftIcon} style={styles.icon}   alt="Left" />                    
                        </TouchableOpacity>     
                        
                        <View style={{ borderRadius: 20, paddingHorizontal: 25, paddingVertical: 10, borderWidth: 1, borderColor: "white" }}>
                            <Text style={{ color: "red", fontWeight: "600" }}>Level 1</Text>
                        </View>  
                        <View style={{ width: '15%' }} />
                    </View>
                    <ScrollView ref={chatRef} onContentSizeChange={() => chatRef.current.scrollToEnd({ animated: true })} style={{ flex: 1 }} contentContainerStyle={{ marginHorizontal: 20, paddingBottom: 20, flexGrow: 1, justifyContent: "flex-end" }}>
                        {
                            chat?.map((message, m) => 
                                <View key={m} style={{ padding: 15, borderRadius: 10, alignSelf: message.from === "sender" ? "flex-start" : "flex-end", backgroundColor: message.from === "sender" ? "white" : "#F5B5B5", marginVertical: 10 }}>
                                    <Text>{message.text}</Text>
                                </View>
                            )
                        }
                    </ScrollView>
                </SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding": "null"}>
                <View>
                    <View style={{ padding: 10 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                interests?.map((item, i) =>
                                    <TouchableOpacity key={i} style={{ paddingHorizontal: 15, paddingVertical: 5, borderWidth: 1, borderColor: "#000", borderRadius: 20, marginHorizontal: 3, marginVertical: 3 }}>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </ScrollView>
                    </View>
                    <View style={{ backgroundColor: "white", padding: 10}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                interests?.map((item, i) =>
                                    <TouchableOpacity key={i} style={{ paddingHorizontal: 25, paddingVertical: 7, borderWidth: 1, borderColor: "#000", borderRadius: 20, marginHorizontal: 5, marginVertical: 3 }}>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </ScrollView>
                    </View>
                    <View  style={{ backgroundColor: "white", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ flex:1 }}>
                            <TextInput 
                                style={styles.chatInput}
                                placeholder="Enter message...."
                                value={value}
                                onChangeText={(val) => setValue(val)}
                                onSubmitEditing={sendMessage}
                            />                            
                        </View>
                        <TouchableOpacity onPress={sendMessage} style={{ marginRight: 15, opacity: 0.5 }}>
                            <Image source={assets.send} style={styles.icon}   alt="Left" />                    
                        </TouchableOpacity>       
                    </View>
                </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
}