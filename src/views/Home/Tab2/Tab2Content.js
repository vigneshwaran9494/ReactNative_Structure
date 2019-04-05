import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../Styles';

class Tab2 extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Tab2",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),

    })

    render() {
        return (
            <View style={Styles.container}>
                <Text>Tab2 Settings</Text>
                <Icon name="memory" size={48} />

            </View>
        );
    }
}

export default Tab2;