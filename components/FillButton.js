import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#c94f7c',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderRadius: 8,
    },
    text: {
        color: '#000',
        fontWeight: '500',
        fontSize: 16,
    }
  
  });

function Input ({title, style, onPress}){
    return(
        <TouchableOpacity style={[styles.container, style]}onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}
export default Input;