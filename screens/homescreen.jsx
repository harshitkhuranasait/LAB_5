import React from 'react';
import { SafeAreaView, Button} from 'react-native'; 
import Mainlayout from '../layout/Mainlayout';
import ToDoList from '/Users/harshitkhurana/Downloads/LAB_2 2/component/ToDoList.js';

const homescreen = ({ navigation }) => {
  const tasks = ["Do laundry", "Go for a walk", "Walk the dog"];

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} /> 
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default homescreen;