import React ,{Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Left, Icon, Body, Title, Right} from 'native-base';
import { StyleSheet, Text, ListView,View,FlatList,Alert  } from 'react-native';
import { ListItem } from 'react-native-elements'
import Menu from "./Menu";
import Pay from "./Pay";

var data;

var categories;
var produits =[];


export default class List extends Component {

    constructor(props) {
        super(props);
        data = require('./menu.json');
        categories = data.categories;
        for (var i=0;i<categories.length;i++) {
            tmp = categories[i].products;
            for (var j=0; j<tmp.length;j++){
                produits.push(tmp[j]);
                console.log(tmp[j].name);
            }
        }
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }


    render() {
        const { navigate } =
            this.props.navigation;
        return (
            <Container>
                <Menu/>
                <FlatList
                    data={produits}
                    renderItem={({item}) =>(
                        <ListItem onPress={() =>
                            navigate('Menu')}
                                  roundAvatar
                                  title={`${item.name} `}
                                  subtitle=  {'Price:' +item.price +'€'}
                                  avatar={{ uri: item.image }}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                ></FlatList>
                <Footer/>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        color: '#327d84'
    }
})