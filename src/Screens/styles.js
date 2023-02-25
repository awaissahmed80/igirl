import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flex: {
        flex:1
    },
    background: {
        flex: 1,
        width: '100%', height: '100%'
    },
    bgColor: {
        backgroundColor: '#EBE6F3',
        flex: 1
    },
    steps:{
        textAlign: 'center',
        fontSize: 18
    },
    heading:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20
    },
    flexCenter:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexTop:{
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    flexBottom:{
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    input:{
        width: 280,
        marginVertical: 25,
        borderBottomWidth: 2,
        padding: 5,
        borderBottomColor: "#ccc"
    },
    chatInput:{
        width: "100%",
        backgroundColor: "white",
        padding: 15,        
    },
    button:{
        padding: 10,
        textAlign: 'center',
    },
    buttonText:{
        fontSize: 16,
        fontWeight: "bold"
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: "contain"
    },  
    backButton:{
        position: 'absolute',
        left: 20,
        top: 40
    },
    topPadding: {
        paddingTop: 50
    },
    bottomPadding:{
        paddingBottom: 50
    },
    circleSize: {
        width: 64,
        height: 64,
        resizeMode: 'cover',        
        borderWidth: 2,
        borderRadius: 40,
        borderColor: "transparent"
    },
    circleSizeSmall: {
        width: 32,
        height: 32,
        resizeMode: 'contain',        
        borderWidth: 2,
        borderRadius: 40,
        borderColor: "transparent"
    },
    selected:{     
        borderWidth: 2,
        borderRadius: 40,   
        borderColor: "red"
    },
    rowItem:{
        marginHorizontal: 10
    },
    chooseGirl:{
        flexDirection: 'row',
         justifyContent: 'space-between',
         marginBottom: 20
    }

})