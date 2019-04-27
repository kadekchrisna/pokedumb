import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, FlatList, Alert, StatusBar } from 'react-native';
import { Root, Container, Header, Text, View, ActionSheet, Content, Left, Right, Card, CardItem, Body, Button, Thumbnail, Icon, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poke: [{
                id: 1,
                name: "Bulbasaur",
                image_url: "https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png",
                type: [
                    {
                        id: 13,
                        name: "Grass"
                    }, {
                        id: 23,
                        name: "Poison"
                    }],
                category: {
                    id: 3,
                    name: 'Flower'
                },
                latitude: '-6.301882',
                longitude: '106.734981'

            }]
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} >
                    <Left>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.openDrawer()}>
                            <FontAwesome name="bars" size={24} color='black' />
                        </TouchableOpacity>
                    </Left>
                    <Right>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.navigate('AddPost')}>
                            <FontAwesome name="plus" size={24} color='black' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconCart} onPress={() => alert('search')}>
                            <FontAwesome name="search" size={24} color='black' />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />
                    <View style={styles.container}>

                        <FlatList
                            data={this.state.poke}
                            renderItem={({ item }) =>
                                (   
                                
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {
                                    id: item.id
                                })}>
                                    <Card >
                                        <CardItem cardBody >
                                            <Image source={{ uri: item.image_url }} style={{ height: 200, width: null, flex: 1, resizeMode: 'contain' }} />
                                        </CardItem>
                                        <CardItem bordered>

                                            <View style={styles.containerIcon}>

                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                                <FlatList
                                                    data={item.type}
                                                    renderItem={({ item }) => (
                                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                                            <Text> {item.name} </Text>
                                                        </View>
                                                    )}
                                                    keyExtractor={(item, index) => String(item.id)}

                                                />
                                            </View>

                                        </CardItem>
                                        <CardItem>
                                            <Text>{item.category.name}</Text>
                                        </CardItem>
                                    </Card>
                                    </TouchableOpacity>

                                )
                            }
                            keyExtractor={(item, index) => String(item.id)}
                        />

                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 4,
    },
    containerIcon: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 4,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    header: {
        backgroundColor: 'white'
    },
    iconCart: { padding: 12, },
});
