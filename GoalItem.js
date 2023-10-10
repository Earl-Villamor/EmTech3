import {StyleSheet, Text, View, } from 'react-native';

function GoalItem(props) {
    return(
        <View style={styles.goalBox}>
          <Text style={styles.goalText}>📌{props.text}</Text>
        </View>
      )
};

export default GoalItem;

const styles = StyleSheet.create({
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
    
      goalText: {
        padding: 5,
        fontSize: 16,
      },
    })