import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";



const GoalInput = (props: any) => {
    const [goal, setGoal] = useState('');
    const goalInputHandler = (text: string) => {
        setGoal(text);
    }

    const addGoalHandler = () => {
        props.onGoalAdd(goal);
        setGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={goal}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;