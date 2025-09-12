import { Pressable, View , StyleSheet, PressableProps, Text} from "react-native"
import { Colors, Radius } from "../constants"

export const Button = ({text, ...props}:PressableProps & {text:string}) => {
    return (
        
        <Pressable {...props} onPress={() => { }} >
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
        
             </View></Pressable>
   
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.accent,
        borderRadius: Radius.r10,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        width:280
        
    },
    text: {
        color: Colors.white,
        fontSize:16
    }

})