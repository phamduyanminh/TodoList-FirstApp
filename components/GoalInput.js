import React, {useState} from 'react';
import{View, Text, Button, StyleSheet} from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (inputText) => {
        setEnteredGoal(inputText)
    }

    return (
        <View style={style.inputContainer}>
            <TextInput 
            placeholder="Course Goals" 
            style={style.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}/>
            <Button title="Add" onPress={props.onAddGoal}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    
    input: {
        padding: '10px',
        boderBottomColor: 'black',
        borderBottomWidth: '1px'
    },
})

export default GoalInput;