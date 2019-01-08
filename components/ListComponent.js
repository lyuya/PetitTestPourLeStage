import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';
//import List from "List";
var produits =[];
export default class ListComponent extends Component {

    static defaultProps = {
        money : () => null,
    };

    // componentDidMount() {
    //     this.subscription = DeviceEventEmitter.addListener('allSelect', (isSelAll) => {
    //         this.props.itemData.isSelect = isSelAll;
    //         this.setState({ isSel : isSelAll });
    //         if (isSelAll) {
    //             this.setMoney(this.state.money * this.state.selNum);
    //         }
    //
    //     })
    // };


    constructor(props) {
        super(props);
        this.state = {
            selNum : "0",
            id : this.props.id,
            name : this.props.name,
            price : this.props.price,
            image : this.props.image,

        }


    };


    itemIncrease = (i) => {
        i++;
        //console.log(this.state.price);
        //console.log(this.props.upDate(this.state.price));
        this.props.function(this.state.price);

        this.setState ({selNum : i});

    };

    itemReduce = (i) => {

        if (i <= 0) {
            return;
        }
        i--;
        this.props.function(-this.props.price);
        this.setState({ selNum : i });
    };

    render() {
        //let { itemData } = this.props;
        let { selNum, price, name, image} = this.state;
        return (
            <View style={ styles.container }>
                <Image style={ styles.icon } source={{ uri: image }}/>
                <View style={ styles.right }>
                    <Text style={ styles.nameStyle }>{ name }</Text>
                    <View style={ styles.right_bot}>
                        < Text style={ styles.moneyStyle }>{ price } €</Text>
                        <View style={ styles.numControllStyle }>

                            <TouchableOpacity style={  styles.reduceStyle } onPress={() => this.itemReduce(selNum)}>
                                <Text style={{ color : selNum <= 1 ? 'red' : 'black' } }>-</Text>
                            </TouchableOpacity>
                            <View style={ styles.numberViewStyle }>
                                <Text style={ styles.numberStyle }>{ selNum }</Text>
                            </View>
                            <TouchableOpacity style={  styles.increaseStyle } onPress={() => this.itemIncrease(selNum)}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : 'white'
    },
    icon : {
        height : 80,
        width : 80,
        marginTop : 10,
        marginBottom : 10,
        marginLeft : 15,
        borderWidth : 1,
        borderColor : '#999999'
    },
    right : {
        marginLeft : 15,
        flex : 1,
        marginTop : 10,
        marginBottom : 10,
    },
    nameStyle : {
        fontSize : 17,
        color : '#000000'
    },
    descriptionStyle : {
        marginTop : 3,
        fontSize : 13,
        color : '#A9A9A9'
    },
    right_bot : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 10,
        alignItems : 'center',
    },
    moneyStyle : {
        fontSize : 13,
        color : 'red'
    },
    numControllStyle : {
        flexDirection : 'row',
        borderWidth : 1,
        borderColor : '#e9e9e9',
        marginRight : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    reduceStyle : {
        height : 35,
        width : 35,
        alignItems : 'center',
        justifyContent : 'center',
        borderRightWidth : 1,
        borderColor : '#e9e9e9',
    },
    numberViewStyle : {
        height : 35,
        width : 60,
        alignItems : 'center',
        justifyContent : 'center',
    },
    numberStyle : {
        fontSize : 19,
    },
    increaseStyle : {
        height : 35,
        width : 35,
        alignItems : 'center',
        justifyContent : 'center',
        borderLeftWidth : 1,
        borderColor : '#e9e9e9',
    },
});
