import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import  {Provider}  from 'react-redux';
//import CouponPage from './src/pages/coupons/index';
import CouponCom from './couponCom'
import styles from "./style";
import { findDOMNode } from 'react-dom';


function stateChange(text) {
  return {
    type: USED,
    text
  }
}
function stateChange2(text) {
  return {
    type: OVERDUE,
    text
  }
}

const USED = 'USED'
const UNUSE = 'UNUSE'
const OVERDUE = 'OVERDUE'

const initialState={
  couponPage:'UNUSE'
}


const reducer = function(state = initialState,action){
  switch(action.type){
    case UNUSE:
    return {
      ...state,
      couponPage:'UNUSE',
      unuseColor: '#FF8000',
      usedColor:'#777',
      overdueColor:'#777',
    };;
    case USED:
    return {
      ...state,
      couponPage:'USED',
      unuseColor: '#777',
      usedColor:'#FF8000',
      overdueColor:'#777',
    };
    case OVERDUE:
    return {
      ...state,
      couponPage:'OVERDUE',
      unuseColor: '#777',
      usedColor:'#777',
      overdueColor:'#FF8000',
    };
    default:
    return state
  }
}
const store = createStore(reducer);

export default class HelloWorldApp extends Component {
  constructor(){
    super()
    this.state = {
      couponPage:'UNUSE',
      unuseColor: '#FF8000',
      usedColor:'#777',
      overdueColor:'#777',
      buttonName:'已过期',
    }
  }
  componentDidUpdate() {
    
    alert(this.state.couponPage)
    
  }
  render() {

    let unuse =  (store.getState().couponPage ==='UNUSE') ? (
      <View>
        <CouponCom themeColor='#FD5554' buttonName="立即使用" />
        <CouponCom themeColor='#FD5554' buttonName="立即使用"  />
        <CouponCom themeColor='#55B5FF' buttonName="立即使用"  />
        <CouponCom themeColor='#55B5FF' buttonName="立即使用"  />
      </View>
    ) : null;
    let overdue = (store.getState().couponPage ==='OVERDUE') ? (
      <View>
        <CouponCom themeColor='#CCC' buttonName="已过期" />
        <CouponCom themeColor='#CCC' buttonName="已过期" />
        <CouponCom themeColor='#CCC' buttonName="已过期" />
        <CouponCom themeColor='#CCC' buttonName="已过期" />
      </View>
    ) : null;
    let used = (store.getState().couponPage ==='USED') ? (
      <View>
        <CouponCom themeColor='#EEE' buttonName="已使用" />
        <CouponCom themeColor='#EEE' buttonName="已使用" />
        <CouponCom themeColor='#EEE' buttonName="已使用" />
        <CouponCom themeColor='#EEE' buttonName="已使用" />
      </View>
    ) : null;

    return (
        <Provider store={store}>
          <View style={{backgroundColor:'#F3F3F3'}}>
            <View style={{position:'relative',display:'flex',alignItems:'center',
            justifyContent:'center',flexDirection:'row',padding:10,fontSize:18,color:'#000'}}>
              <Text style={{position:'absolute',left:10,top:10,fontSize:20,lineHeight:20}}>&lt;</Text>
              <Text>我的优惠券</Text>
            </View> 
            <View style={{display:'flex',alignItems:'center',justifyContent:'space-around',
            flexDirection:'row',padding:10,backgroundColor:'#fff'}}>
              <Text style={styles.textCenter} style={{color: this.state.unuseColor}} onPress={this.getCouponsUnUse.bind(this)}>未使用</Text>
              <Text style={styles.textCenter} style={{color: this.state.usedColor}} onPress={this.getCouponsUsed.bind(this)}>已使用</Text>
              <Text style={styles.textCenter} style={{color: this.state.overdueColor}} onPress={this.getCouponsOverdue.bind(this)}>已过期</Text>
            </View>
            <View style={styles.demo}>
              <Text style={styles.themeColor}>赶紧去领券中心看看更多优惠券~</Text>
              <Text>{this.state.couponPage}</Text>
            </View>
            {unuse}
            {overdue}
            {used}
          </View>
        </Provider>
    );
  }
  getCouponsUnUse(){

    store.dispatch({type: 'UNUSE'})
    // this.setState({
    //   couponPage:'unuse'
    // })
    //alert(this.state.couponPage)
  }
  getCouponsUsed(){

    store.dispatch({type: 'USED'})
    // this.setState({
    //   couponPage:'used'
    // })
     //console.log(this.state.couponPage)
  }
  getCouponsOverdue(){

    store.dispatch({type: 'OVERDUE'})
    
    // this.setState({
    //   couponPage:'overdue'
    // })
     //alert(this.state.couponPage)
  }
  
}
store.subscribe(()=>{
  //render(store.getState())
  alert(store.getState().couponPage)
  
})