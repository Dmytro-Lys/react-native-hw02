import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import bgImage from '../../assets/images/photo_bg.jpg'
import defaultAvatar from '../../assets/images/avatar1.jpg'
import { Avatar } from '../components';


const styles = StyleSheet.create({
   imageBg: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    position: 'relative',
    flex: 1,
    marginTop: 263,
    flexDirection: "column",
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',

  }
});

const RegistrationScreen = () => {
  return (
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.form}>
          {/* <Avatar avatarImage={defaultAvatar}/> */}
          <Avatar/> 
        </View> 
      </ImageBackground>   
  );
}

export default RegistrationScreen;