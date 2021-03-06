import React from 'react';

import {View, Text, StyleSheet} from 'react-native'
import { Touchable, TouchableOpacity } from 'react-native-web';

const GoalItem = props => {
    return (
        <TouchableOpacity acticeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem;