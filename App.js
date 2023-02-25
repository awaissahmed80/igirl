import React, { useState, useEffect } from "react"
import { StatusBar,  View } from "react-native"
import PagerView from 'react-native-pager-view';
import { styles } from "./src/Screens/styles";
import { ChooseGirl, Goals, Chat, Interests, LoadingGirl, Personality, SetName, Welcome } from "./src/Screens";

let interval = null
export default function App(){


    const sliderRef = React.useRef();
    const [ active, setActive ] = useState(0)
    const [ percentage, setPercentage ] = useState(0)

    const goToIndex = (index) => {        
        sliderRef?.current?.setPage(parseInt(index))        
    }

    const  pageScroll = (e) => {
        setActive(e.nativeEvent.position)
    }

    useEffect(() => {
        if(active === 6){
            interval = setInterval(function () {
                setPercentage(s => (s + 10))
            }, 1000);
        }else{
            clearInterval(interval)
        }
      return () => {
        clearInterval(interval)
      };
    }, [active])

    useEffect(() => {
        if(percentage > 99){
            setPercentage(0)
            goToIndex(7)            
        }        
    }, [percentage])
    
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <View style={styles.container}>
                <PagerView onPageSelected={pageScroll} scrollEnabled={false} style={styles.container} ref={sliderRef}  initialPage={0}>
                    <Welcome goNext={() => goToIndex(1)} />
                    <ChooseGirl goNext={() => goToIndex(2)}  goBack={() => goToIndex(0)} />
                    <Personality goNext={() => goToIndex(3)}  goBack={() => goToIndex(1)} />
                    <SetName goNext={() => goToIndex(4)}  goBack={() => goToIndex(2)} />
                    <Interests goNext={() => goToIndex(5)}  goBack={() => goToIndex(3)} />
                    <Goals goNext={() => goToIndex(6)}  goBack={() => goToIndex(4)} />
                    <LoadingGirl percentage={percentage} goBack={() => goToIndex(5)} />
                    <Chat goBack={() => goToIndex(5)} />
                </PagerView>
            </View>
        </View>
    )
}

