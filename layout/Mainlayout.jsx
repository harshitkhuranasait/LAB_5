import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '/Users/harshitkhurana/Downloads/LAB_2 2/layout/header.jsx';
import Footer from '/Users/harshitkhurana/Downloads/LAB_2 2/layout/footer.jsx';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {children}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default Mainlayout;