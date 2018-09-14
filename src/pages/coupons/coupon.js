import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Coupon extends Component{
    constructor(){
        super()
        this.state = {
            // type:'立即使用'
        }
    }
    // getInitialState(){
    //     let el = documenr.querySelectorAll('.coupons')
    //     if(this.props.type === 'normal'){}
    //     else if(this.props.type === 'used'){
    //         el.classList.add('used')
    //     }
    //     else if(this.props.type === 'expired'){
    //         el.classList.add('expired')
    //     }
    //     else{
    //         console.log('你的优惠券类型写错了，只能是 normal used expired三种')
    //     }
    // }
    render(){
        <View className="coupons">
        hhhhh
            {/* <View>
                <Text>{this.props.money}</Text>
                <Text>满{this.props.conditionMoney}元可用</Text>
            </View>
            <View>
                <Text>{this.props.title}</Text>
                <Text>满{this.props.des}元可用</Text>
                <Text>有效期{this.props.date}</Text>
            </View>
            <button>{type}</button>
            <View>满减券</View> */}
        </View>
    }
}