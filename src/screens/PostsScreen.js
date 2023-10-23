import {  StyleSheet, View } from "react-native";
import { Header, Avatar } from "../components";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    }
})

const PostsScreen = () => {
    return (
        <>
         <Header title="Публікації"/>
        <View style={styles.container}>
           {/* <Avatar/> */}
            </View>
       </>     
  )
}
export default PostsScreen;