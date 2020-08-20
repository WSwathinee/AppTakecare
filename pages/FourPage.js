import * as React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

import Input  from '../components/Input';
import FillButton  from '../components/FillButton';
import Textbutton from '../components/Textbutton';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
const FourPage = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

      <Searchbar
        style={{
          backgroundColor: "#e8e8e8",
          marginTop: 10,
          width: 400,
        }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
    />
        <FillButton
          title={'ค้นหา'} 
          style={styles.button} 
          onPress={() =>{navigation.navigate ('FivePage')} }
        />
       

    
  </View>
    </SafeAreaView>
  );
}


export default FourPage;