import { View, StyleSheet, Text, Dimensions, Animated } from "react-native"
import { Colors } from "../constants"
import { useEffect, useState } from "react"

export const CustomAlert = ({ error }: { error: string | null }) => {
    const [isVisible, setIsVisible] = useState(false)
    const animatedValue = new Animated.Value(-100)


    useEffect(() => {
        if (error) {

            setIsVisible(true)
            

            const timer = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [error])

    const onEnter = () => {
        Animated.timing(animatedValue, {
                toValue: 0,
                duration: 400,
                useNativeDriver:true
}).start()
    }



    return isVisible ?
        <Animated.View style={{
            ...styles.container, transform: [{
            translateY:animatedValue
        }] }} onLayout={onEnter}>
            <Text style={styles.text}>{error}</Text>
        </Animated.View> : <></>

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.red,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 20,
        width: Dimensions.get('screen').width,
        padding: 16
    },
    text: {
        color: Colors.white,
    }
})