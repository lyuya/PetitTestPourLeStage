import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import List from "./List";
import Boissons from './Boissons';
import Sandwiches from './Sandwiches';
import Snacks from './Snacks';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Tout
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle}
                                  onPress={this.navigateToScreen('List')}>
                                Tout
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Type
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Boissons')}>
                                Boissions
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Sandwiches')}>
                                Sandwiches
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Snacks')}>
                                Snacks
                            </Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;