import { Navigation } from '@src/navigation';
import store from '@src/store';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import { Provider } from 'react-redux';

function App() {


  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Provider store={store}> 
        <Navigation 
        /> 
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
