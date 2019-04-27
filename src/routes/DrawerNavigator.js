import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import Home from '../screens/HomeScreen';
import Sidebar from '../components/Sidebar';

const WIDTH = Dimensions.get('window').width;

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home
        }
    },{
        drawerWidth: WIDTH * 0.6,
        initialRouteName: 'Home',
        contentComponent: props => <Sidebar {...props} />
    },

)

export default DrawerNavigator;