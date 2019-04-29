import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Container, Content } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { WaveIndicator } from 'react-native-indicators';

import { getMyValue, removeValue } from '../storage';

export default class Account extends Component {

    componentDidMount() {

        this.props.navigation.addListener('didFocus', () => {
            if (this.props.isLoggedIn === false) {
                this.props.navigation.navigate('Auth')
            }
            else {
                // console.log('---',this.props.token);
                this.checkToken();

                // console.log(token);
            }
        })


    }

    checkToken = async () => {
        const token = await getMyValue('token')
        if (token) {
            this.props.getUserData(token);
        }
    }
    logout = () => {
        this.props.clearUser()
        removeValue('token')
        this.props.navigation.navigate('Home')

    }
    confirm() {
        Alert.alert(
            'Logging Out?',
            'Please press OK to continue.',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this.logout() },
            ],
            { cancelable: false },
        );
    }

    render() {

        if (!this.props.user) return (<WaveIndicator color="black" size={60} />)

        const { id, username, email } = this.props.user

        return (
            <Container>
                <Content>
                    <StatusBar backgroundColor="black" barStyle="dark-content" />
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.iconCart} onPress={() => this.confirm()}>
                                <FontAwesome name="power-off" size={24} color='white' />
                            </TouchableOpacity>
                        </View>
                        <Image style={styles.avatar} source={{ uri: 'https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-business-men-icon-png-image_924862.jpg' }} />
                        <View style={styles.body}>
                            <View style={styles.bodyContent}>
                                <Text style={styles.name}>{username}</Text>
                                <Text style={styles.description}>{email}</Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'flex-start',
        position: 'absolute',
        marginHorizontal: 10,
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 30,

    },
    bodyContent: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 30,
    },
    bodyIcons: {
        flex: 1,
        paddingHorizontal: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 6,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "black",
    },
    iconCart: { padding: 16, },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,
    },
});
