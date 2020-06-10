import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const GoalItem = (props: { id: string, value: string, onDelete: any}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
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