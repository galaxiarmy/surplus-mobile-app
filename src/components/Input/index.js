import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../utils/color';

const Input = ({
  value,
  onChangeText,
  title,
  placeholder,
  autoCorrect,
  secureTextEntry,
  textContentType,
  setShowPassword,
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
      />
      {textContentType === 'password' && (
        <TouchableOpacity
          onPress={() => {
            setShowPassword(!secureTextEntry);
          }}>
          <Feather
            style={styles.iconEye}
            name={secureTextEntry ? 'eye' : 'eye-off'}
            size={25}
            color="grey"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: colors.LIGHT_GREY,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  iconEye: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 10,
    marginRight: 9,
  },
});
