import React, { useState, useEffect, useReducer } from 'react'
import { View, Text, TextInput, Alert, KeyboardAvoidingView, ImageBackground, Image,  Platform, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { assets } from '../assets'
import { Dialogflow_V2 } from 'react-native-dialogflow'

const dialogFlowConfig = {
    "type": "service_account",
    "project_id": "rn-bot-kpjv",
    "private_key_id": "350920e1fb9651dc2c966202fed0e7e76ce4a151",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIJixXn/wDklaw\nxDhjdM65QSxWhDuG3kut7IbV2H/v8Mh6e3hzFZcno5R4v2IxnDz2h2F5sqDracpt\nVWLaU2gnzhg+rMpeEvUZh88Jwd2KpBL8ujdARM8FViC6hpF5/AXyD7JFWe/Q8Laq\nN3+yEsK2K3BBBKDTAh7nrys0vaUYst6lXir+/sohV84dQBYewnSV8Wb+kw871d9e\njxvtoQqm0TVDrQjOqBB+o0tsjXLMDJXk3l+sbekH2a9SMWg9+U5Qx4v881vYTWTC\nFMWqUO9G9p7rer/anhbeGa8hNKu3NRvxHC70EsMSCbsGNfSc/a74KvVU8coI+AVM\nzYCeyPEJAgMBAAECggEAJ8D1Q75CFw+E6n0+2fpEaSVZwiFnlWUn0PbO3UCwQJ8p\norJNfUZHjJcAEW+p+EKZFTpUkRB6x+duToMMLGMup+FWjXRSiZboWdbQt5ZrA3ON\nVedCvCAuole2DnZWBM2a/LZDaWTwriZxkaOOWHdDd11vYWqi6uZb7xaq1UHpvdrG\nxBzNId5kbPsKs1R3ilJPmLFvq8L9dkk7IMVoAAWOgTG5YW/CKL2NWlC/glAiPA3o\nnJN90EZFIvbmYAi80u6/qOrSzEA0027se9Js0b7Lb9EhkP8EAxij4LKbJxyffZ31\nSoa9uDj0RCAqaVUrXSys70I0WTs0GOEVDTlXvo329QKBgQD9L4e/u2UImKkUCs01\nNbrbTdbawMiWIvgLoa6aFnKp9+YmhTPzxo/51Ac0Bp2GkUbLTJenQ5LuP6hET1dl\nBMENA0KUC7QdOZuguI/bwB5UwArU1qOdXPvE5GyoCUbW4o4VkmuIo4NUHZ8cklOk\nngjNpXEGHyykMgEqYrTNa0MxdwKBgQDKX7ieipYwx82XCd7t6f8Ln4VjpUh9/Rpz\neET3+CatfHgJO/Z28RcBSp14tRAbMJAWp9mkS5cA+O0W8BFbb0Wd4Ujffs6cz27h\nnuiNPhVRBV213JUdI6WGwPe0Zqim8ZzM0N+l4ftBduBLE4GeKfJrcWI/smLtKLHx\n2/zfVcmRfwKBgQCKd24ke9Y7p1IA9g9YpHP28FEq/fg1tBY4NkqJVvGK51rlgj/x\neIzRMxZla6DHMbioAtGF1r0Ks6HRChtf0gPKnBfTY7szqIfmlEmJAz8TVpwV3vVI\nYMwI2GxcUgZ+CxVt0tAgwFxYqoKUW6qHAy8JWQvBL1d4zSg6CBWdqqXq7QKBgGbm\n/U1AUtZDAnsGfeCj1xfl6UGdzZqilEyanxcniyMz4yVu5Afe1z/E3QV/q8zniJy8\nhKJR/Vp1OLktIOZJUjDRWOir5gs+PrdiwgTvyI8GF3xdyUSj14sJm+qTOLaKrJxI\nqTAEFGpZM/t407PEyItxf++7mSnWQ4UjwxUc3f2pAoGBAPqSt9Q5B96CWadbgNGQ\nCWGBgdlDMb3jFQsAZnmQfAqXZJm9XiJLG06N5tySpqzzokpYK/iUDBU3iKXeRvJU\nYGYCZeEf9eyaxOk3tCfRA8qf8KvbvOKTr12DP2vJWsi38HfCPXWc4CBK0kdx+O9m\nqCf+scgScp/ub0Ev/80xsoYy\n-----END PRIVATE KEY-----\n",
    "client_email": "service-key-col12@rn-bot-kpjv.iam.gserviceaccount.com",
    "client_id": "113482432627853340830",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-key-col12%40rn-bot-kpjv.iam.gserviceaccount.com"
  }
  
export const Chat = ({goNext, goBack}) => {

    const interests = [
        'Insagram', 'Astrology', 'Fishing', 'Gardening', 'Fashion', 'Photography', 'Board Games', 'Wines', 'Travel', 'Video Games', 'Music', 'Coffee', 'Sports', 'Art', 'Beer', 'Politics', 'Swimming', 'Cooking', 'Outdoors', 'Working out', 'Shopping', 'Cats'
    ]

    // let messages = [
        // { from: 'sender', text: "Hi how are you?" },
        // { from: 'sender', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid" },
        // { from: 'reciever', text: "Nice to meet you" }
    // ]
    const [ mount, setMount ] = useState(false)
    // const [ chat, setChat ] = useState(messages)
    const [ value, setValue ] = useState("")
    const chatRef = React.useRef(null)

    const [messages, setMessages] = useReducer(
        (state, newState) => ([...state, newState]),
        []
    )


    useEffect(() => {

        if(!mount){
            setMount(true)
            
            Dialogflow_V2.setConfiguration(
                dialogFlowConfig.client_email,
                dialogFlowConfig.private_key,
                Dialogflow_V2.LANG_ENGLISH_US,
                dialogFlowConfig.project_id,
            )        
        }
    }, [mount])


    const handleGoogleResponse = (result) => {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        // let all_messages = [...messages]
        // all_messages.push()
        setMessages({
            from: "reciever", text: text
        })

        
    };

    const sendMessage = () => {
        if(value){
            // let all_messages = [...messages]
            // all_messages.push({
            //     from: "sender", text: value
            // })
            // setMessages(all_messages)
            setMessages({
                from: "sender", text: value
            })
            setValue("")        
            Dialogflow_V2.requestQuery(
                value,
                result => {
                //   console.log('result', result);
                  handleGoogleResponse(result);
                },
                error => {
                  console.log(error);
                },
              );
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
                            messages?.map((message, m) => 
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