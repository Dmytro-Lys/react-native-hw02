import { StyleSheet, Pressable } from 'react-native';
import { SvgXml } from 'react-native-svg';

const styles = StyleSheet.create({
  buttonBase: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})
const SvgButton = ({styleButton, onPress, svgWidth, svgHeight, svgFile, fill='none'}) => {
    return (
          <Pressable
            onPress={onPress}
            style={[styles.buttonBase, styleButton]}>
              {/* {({ pressed }) => (
          <SvgPlus stroke={pressed ? '#e8e8e8' : '#ff6c00'} rotate = {pressed ? '45' : '0'}/>
          )}   */}
            <SvgXml width={svgWidth} height={svgHeight} fill={fill} xml={svgFile} />
          </Pressable>    
    )
}

export default SvgButton