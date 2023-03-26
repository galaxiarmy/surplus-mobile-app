import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/color';

const WidthOr = () => {
  return (
    <View style={styles.container}>
      <View style={styles.width} />
      <View>
        <Text style={styles.title}>Atau</Text>
      </View>
      <View style={styles.width} />
    </View>
  );
};

export default WidthOr;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  width: {
    flex: 1,
    height: 1,
    backgroundColor: colors.LIGHT_GREY,
  },
  title: {
    width: 50,
    textAlign: 'center',
    fontSize: 12,
  },
});
