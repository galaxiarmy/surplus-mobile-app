import React, {useEffect} from 'react';
import Navigation from './navigation/navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return <Navigation />;
};

export default App;
