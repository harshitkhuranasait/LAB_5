import React from 'react';
import { SafeAreaView, Button, Text} from 'react-native';
import Mainlayout from '../layout/Mainlayout';

const Aboutscreen = ({ navigation }) => {
  const currentDate = new Date().toDateString();

  return (  
    <Mainlayout>
      <SafeAreaView>
        <Text>App Name: Your ToDo App</Text>
        <Text>Author: </Text>
        <Text>Current Date: {currentDate}</Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </SafeAreaView>
    </Mainlayout>
  );
}

export default Aboutscreen;