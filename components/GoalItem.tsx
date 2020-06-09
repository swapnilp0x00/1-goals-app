import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const GoalItem = (props: {value: string}) => {
    return (<View style={styles.listItem}>
        <Text>{props.value}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
export default GoalItem;