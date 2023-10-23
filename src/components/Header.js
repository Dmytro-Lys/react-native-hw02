import {  StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        
        justifyContent: 'center',
        // alignContent: '',
        // alignItems: 'baseline',
        marginTop: 44,
        maxHeight: 44,
        height: 44,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    },
    textHeader: {
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: '#212121',
    }
})

const Header = ({title}) => {
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>{title}</Text>
       </View>
   )
}

export default Header;