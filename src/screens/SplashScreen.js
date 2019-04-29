import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { getMyValue } from '../storage';

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
        };
        this.performTimeConsumingTask();
    }

    async componentDidMount() {
        const token = await getMyValue('token')
        console.log(token);``
        if (token) {
            this.props.getUserData(token);
        }

    }

    performTimeConsumingTask = async () => {
        setTimeout(
            () => {
                this.props.navigation.navigate('App')
            },
            1000
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <MaterialCommunityIcons name="pokeball" size={86} color='white' />

                    </View>
                </View>
            </View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'black'
    }
});