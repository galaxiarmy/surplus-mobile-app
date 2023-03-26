import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/color';
import {HeaderLogin} from '../../assets';
import Input from '../../components/Input';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import WidthOr from '../../components/WidthOr';
import ButtonSocialMedia from '../../components/ButtonSocialMedia';
import {getDataLogin} from '../../helper/api';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const getAlert = () => {
    Alert.alert('INFORMASI', 'Sedang Tahap Development', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const errorLogin = () => {
    Alert.alert('INFORMASI', 'Email dan password salah.', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const login = async (emails, passwords) => {
    const isLogin = await getDataLogin(emails, passwords);

    if (isLogin) {
      navigation.navigate('Home');
    } else {
      errorLogin();
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={HeaderLogin} style={styles.header}>
        <View>
          <Text style={styles.titleMasuk}>Masuk</Text>
          <Text style={styles.titleBody}>Pastikan kamu sudah pernah</Text>
          <Text style={styles.titleBody}>membuat akun Surplus</Text>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <Input
          value={email}
          onChangeText={e => {
            setEmail(e);
          }}
          placeholder={'Alamat email kamu'}
          title={'E-mail'}
        />
        <Gap height={12} />
        <Input
          value={password}
          onChangeText={e => {
            setPassword(e);
          }}
          placeholder={'Masukkan Kata Sandi'}
          title={'Password'}
          autoCorrect={false}
          secureTextEntry={showPassword}
          textContentType="password"
          type="password"
          setShowPassword={setShowPassword}
        />
        <Gap height={6} />
        <TouchableOpacity onPress={getAlert}>
          <Text style={styles.titleForgotPassword}>Lupa kata Sandi?</Text>
        </TouchableOpacity>
        <Gap height={12} />
        <Button
          onPress={() => {
            login(email, password);
          }}
          title="Masuk"
          styles={styles.button}
          stylesTitle={styles.titleButton}
        />
        <Gap height={16} />
        <WidthOr />
        <Gap height={16} />
        <View style={styles.containerSosmed}>
          <ButtonSocialMedia
            name="facebook-square"
            title="Facebook"
            color="#3b5998"
            onPress={getAlert}
          />
          <ButtonSocialMedia
            name="google"
            title="Google"
            color="#dd4b39"
            onPress={getAlert}
          />
        </View>
        <Gap height={14} />
        <View style={styles.containerFooter}>
          <Text style={styles.footerTitle}>Belum Punya Akun?</Text>
          <TouchableOpacity onPress={getAlert}>
            <Text style={styles.registerTitle}> Yuk Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.GREEN,
  },
  header: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 3,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  titleMasuk: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.WHITE,
    paddingBottom: 6,
  },
  titleBody: {
    fontSize: 12,
    color: colors.WHITE,
  },
  titleForgotPassword: {
    fontSize: 12,
    color: colors.LIGHT_GREY,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  containerSosmed: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerTitle: {
    fontSize: 12,
    color: colors.BLACK,
  },
  registerTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.GREEN,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: colors.GREEN,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  titleButton: {
    fontWeight: 'bold',
    color: colors.WHITE,
  },
});
