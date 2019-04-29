import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, SafeAreaView, StatusBar, TouchableOpacity, KeyboardAvoidingView, BackHandler } from 'react-native';
import { Toast, Button } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'k@gmail.com',
            password: '123456',
            isLoading: false
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {


        })
    }

    login = () => {
        this.props.loginUser(this.state.email, this.state.password)
        if (this.props.isLoading == false) {
            Toast.show({
                text: 'Welcome back',
                duration: 1500
            })
            this.props.navigation.navigate('App')

        }
    }




    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Spinner
                    visible={this.props.isLoading}
                    textContent={'Logging In...'}
                    textStyle={styles.spinnerTextStyle}
                    color={'black'}
                />
                <StatusBar backgroundColor="#E7E7E7" barStyle="dark-content" />
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}>
                        <View>
                            <Text style={styles.title}>L O G   I N</Text>
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
                                returnKeyType='go'
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password}
                                secureTextEntry
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />
                            <Button block style={styles.buttonLogin} onPress={() => this.login()}>
                                <Text style={styles.buttonText}>Log In</Text>
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
    spinnerTextStyle: {
        color: '#000',
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

