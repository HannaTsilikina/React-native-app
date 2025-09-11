import { StyleSheet, TextInput, TextInputProps } from "react-native"
import { Colors, Radius } from '../constants'

export const Input = (props: TextInputProps) => {
    return (
        <TextInput placeholderTextColor={Colors.gray} style={styles.input} {...props} />
    )
}



const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.dark,
        borderRadius: Radius.r10,
        color: '#AFB2BF',
        padding: 20,
        width: '100%',
        fontSize: 16,

    }
})