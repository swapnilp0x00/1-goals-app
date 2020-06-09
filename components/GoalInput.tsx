import React from 'react';
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";



const GoalInput = (props: any) => {
    const [goal, setGoal] = useState('');
    const goalInputHandler = (text: string) => {
        setGoal(text);
    }

    return (<View style={styles.inputContainer}>
        <TextInput
            placeholder="Enter Goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={goal}
        />
        <Button title="Add" onPress={() => props.onGoalAdd(goal)}></Button>
    </View>)

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        flex: 2,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default GoalInput;