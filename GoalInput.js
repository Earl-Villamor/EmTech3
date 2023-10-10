import { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };
    
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

    return(
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.textinput}
            placeholder='Your Course Goal!'
            placeholderTextColor={'#A6A2A2'}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />

            <Button
            title="Add Goal"
            color="#67697c"
            onPress={props.onAddGoal}
            />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#A6A2A2',
        flex: 1,
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

    })