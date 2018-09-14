import React, { Component } from 'react';
import { renderers } from 'react-native-popup-menu';
import { Text, View } from 'react-native';
import Coupon from './coupon'

export default class tabOne extends Component {
    constructor(props){
        super(props)
        this.state={
            // list:[
            // {money:'￥20',conditionMoney:'200',title:'测试',
            // des:'消费满200立减20元',date:'2018-09-15'},
            // {money:'9折',conditionMoney:'10',title:'测试',
            // des:'消费满200立减20元',date:'2018-09-15'},
            // {money:'￥0.1',conditionMoney:'1',title:'测试',
            // des:'消费满200立减20元',date:'2018-09-15'}],
            // couponType:'normal'
        }
    }
    getInitialState(){
        
    }
    render(){
        // let dom = this.state.list.map((item, index) => (
        // <Coupon money={item.money} conditionMoney={item.conditionMoney} 
        // title={item.title} des={item.des} date={item.date} type={this.state.couponType}
        // ></Coupon>
        // ))
        return (
        <View>
            <a className="toCenter" href="#">tab1</a>
            <Coupon></Coupon>
        </View>
        )
    }
}