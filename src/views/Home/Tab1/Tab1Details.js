import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Tab1Details extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab1 Details</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Tab1Details;