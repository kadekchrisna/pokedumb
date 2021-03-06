import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, SafeAreaView, StatusBar, TouchableOpacity, KeyboardAvoidingView, BackHandler } from 'react-native';
import { Button, Toast } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'light',
            email: 'l@gmail.com',
            password: '123456',
            confPassword: '123456',
            isLoading: false
        };
    }


    onValidate = () => {
        if (this.state.password === this.state.confPassword) {
            this.props.registerUser(this.state.username, this.state.email, this.state.password) 
            Toast.show({
                text: 'Hi and Welcome',
                duration: 1500
            })
            return this.props.navigation.navigate('App')
                      
        }
        return Alert.alert('Password and confirmation password must be same!')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Spinner
                    visible={this.props.isLoading}
                    textContent={'Signing you up...'}
                    textStyle={styles.spinnerTextStyle}
                    color={'black'}
                />
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}>
                        <View>
                            <Text style={styles.title}>S I G N    U P</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({ username: text })}
                                value={this.state.username}
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password}
                                returnKeyType='next'
                                secureTextEntry
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({ confPassword: text })}
                                value={this.state.confPassword}
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />
                            <Button block style={styles.buttonLogin} onPress={() => this.onValidate()}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </Button>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    input: {
        height: 40,
        backgroundColor: 'rgba(128,128,128,0.2)',
        color: '#000',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 40,
        paddingHorizontal: 10,
        fontFamily: 'ubuntu',
        color: 'black',

    },
    buttonLogin: {
        backgroundColor: '#313131',
        paddingVertical: 10
    },
    buttonRegister: {
        backgroundColor: '#009C71',
        paddingHorizontal: 15,
        paddingVertical: 10

    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    container: {
        flex: 1,
        paddingHorizontal: 6,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
});

