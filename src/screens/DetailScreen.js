import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, FlatList, Alert, StatusBar } from 'react-native';
import { Root, Container, Header, Text, View, ActionSheet, Content, Left, Right, Card, CardItem, Body, Button, Thumbnail, Icon, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: -7.271938,
                longitude: 106.755602,
                latitudeDelta: 0.0003, // width
                longitudeDelta: 0.0003 // height
            },
            marker: {
                latitude: -7.271938,
                longitude: 106.755602
            },
            poke: {
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
                latitude: -6.301882,
                longitude: 106.734981,
                latitudeDelta: 0.0003, // width
                longitudeDelta: 0.0003 // height

            }
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />
                    <View style={styles.container}>
                        <Card>
                            <CardItem cardBody >
                                <Image source={{ uri: this.state.poke.image_url }} style={{ height: 200, width: null, flex: 1, resizeMode: 'contain' }} />
                            </CardItem>
                            <CardItem bordered>

                                <View style={styles.containerIcon}>

                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.state.poke.name}</Text>
                                    <FlatList
                                        data={this.state.poke.type}
                                        renderItem={({ item }) => (
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} >
                                                <Text> {item.name} </Text>
                                            </View>
                                        )}
                                        keyExtractor={(item, index) => String(item.id)}

                                    />
                                </View>

                            </CardItem>
                            <CardItem>
                                <Text>{this.state.poke.category.name}</Text>
                            </CardItem>
                        </Card>

                        <MapView
                            style={{ width: '100%', height: 220 }}
                            region={{
                                latitude: this.state.poke.latitude,
                                longitude: this.state.poke.longitude,
                                longitudeDelta: this.state.poke.longitudeDelta,
                                latitudeDelta: this.state.poke.latitudeDelta
                            }}

                        >
                            <Marker
                                coordinate={{
                                    latitude: this.state.poke.latitude,
                                    longitude: this.state.poke.longitude
                                }}
                                title={this.state.poke.name}
                            />

                        </MapView>

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
