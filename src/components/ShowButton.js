import { StyleSheet, Pressable, Text } from "react-native";


const styles = StyleSheet.create({
    buttonShow: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    buttonShowTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1B4371',
    }
})   

const ShowButton = ({ titleShow, onPressShow }) => {
     return (
         <Pressable
            onPress={onPressShow}
            style={styles.buttonShow}>
           <Text style={styles.buttonShowTitle}>{titleShow}</Text>
        </Pressable>
    )
}

export default ShowButton;