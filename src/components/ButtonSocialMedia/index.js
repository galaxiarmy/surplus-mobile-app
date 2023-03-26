import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../utils/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Gap from '../Gap';

const ButtonSocialMedia = ({title, onPress, name, color}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <AntDesign name={name} size={20} color={color} />
      <Gap width={6} />
      <Text style={styles.titleSosmed}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSocialMedia;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.LIGHT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: 120,
  },
  titleSosmed: {
    fontWeight: 'bold',
    color: colors.BLACK,
  },
});
