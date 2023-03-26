import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, onPress, styles, stylesTitle, disabled}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles}>
      <Text style={stylesTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
