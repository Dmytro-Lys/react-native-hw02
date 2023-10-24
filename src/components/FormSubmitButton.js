import { StyleSheet, Pressable, Text } from "react-native";
import TextButton from "./TextButton";

const styles = StyleSheet.create({
    buttonSubmit: {
        borderRadius: 100,
        marginTop: 32,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: '#FF6C00',
    },
    buttonSubmitText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        
    }

})   

const FormSubmitButton = ({text, onPress}) => {
    return (
        <TextButton text={text} onPress={onPress} styleButton={styles.buttonSubmit} styleText={styles.buttonSubmitText} />
     )
}

export default FormSubmitButton;