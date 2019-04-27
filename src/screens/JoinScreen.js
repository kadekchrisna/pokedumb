import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Button, Container, Content } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1.5, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', }}>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', }}>
                        <FontAwesome name="exclamation" size={72} color='white' />
                        <FontAwesome name="question" size={72} color='white' />
                    </View>
                </View>
                <View style={{ flex: 0.4, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', fontFamily: 'ubuntu', }}> !Hoax </Text>
                    <Text style={{ fontSize: 14, color: '#CECECE', marginTop: 6, fontFamily: 'ubuntu' }}> Join and give your opinion about what is going on. </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 22, }}>
                    <Button style={{ marginHorizontal: 6, paddingHorizontal: 8, }} onPress={() => this.props.navigation.navigate('Register')}> 
                        <Text>SIGN UP</Text>
                    </Button>
                    <Button style={{ marginHorizontal: 6, paddingHorizontal: 8, backgroundColor: '#313131' }} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{ color: 'white' }}> LOG IN </Text>
                    </Button>
                </View>
                <View style={{ flex: 0.1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ fontSize: 12, color: '#CECECE', marginBottom: 16, fontFamily: 'ubuntu' }}> Not now </Text>
                    </TouchableOpacity>
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