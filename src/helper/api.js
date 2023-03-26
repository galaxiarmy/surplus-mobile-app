import axios from 'axios';

// API for Login with reqres
export const getDataLogin = async (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post('https://reqres.in/api/login', payload);

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

//API weather with 7timer API
export const getDataWeather = async () => {
  try {
    const response = await axios.get(
      'https://www.7timer.info/bin/astro.php?lon=106.8456&lat=6.2088&ac=0&unit=metric&output=json&tzshift=0',
    );

    if (response.status === 200) {
      return response.data.dataseries;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
