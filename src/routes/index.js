import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Drawer from './DrawerNavigator'
import Detail from '../screens/DetailScreen'
import Join from '../screens/JoinScreen'
import Login from '../screens/LoginScreen'
import Register from '../screens/RegisterScreen'
import Maps from '../screens/MapsScreen'

const authStack = createStackNavigator(
    {
        Join: {
            screen: Join,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Welcome Back!'
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: 'Join PokeDumb'
            }
        },

    },
    {
        initialRouteName: 'Join'
    }
);
const appStack = createStackNavigator(
    {
        Home: {
            screen: Drawer,
            navigationOptions: {
                header: null
            }
        },
        Maps: {
            screen: Maps,
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                title: 'Post'
            }
        },
    },
    {
        initialRouteName: 'Home'
    }
);
const rootStack = createStackNavigator(
    {

        App: {
            screen: appStack,
            navigationOptions: {
                header: null
            }
        },
        Auth: {
            screen: authStack,
            navigationOptions: {
                header: null
            }
        },

    },
    {
        initialRouteName: 'App'
    }
);


export default rootStack;