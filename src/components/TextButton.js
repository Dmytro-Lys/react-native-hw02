import { Pressable, Text } from "react-native";


const TextButton = ({ text, onPress, styleButton, styleText }) => {
    return (
         <Pressable
            onPress={onPress}
            style={styleButton}>
           <Text style={styleText}>{text}</Text>
        </Pressable>
    )
}

export default TextButton