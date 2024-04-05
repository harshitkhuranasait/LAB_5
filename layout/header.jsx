import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My To Do App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default header;