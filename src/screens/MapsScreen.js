import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const { height, width } = Dimensions.get('window');

export default class MapsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

            region: {
                latitude: -6.301882,
                longitude: 106.734981,
                latitudeDelta: 0.0003, // width
                longitudeDelta: 0.0003 // height
            },
        }
    }

    // componentDidMount() {
    //     this.props.navigation.addListener('didFocus', () => {
    //         this.props.getAllPokemonMaps()
    //     })
    // }

    rederMaps(){
        let data = []
        Object.keys(this.props.pokemons).forEach(val => {
            if (val < Object.keys(this.props.pokemons).length - 1) {
                
                data.push(this.props.pokemons[val])
            }
        })
        return data
    }


    render() {
        const pokeMaps = Object.keys(this.props.pokemons).map((v) => this.props.pokemons[v])
        // alert(JSON.stringify(pokeMaps));
        return (
            <View style={styles.container}>
                {console.log(pokeMaps)}
                {this.props.pokemons && <MapView
                    style={{ width: '100%', height: height }}
                    showsUserLocation={true}
                    region={this.state.region}
                >
                    
                    { this.rederMaps().map(marker => (
                        // console.log(marker.latitude)                        
                        <MapView.Marker
                            key={marker.id}
                            coordinate={{ latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }}
                            title={marker.name}
                            onPress={() => this.props.navigation.navigate('Detail', {
                                id: marker.id
                            })}
                        ><Image source={{ uri: marker.image_url }} style={{ width: 40, height: 40 }} />
                        </MapView.Marker>
                    ))}

                </MapView>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },

});
