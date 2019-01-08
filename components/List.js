import React ,{Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Left, Icon, Body, Title, Right} from 'native-base';
import { StyleSheet, Text, ListView,View,FlatList,Alert,Dimensions,TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements'
import Menu from "./Menu";
import Pay from "./Pay";
import Sidemenu from "./Sidemenu";
import ListComponent from "./ListComponent";

var data;

var categories;
var produits =[];
var boissons =[];
var sandwiches =[];
var snacks =[];

var totalMoney;
let ScreenHeight = Dimensions.get('window').height;
export default class List extends Component {

    constructor(props) {
        super(props);
        totalMoney = 0;
        data = require('./menu.json');
        categories = data.categories;
        for (var i=0;i<categories.length;i++) {
            tmp = categories[i].products;
            for (var j=0; j<tmp.length;j++){
                produits.push(tmp[j]);
            }

        }
        var a = boissons.push(categories[0].products);
        var b = sandwiches.push(categories[1].products);
        var c = snacks.push(categories[2].products);

        this.state = {
            total : 0 ,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            //sidebarOpen: false,
            isOpen: false,
            selectedItem: 'About',

        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

    }
    onSetSidebarOpen (open) {
        this.setState({sidebarOpen: open});
    }
    //totalMoney = 0;
    upDate(price){
        totalMoney = totalMoney + price;
        console.log(totalMoney);
        //return totalMoney;

    }
    // getMoney = (item) => {
    //
    //     let selNum = item.selNum;
    //     let price = item.price;
    //     return selNum * price;
    //     console.log(selNum * price);
    //
    // };
    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,
        });

    renderItem = (item) => {
        return (
            <ListComponent
                name = {item.name}
                price = {item.price}
                tva = {item.tva}
                id = {item.id}
                image = {item.image}
                function = {this.upDate}
            />
        )
    };

    render() {
        // const { navigate } =
        //     this.props.navigation;
        return (
        //var sidebarContent = (<Text>Sidebar content</Text>);

            <Container>
                <Menu/>

                <FlatList
                    data={produits}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                ></FlatList>

                <Footer>
                    <Body>
                    <View style = {styles.view}>
                    <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Total:' + totalMoney +'€' ) }


                    ><Text
                    style = {styles.buttonText}>PAY</Text></TouchableOpacity>
                    </View>
                    </Body>

                </Footer>
            </Container>
        );
    }
}

// class Application extends React.Component {
//     render() {
//         const menu = <SideMenu navigator={navigator}/>;
//
//         return (
//             <SideMenu menu={menu}>
//                 <ContentView/>
//             </SideMenu>
//         );
//     }
// }

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 12,
        height: ScreenHeight,
        //position: 'absolute',
        alignItems: 'center',
    },
    view: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#327d84'
    },
    buttonText: {
        padding: 20,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})