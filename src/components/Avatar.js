import { StyleSheet,  View, Pressable, ImageBackground } from 'react-native';

const Avatar = ({ avatarImage = null, size = 60 }) => {
 
   const styles = StyleSheet.create({
   avatarImage: {
     flex: 1,
    justifyContent: 'center',
    borderRadius: 16,
    width: size,
    height: size, 
     backgroundColor: '#f6f6f6',
    overflow: 'hidden',
  },
 
});
    return (
        <ImageBackground source={avatarImage} resizeMode="cover" style={styles.avatarImage} />
    )
}

export default Avatar;