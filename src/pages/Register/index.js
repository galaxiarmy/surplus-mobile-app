import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/color';
import {HeaderRegister} from '../../assets';
import Button from '../../components/Button';
import Gap from '../../components/Gap';

const Register = ({navigation}) => {
  const getAlert = () => {
    Alert.alert('INFORMASI', 'Sedang Tahap Development', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.header} source={HeaderRegister}>
        <View style={styles.containerHeader}>
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.titleButton}>Lewati</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.titleFooter}>Selamat Datang di Surplus</Text>
        <Gap height={6} />
        <View>
          <Text style={styles.bodyFooter}>
            Selamatkan makanan berlebih di Aplikasi
          </Text>
          <Text style={styles.bodyFooter}>
            Surplus agar tidak terbuang sia-sia
          </Text>
        </View>
        <Gap height={20} />

        <Button
          styles={styles.button}
          stylesTitle={styles.titleRegister}
          onPress={() => {
            getAlert();
          }}
          title="Daftar"
        />
        <Gap height={12} />

        <Button
          styles={styles.buttonLogin}
          stylesTitle={styles.titleLogin}
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Sudah punya akun? Masuk"
        />
        <Gap height={20} />

        <View>
          <Text style={styles.titlePrivacy}>
            Dengan daftar atau masuk, Anda menerima{' '}
            <Text style={styles.titleLink}>syarat dan ketentuan</Text> serta{' '}
            <Text>kebijakan privasi</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREEN,
  },
  header: {
    flex: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  footer: {
    flex: 2,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  buttonHome: {
    color: colors.GREEN,
    borderWidth: 1.5,
    borderColor: colors.GREEN,
    borderRadius: 16,
    padding: 6,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    alignItems: 'flex-end',
  },
  titleButton: {
    fontSize: 12,
    color: colors.GREEN,
  },
  titleFooter: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.BLACK,
  },
  bodyFooter: {
    fontSize: 12,
    textAlign: 'center',
  },
  titlePrivacy: {
    fontSize: 12,
    textAlign: 'center',
  },
  titleLink: {
    fontSize: 12,
    color: colors.ORANGE,
  },
  button: {
    backgroundColor: colors.GREEN,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  titleRegister: {
    fontWeight: 'bold',
    color: colors.WHITE,
  },
  buttonLogin: {
    borderColor: colors.GREEN,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
  },
  titleLogin: {
    fontWeight: 'bold',
    color: colors.GREEN,
  },
});
