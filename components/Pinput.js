import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#e8e8e8',
      width: '100%',
      padding: 15,
      borderRadius: 5,
      color: '#000',
      height: 100,
     
    
    },
  });
  
function Input ({style, ...props}){
    return(
        <TextInput {...props} style={[styles.input, style]} />
    );
}
export default Input;