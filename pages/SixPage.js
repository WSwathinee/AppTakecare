import * as React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';

import Sinput  from '../components/Sinput';
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
const SixPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>กรุณาใส่ส่วนผสมของเครื่องสำอางที่จะวิเคราห์</Text>
      <Sinput style = {styles.input}
          placeholder={'ส่วนผสม'}
      />
       <FillButton
          title={'วิเคราะห์'} 
          style={styles.button} 
          onPress={() => { alert("กำลังประมวลผล.....") }}
        />
        
        
    
  </View>
    </SafeAreaView>
  );
}


export default SixPage;