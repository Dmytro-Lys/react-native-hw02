import {  Pressable } from 'react-native';
import SvgPlus from './SvgPlus'


const SvgPlusButton = ({styleButton, onPress, stroke, rotate = '0'}) => {
    return (
          <Pressable
            onPress={onPress}
            style={styleButton}>
              {/* {({ pressed }) => (
          <SvgPlus stroke={pressed ? '#e8e8e8' : '#ff6c00'} rotate = {pressed ? '45' : '0'}/>
          )}   */}
            <SvgPlus stroke={stroke} rotate = {rotate}/>
          </Pressable>    
    )
}

export default SvgPlusButton