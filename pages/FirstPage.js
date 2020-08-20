import * as React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';

import Input  from '../components/Input';
import FillButton  from '../components/FillButton';
import Textbutton from '../components/Textbutton';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    input: {
     
      marginVertical: 8,

    },
    button: {
      marginVertical: 15,
      
    },
   
  });
const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Image
            source={require('../image/TakeCare.png')}
            style={{width:200, height: 200}}
            resizeMode="contain"
        />
        <Input style = {styles.input}
          placeholder={'ชื่อผู้ใช้'} keyboardType={'email-address'}
        />
        <Input style = {styles.input}
          placeholder={'รหัสผ่าน'} secureTextEntry
        />
        <FillButton
          title={'เข้าสู่ระบบ'} 
          style={styles.button} 
          onPress={() =>{navigation.navigate ('ThirdPage')} }
        />
        <Textbutton title={'คุณมีบัญชีหรือยัง...ลงทะเบียน'} onPress={() => {navigation.navigate ('SecondPage')}} />

    
  </View>
    </SafeAreaView>
  );
}


export default FirstPage;