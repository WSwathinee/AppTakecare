import * as React from 'react';
import { StyleSheet, View, TextButton, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons';

import Input  from '../components/Input';
import FillButton  from '../components/FillButton';
import Textbutton from '../components/Textbutton';
import IconButton from '../components/IconButton';
import Pinput from '../components/Pinput';
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
    

    
   
   
  });
const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <IconButton name="user-circle" />
        
        <Textbutton title={'Add Photo'} onPress={() =>{} }/>
        <Input style={styles.input}
          placeholder={'สภาพผิวหน้า'}
        />
        <Pinput style={styles.input}
          placeholder={'ส่วนผสมเครื่องสำอางที่แพ้'}
        />
        <Pinput style={styles.input}
          placeholder={'ตัวอย่างเครื่องสำอางที่แพ้'}
        />
        <FillButton
          title={'บันทึก'} 
          onPress={() =>{navigation.navigate ('FourPage')} }
        />
      </View>
    </SafeAreaView>
  );
}


export default ThirdPage;