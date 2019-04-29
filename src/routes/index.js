import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Drawer from './DrawerNavigator'
import Detail from '../screens/DetailContainers'
import Join from '../screens/JoinScreen'
import Login from '../screens/LoginContainers'
import Register from '../screens/RegisterContainers'
import Maps from '../screens/MapsContainers'
import Splash from '../screens/SplashContainers'
import Account from '../screens/AccountContainers'
import Search from '../screens/SearchScreen'
import AddPoke from '../screens/AddPokemonContainers'

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
                header: null
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                title: 'Me'
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                header: null
            }
        },
        AddPoke: {
            screen: AddPoke,
            navigationOptions: {
                title: 'Add New Pokemon'
            }
        },
    },
    {
        initialRouteName: 'Home'
    }
);
const rootStack = createSwitchNavigator(
    {
        Splash: {
            screen: Splash,
            navigationOptions: {
                header: null
            }
        },

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
        initialRouteName: 'Splash'
    }
);


export default rootStack;