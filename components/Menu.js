
import React, {Component} from 'react';
import Button from 'react-native-button';
import { Container, Header, Content, Footer, FooterTab, Left, Icon, Body, Title, Right} from 'native-base';
import { Font, AppLoading } from "expo";
import { StyleSheet, Text, ListView,View,FlatList,Alert,Dimensions,TouchableOpacity} from 'react-native';


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
        let {width, height} = Dimensions.get('window')
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
            <Header>
            <Left>
                {/*<Button transparent*/}
                        {/*onPress={() => {*/}
                            {/*Alert.alert('You tapped the button!');*/}
                        {/*}}>*/}
                    {/*<Icon name='menu' />*/}
                {/*</Button>*/}
            </Left>
            <Body>
            <Title><Text style = {styles.countText}>Chez Yanan</Text></Title>
            </Body>
                <Right>

                </Right>
        </Header>

</View>

    );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 12
    },
    button: {
        justifyContent: "center",
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        textAlignVertical: 'center',
        padding: 20,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})