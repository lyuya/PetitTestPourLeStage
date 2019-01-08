
import React, {Component} from 'react';
import Button from 'react-native-button';
import { Container, Header, Content, Footer, FooterTab, Left, Icon, Body, Title, Right} from 'native-base';
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }
    render() {
        if (this.state.loading){
            return <AppLoading />;
        }return(


            <View>
                <Footer>
                    <Body>
                    <Button transparent
                            style={styles.button}
                            onPress={() => {
                                Alert.alert('You tapped the button!');
                            }}>PAY</Button>
                    </Body>
                </Footer>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",

        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 12
    },
    button: {
        justifyContent: "center",
        alignSelf: "stretch",
        textAlignVertical: "center"
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#327d84'
    }
})