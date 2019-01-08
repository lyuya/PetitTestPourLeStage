import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab} from 'native-base';
import { createStackNavigator,createDrawerNavigator} from 'react-navigation';
import List from './components/List';
import Menu from './components/Menu';
import Boissons from './components/Boissons';
import Sandwiches from './components/Sandwiches';
import Snacks from './components/Snacks';
import SideMenu from "./components/Sidemenu";

navigationOptions = {
    title: 'Home',
    headerTintColor: '#327d84',
    headerStyle: {
        backgroundColor: '#2F95D6',
        borderBottomColor: '#327d84',
        borderBottomWidth: 3,
    },
    headerTitleStyle: {
        fontSize: 18,
    },
};
export default createDrawerNavigator({
    List: {
        screen: List
    },
    Menu: {
        screen: Menu
    },
    Boissons: {
        screen: Boissons
    },
    Sandwiches: {
        screen: Sandwiches
    },
    Snacks: {
        screen: Snacks
    },

}, {
    contentComponent: SideMenu,
    drawerWidth: 300
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#327d84',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
