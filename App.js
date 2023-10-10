import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList, ImageBackground } from 'react-native';
export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [backgroundImage] = useState(require("./assets/Seele.jpg"));
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText,]);
    setEnteredGoalText('');
  }
  return (
    <ImageBackground source={backgroundImage} style={styles.appContainer}>
      <View style={styles.appContainer}>
        <View>
          <Text style={styles.headertitle}>📃Course Goal List</Text>
        </View>

       <View style={styles.inputContainer}>
          <TextInput
           style={styles.textinput}
            placeholder="Your Course Goal!"
            placeholderTextColor="#A6A2A2"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <Button title="Add Goal" color="#67697c" onPress={addGoalHandler} />
        </View>
      

       <View style={styles.goalsContainer}>
         <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <View style={styles.goalBox}>
              <Text style={styles.goalText}>📌{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //ability to adjust to the resolution
    paddingTop: 50,
    paddingHorizontal: 16,  
    textinputwidth: '70%',
    padding: 13,
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row', //cell format
    justifyContent: 'space-between',
    alignItems: 'center', //object position
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },

  textinput: {
    borderWidth: 2,
    borderColor: '#A6A2A2',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textInput:{
    flex: 1,
    borderWidth: 2,
    borderColor: '#cccccc',
    color: '#cccccc',
    width: '80%',
    marginRight: 12, //I wanted a matching height of the button
    padding: 6,
  },
  goalsContainer:{
    flex: 5
  },
  
  goalBox: {
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 5,
    marginVertical: 5,
  },

});