import { Pressable, StyleSheet, PressableProps, Text, Animated, GestureResponderEvent } from "react-native"
import { Colors, Radius } from "../constants"

export const Button = ({ text, ...props }: PressableProps & { text: string }) => {

    const animatedValue = new Animated.Value(100)
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.accentHover, Colors.accent]
    })


    const handlePressIn = (e: GestureResponderEvent) => {
        Animated.timing(
            animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start()
        props.onPressIn && props.onPressIn(e)
    }
    const handlePressOut = (e: GestureResponderEvent) => {
        Animated.timing(
            animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true
        }).start()
        props.onPressOut && props.onPressOut(e)
    }
    return (

        <Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={{ ...styles.container, backgroundColor: color }}>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Pressable >

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.accent,
        borderRadius: Radius.r10,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        width: 280

    },
    text: {
        color: Colors.white,
        fontSize: 16
    }

})