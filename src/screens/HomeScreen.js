import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, FlatList, Alert, StatusBar } from 'react-native';
import { Root, Container, Header, Text, View, ActionSheet, Content, Left, Right, Card, CardItem, Body, Button, Thumbnail, Icon, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { WaveIndicator } from 'react-native-indicators';


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.onEndReachedCalledDuringMomentum = true;
        this.state = {
            poke: [
                {
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
                    categories: {
                        id: 3,
                        name: 'Flower'
                    },
                    latitude: '-6.301882',
                    longitude: '106.734981'

                },
            ]
        }
    }
    componentDidMount() {
        this.props.getAllPokemon(1)
    }


    loadMore = () => {

        // alert('here')
        this.props.getAllPokemon(this.props.page + 1)
    }

    render() {
        if (!this.props.pokemons) return (<WaveIndicator color="black" size={60} />)
        // alert(this.props.pokemons)
        console.log(this.props.pokemons)

        return (
            <Container>
                <Header style={styles.header} >
                    <Left>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.openDrawer()}>
                            <FontAwesome name="bars" size={24} color='black' />
                        </TouchableOpacity>
                    </Left>
                    <Right>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.navigate('Search')}>
                            <FontAwesome name="search" size={24} color='black' />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={styles.container}>

                    {this.props.pokemons && <FlatList
                        data={this.props.pokemons}
                        renderItem={({ item }) =>
                            (

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {
                                    id: item.id
                                })}>
                                    <Card >
                                        <CardItem cardBody >
                                            <Image source={{ uri: item.image_url }} style={styles.pokeImage} />
                                        </CardItem>
                                        <CardItem bordered>

                                            <View style={styles.containerIcon}>

                                                <Text style={styles.pokeName}>{item.name}</Text>
                                                <FlatList
                                                    data={item.types}
                                                    renderItem={({ item }) => (
                                                        <View style={styles.pokeTypes} >
                                                            <Text> {item.name} </Text>
                                                        </View>
                                                    )}
                                                    keyExtractor={(item, index) => String(item.id)}

                                                />
                                            </View>

                                        </CardItem>
                                        <CardItem>
                                            <Text>{item.categories.kind}</Text>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>

                            )
                        }

                        keyExtractor={(item, index) => String(item.id)}
                        onEndReached={this.loadMore}
                        onEndReachedThreshold={0.5}
                    />}



                </View>
                <Button style={styles.fab} onPress={() => this.props.navigation.navigate('AddPoke')}>
                    <FontAwesome name="plus" size={24} color='white' />
                </Button>
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
    pokeName: { fontSize: 18, fontWeight: 'bold' },
    pokeImage: { height: 200, width: '100%', flex: 1, resizeMode: 'contain', margin: '5%' },
    pokeTypes: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    header: {
        backgroundColor: 'white'
    },
    iconCart: { padding: 12, },
    fab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 30,
        right: 30,
    }
});
