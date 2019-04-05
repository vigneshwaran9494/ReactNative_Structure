import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../Styles';
import { connect } from 'react-redux';
import { getUserList } from '../../../actions/index';

class Tab1Content extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Tab1",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),
    })

    constructor() {
        super()
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        this.props.callService()
    }

    componentWillReceiveProps(nextProps) {
    
        if (nextProps.data != null) {
            this.setState({
                userList: nextProps.data
            });
        }
    }
    
    render() {
        console.log("userList" + JSON.stringify(this.state.userList))
        return (
            <View style={Styles.container}>
                <Text>Tab1 Settings</Text>
                <Icon name="microchip" size={48} />
                <Button
                    onPress={() => this.props.navigation.navigate("Tab1Details")}
                    title="Go To Details"
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.HomeReducer.isLoading,
    error: state.HomeReducer.error,
    data: state.HomeReducer.data
  });

const mapDispatchToProps = dispatch => {
    return {
        callService: () => dispatch(getUserList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab1Content);