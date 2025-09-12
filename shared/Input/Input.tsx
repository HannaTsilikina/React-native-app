import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native"
import { Colors, Radius } from '../constants'
import { useState } from "react"
import EyeOpenIcon from "../../assets/icons/EyeOpenIcon"
import EyeClosedIcon from "../../assets/icons/EyeClosedIcon"

export const Input = ({isPassword, ...props}: TextInputProps & { isPassword?: boolean }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    return (
        <View style={styles.main}>
            <TextInput placeholderTextColor={Colors.gray} secureTextEntry={isPassword && isPasswordVisible} style={styles.input} {...props} />
            {isPassword && <Pressable style={styles.eyeIcon} onPress={()=>setIsPasswordVisible(!isPasswordVisible)}>
                {isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </Pressable>}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        position: 'relative',
        backgroundColor: Colors.dark,
        borderRadius: Radius.r10,
        width: '100%',
    },
    input: {
        backgroundColor: Colors.dark,
        borderRadius: Radius.r10,
        color: Colors.gray,
        padding: 20,
        width: '100%',
        fontSize: 16,


    },
    eyeIcon: {
        position: 'absolute',
        top: 17,
        right: 24
    }
})