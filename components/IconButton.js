import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create ({
    container: {

    },

});
function IconButton ({name, style, onPress}){
    return(
        <TouchableOpacity style={[styles.container, style]}onPress={onPress}>
            <Icon name={name} size={100} />
            
        </TouchableOpacity>
    );
}
export default IconButton;