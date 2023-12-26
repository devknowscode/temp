import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './screens';
import {navigator} from './utils/navigation';
import {AuthProvider} from './auth';
import {NativeBaseProvider} from 'native-base';

function Content(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeAreaView style={styles.safeView}>
        <NavigationContainer ref={navigator}>
          <Screens />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

function App(): React.JSX.Element {
  useEffect(() => {
    console.log('App mounted');
  });

  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Content />
      </AuthProvider>
    </NativeBaseProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  safeView: {flex: 1},
});
