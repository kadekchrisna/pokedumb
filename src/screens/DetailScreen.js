import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, FlatList, Alert, StatusBar, Dimensions } from 'react-native';
import { Root, Container, Header, Text, View, ActionSheet, Content, Left, Right, Card, CardItem, Body, Button, Thumbnail, Icon, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { WaveIndicator } from 'react-native-indicators';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const height = Dimensions.get('window').height / 2;

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poke: {
                latitudeDelta: 0.0003, // width
                longitudeDelta: 0.0003 // height

            }
        }
    }
    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            const id = this.props.navigation.getParam('id', '');
            this.props.getPokemon(id);
        })
    }
    _onMarkerPress(mkr) {
        alert(JSON.stringify(mkr.nativeEvent.coordinate));
    }

    render() {
        if (!this.props.pokemon) return (<Text>Loading...</Text>)

        const { id, created_at, name, image_url, categories, type } = this.props.pokemon
        const lat = this.props.pokemon.latitude
        const long = this.props.pokemon.longitude
        return (
            <Container>
                <Content>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />
                    <View style={styles.container}>
                        <Card>
                            <CardItem header bordered>
                                <Left>
                                    <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.openDrawer()}>
                                        <FontAwesome name="pencil-square-o" size={24} color='black' />
                                    </TouchableOpacity>
                                </Left>
                                <Right>
                                    <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.navigate('Search')}>
                                        <FontAwesome name="trash" size={24} color='black' />
                                    </TouchableOpacity>
                                </Right>
                            </CardItem>
                            <CardItem cardBody >
                                <Image source={{ uri: image_url }} style={{ height: 200, width: null, flex: 1, resizeMode: 'contain', margin: '5%' }} />
                            </CardItem>
                            <CardItem bordered>

                                <View style={styles.containerIcon}>

                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
                                    <FlatList
                                        data={type}
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
                                <Text>{this.props.pokemon.categories && this.props.pokemon.categories.kind}</Text>
                            </CardItem>
                        </Card>
                        {
                            this.props.pokemon.latitude && <MapView
                                style={{ width: '100%', height: height }}
                                region={{
                                    latitude: parseFloat(lat),
                                    longitude: parseFloat(long),
                                    longitudeDelta: this.state.poke.longitudeDelta,
                                    latitudeDelta: this.state.poke.latitudeDelta
                                }}

                            >
                                <MapView.Marker
                                    draggable
                                    coordinate={{
                                        latitude: parseFloat(lat),
                                        longitude: parseFloat(long)
                                    }}
                                    title={this.props.pokemon.name}
                                    // onPress={this._onMarkerPress.bind(this)}
                                    onDragEnd={this._onMarkerPress.bind(this)}
                                ><Image source={{ uri: image_url }} style={{ width: 40, height: 40 }} /></MapView.Marker>

                            </MapView>

                        }

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
