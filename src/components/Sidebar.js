import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Button, Thumbnail } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


// import {getMyValue} from '../storages'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    // componentDidMount() {
    //     this.props.navigation.addListener('didFocus', () => {
    //         this.props.getAllCategories()
    //     })

    // }
    // renderLogin = () => {
    //     if (this.props.isLoggedIn) {
    //         const { username, pp } = this.props.user

    //         return (
    // <TouchableOpacity style={styles.listIcons} onPress={() => this.props.navigation.navigate('Account')}>
    //     <Thumbnail style={{ width: 30, height: 30, }} source={{ uri: `${BASE_IMAGE_URL}profile/${pp}` }} />
    //     <Text style={styles.nameIcons}>{username}</Text>
    // </TouchableOpacity>
    //         )
    //     } else {

    //         return (
    //             <TouchableOpacity style={styles.listIcons} onPress={() => { this.props.navigation.navigate('Auth') }}>
    //                 <Thumbnail square style={{ width: 30, height: 30, }} source={{ uri: `${BASE_IMAGE_URL}profile/thumbpp.jpg` }} />
    //                 <Text style={styles.nameIcons}>Sign In</Text>
    //             </TouchableOpacity>
    //         )
    //     }

    // }


    render() {
        return (
            <Container>
                <Content>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: 16, }}>
                        <TouchableOpacity style={styles.listIcons} onPress={() => this.props.navigation.navigate('Auth')}>
                            <Thumbnail style={{ width: 30, height: 30, }} source={{ uri: 'https://www.pinclipart.com/picdir/big/181-1814767_person-svg-png-icon-free-download-profile-icon.png' }} />
                            <Text style={styles.nameIcons}>Username</Text>
                        </TouchableOpacity>
                        <View
                            style={styles.hrLine}
                        />
                        <TouchableOpacity style={styles.listIcons}>
                            <FontAwesome name="home" size={22} color='black' />
                            <Text style={styles.nameIcons}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listIcons} onPress={() => this.props.navigation.navigate('Maps')}>
                            <FontAwesome name="map-marker" size={22} color='black' />
                            <Text style={styles.nameIcons}>Maps</Text>
                        </TouchableOpacity>
                        <View
                            style={styles.hrLine}
                        />
                        <View style={{ paddingBottom: '2%', }}>
                            <Text>Types</Text>
                        </View>

                        <TouchableOpacity style={styles.listIcons}>
                            <FontAwesome name="home" size={22} color='black' />
                            <Text style={styles.nameIcons}>Home</Text>
                        </TouchableOpacity>
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
        backgroundColor: "black",
        height: 120,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginHorizontal: 20,
        marginTop: 70
    },
    body: {
        marginTop: 30,

    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    bodyIcons: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    listIcons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: '1%',
    },
    nameIcons: {
        fontSize: 16,
        color: "black",
        marginHorizontal: 16,
    },
    name: {
        fontSize: 20,
        color: "black",
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
        backgroundColor: "#009C71",
    },
    iconCart: { padding: 16, },
    hrLine: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 0.4,
        marginVertical: '10%',
        width: '100%'
    },
});
