import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions, StyleSheet } from 'react-native'

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
            marker: {
                latitude: -7.271938,
                longitude: 106.755602
            },
            poke: [
                {
                    id: 1,
                    name: "Bulbasaur",
                    latitude: -6.301882,
                    longitude: 106.734981

                },
                {
                    id: 2,
                    name: "Charmander",
                    latitude: -6.308882,
                    longitude: 106.734981

                },
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={{ width: '100%', height: height }}
                    showsUserLocation={true}
                    region={this.state.region}

                >
                    {this.state.poke.map(marker => (
                        
                        <Marker
                            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                            title={marker.title}
                            onPress={() => this.props.navigation.navigate('Detail')}
                        />
                    ))}

                </MapView>
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
