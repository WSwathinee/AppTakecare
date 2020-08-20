import * as React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
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
    button: {
      width:100,
      margin:20,
      
    },
    

    
   
   
  });
const FivePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <Text style={{alignSelf: 'center'}}>ผลการค้นหา:St.lves</Text>
      <View style={{marginTop: 10,alignSelf: 'center'}}>
       <Image source={require('../image/A.jpg')} />
       </View>
       <View style={{marginTop: 10,alignSelf: 'center'}}>
       <Image source={require('../image/B.jpg')} />
       </View>
       <View style={{marginTop: 10,alignSelf: 'center'}}>
       <Image source={require('../image/C.jpg')} />
       </View>
       <View style={{marginTop: 10,alignSelf: 'center'}}>
       <Image source={require('../image/D.jpg')} />

       </View>
       <View style={styles.container}>


      <FillButton
        title={'ถัดไป'} 
        style={styles.button} 
        onPress={() => { navigation.navigate('SixPage') }}
      />



</View>
      </ScrollView>

    </SafeAreaView>
  );
}


export default FivePage;