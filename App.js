import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes/routes';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.MainWrapper}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  MainWrapper: {
    flex: 1,
    backgroundColor: '#1687a7',
  },
});

export default App;
