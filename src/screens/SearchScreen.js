import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Image, Modal, FlatList, Alert, StatusBar } from 'react-native';
import { Item, Container, Header, Label, Text, Input, View, ActionSheet, Content, Left, Right, Card, CardItem, Body, Button, Thumbnail, Icon, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''

        }
    }
    render() {
        return (
            <Container>
                <Header style={styles.header} >
                    <Left style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.goBack()}>
                            <FontAwesome name="chevron-left" size={24} color='black' />
                        </TouchableOpacity>
                        <Input placeholder={'Pokemon name'} />
                    </Left>

                </Header>
                <Content>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    {
                        this.props.pokemons && <FlatList
                            data={this.props.pokemons}
                            renderItem={({ item }) =>
                                (
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {
                                        id: item.id
                                    })}>
                                        <Card >
                                            <CardItem cardBody >
                                                <Image source={{ uri: item.image_url }} style={{ height: 200, width: '100%', flex: 1, resizeMode: 'contain' }} />
                                            </CardItem>
                                            <CardItem bordered>
                                                <View style={styles.containerIcon}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                                </View>

                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>
                                )
                            }
                            keyExtractor={(item, index) => String(item.id)}
                        />
                    }
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
