import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { useState } from "react";
// import { nanoid } from 'nanoid';
import bgImage from '../../assets/images/photo_bg.jpg'
import defaultAvatar from '../../assets/images/avatar1.jpg'
import { Avatar, FormTitle, Input, FormSubmitButton, LinkButton } from '../components';



const styles = StyleSheet.create({
   imageBg: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',

  },
  form: {
    position: 'relative',
    flex: 1,
    marginTop: 263,
    padding: 16,
    // flexDirection: "column",
    // maxHeight: '100vh',
    // maxWidth: '100vw',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',

  },
  formElements: {
    flex: 1,
    // maxHeight: 182,
    // flexDirection: "column",
     rowGap: 16,
  },
 
});

const RegistrationScreen = () => {
  
 
   const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    alert("Submit")
  }

  const reset = () => {
    setUserName("")
    setEmail("")
    setPassword("")
  }

  const onLink = () => {
    alert("Link")
  }
  
  return (
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.form}>
          {/* <Avatar avatarImage={defaultAvatar}/> */}
        <Avatar /> 
      
        <FormTitle text="Реєстрація" handleMarginTop={92} />
          <View style={styles.formElements}>
            <Input inputName="userName" handleChange= {setUserName} inputValue={userName} />
            <Input inputName="email" handleChange= {setEmail} inputValue={email}/>
            <Input inputName="password" handleChange= {setPassword} inputValue={password}/>
          </View>
          <FormSubmitButton title="Зареєструватися" onPress={onSubmit} />
          <LinkButton title="Вже є акаунт? Увійти" onPress={onLink}/>
        </View> 
      </ImageBackground>   
  );
}

export default RegistrationScreen;