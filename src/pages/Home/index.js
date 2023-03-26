import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getDataWeather} from '../../helper/api';
import {colors} from '../../utils/color';

const Home = () => {
  const [dataWeather, setDataWeather] = useState([]);
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const data = await getDataWeather();

    setDataWeather(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Data Cuaca Jakarta</Text>
      {dataWeather.length > 0 ? (
        <ScrollView>
          {dataWeather &&
            dataWeather.length > 0 &&
            dataWeather.map((value, i) => {
              return (
                <View style={styles.containerWeather} key={i}>
                  <Text>Waktu : {`${i}:00`}</Text>
                  <Text>Kondisi cuaca : {value.prec_type}</Text>
                  <Text>Suhu : {value.temp2m} C</Text>
                </View>
              );
            })}
        </ScrollView>
      ) : (
        <View style={styles.containerLoading}>
          <View style={styles.loading}>
            <Text>Loading...</Text>
            <ActivityIndicator size={'large'} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.WHITE,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.BLACK,
  },
  containerWeather: {
    padding: 12,
    borderWidth: 1,
    borderColor: colors.BLACK,
    marginTop: 8,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    display: 'flex',
    flexDirection: 'row',
  },
});
