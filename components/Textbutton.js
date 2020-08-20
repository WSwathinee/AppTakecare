import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderRadius: 8,
    },
    text: {
        color: '#c94f7c',
        fontWeight: '500',
        fontSize: 14,
    },
  
  
    
    
  });

function TextButton ({title, style, onPress}){
    return(
        <TouchableOpacity style={[styles.container, style]}onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}
export default TextButton;