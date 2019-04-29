import React, { Component } from 'react'
import { Text, View, StatusBar, Dimensions, FlatList } from 'react-native'
import { Toast, Container, Header, Content, Form, Item, Input, Picker, Label, Icon, Card, Button } from 'native-base';
import MultiSelect from 'react-native-multiple-select';
import MapView from 'react-native-maps';

import { getMyValue } from '../storage';


const height = Dimensions.get('window').height / 2;

export default class AddPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {

            poke: {
                latitude: -6.314892,
                longitude: 106.737981,
                latitudeDelta: 0.0003, // width
                longitudeDelta: 0.0003 // height

            },
            selected2: 1,
            selectedItems: [],
            name: '',
            image: '',
            latitude: '-6.314892',
            longitude: '106.737981',
        };

    }

    componentDidMount() {
        this.props.getAllCategories()
        this.props.getAllType()
    }

    async newPokemon() {
        const token = await getMyValue('token')
        console.log(token); ``
        if (token) {
            if (this.state.name == '' || this.state.image == '' || this.state.selectedItems.length < 1 || this.state.longitude == '' || this.state.latitude == '' || this.state.selected2 === undefined) {
                alert('Please check the form and try again.')
            }
            this.props.addPokemon(this.state.name, this.state.image, this.state.selectedItems, this.state.longitude, this.state.latitude, this.state.selected2, token)
            Toast.show({
                text: 'New Pokemon added',
                duration: 1500
            })
            this.props.navigation.navigate('Home')
        }

    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    _onMarkerPress(mkr) {
        alert(JSON.stringify(mkr.nativeEvent.coordinate));
        this.setState({
            latitude: mkr.nativeEvent.coordinate.latitude,
            longitude: mkr.nativeEvent.coordinate.longitude,
        })
    }
    render() {
        if (this.props.isLoading || !this.props.categories || !this.props.types) {
            return (<Text>Loading....</Text>);
        }
        // alert(JSON.stringify(this.props.categories))
        return (
            <Container>
                <Content>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />

                    <Form>
                        <Card style={{ margin: "5%", padding: '2%' }}>
                            <Item >
                                <Input placeholder={'Pokemon name'} onChangeText={(text) => this.setState({ name: text })} />
                            </Item>
                            <Item >
                                <Input placeholder={'Image URL'} onChangeText={(text) => this.setState({ image: text })} />
                            </Item>
                            <Item>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Category"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >

                                    {this.props.categories[1] && this.props.categories.map(val => (
                                        <Picker.Item key={val.id} label={val.kind} value={val.id} />
                                    ))}

                                    {/* <Picker.Item label='Select Category' value={null} /> */}

                                </Picker>
                            </Item>
                            <Item style={{ flex: 1, }}>
                                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }}>

                                    <MultiSelect
                                        hideTags
                                        items={this.props.types}
                                        uniqueKey="id"
                                        ref={(component) => { this.multiSelect = component }}
                                        onSelectedItemsChange={this.onSelectedItemsChange}
                                        selectedItems={this.state.selectedItems}
                                        selectText="Types"
                                        searchInputPlaceholderText="Search Items..."
                                        onChangeInput={(text) => console.log(text)}
                                        altFontFamily="ProximaNova-Light"
                                        tagRemoveIconColor="#CCC"
                                        tagBorderColor="#CCC"
                                        tagTextColor="#CCC"
                                        selectedItemTextColor="black"
                                        selectedItemIconColor="black"
                                        itemTextColor="#000"
                                        displayKey="name"
                                        searchInputStyle={{ color: 'black' }}
                                        submitButtonColor="black"
                                        submitButtonText="Submit"
                                    />


                                </View>
                            </Item>
                            <View>

                                {this.multiselect
                                    ?
                                    this.multiselect.getSelectedItemsExt(selectedItems)
                                    :
                                    null}
                            </View>
                        </Card>
                    </Form>
                    <Card>

                        <MapView
                            style={{ width: '100%', height: height }}
                            region={this.state.poke}

                        >
                            <MapView.Marker
                                draggable
                                coordinate={this.state.poke}
                                onDragEnd={this._onMarkerPress.bind(this)}
                            />

                        </MapView>
                    </Card>
                    <Card>
                        <Button block style={{ backgroundColor: 'black' }} onPress={() => this.newPokemon()}>
                            <Text style={{ color: 'white' }}>Save</Text>
                        </Button>
                    </Card>
                </Content>
            </Container>
        )
    }
}
