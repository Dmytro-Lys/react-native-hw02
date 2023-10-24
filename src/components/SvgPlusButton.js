import { StyleSheet, Pressable } from 'react-native';
import SvgPlus from './SvgPlus'

const styles = StyleSheet.create({
  buttonBase: {
    flex: 1,

       justifyContent: 'center',
       alignItems: 'center',
    }
})
const SvgPlusButton = ({ styleButton, onPress, stroke, rotate = '0' }) => {
    
    return (
          <Pressable
            onPress={onPress}
            style={[styles.buttonBase, styleButton]}>
              {/* {({ pressed }) => (
          <SvgPlus stroke={pressed ? '#e8e8e8' : '#ff6c00'} rotate = {pressed ? '45' : '0'}/>
          )}   */}
            <SvgPlus stroke={stroke} rotate = {rotate}/>
          </Pressable>    
    )
}

export default SvgPlusButton