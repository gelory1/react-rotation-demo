import React, { Component } from 'react';
import { Text, View , Button } from 'react-native';
import styles from "./style";

export default class coupon extends Component{
    constructor(){
        super(),
        this.state={
            themeColor:'#ccc',
        }
    }
    render(){
        return (
            <View style={{display:'flex',flexDirection:'row',backgroundColor:'#fff',margin:10}}>
              <View style={{backgroundColor:this.props.themeColor,color:'#fff',padding:10}}>
                <View><Text style={styles.couponsleft}>￥20</Text></View>
                <Text style={styles.whiteColor}>满200元可用</Text>
              </View>
              <View style={{padding:10}}>
                <Text>测试</Text>
                <Text>消费满200立减20</Text>
                <Text>有效期2018-09-15</Text>
              </View>
              <View style={{position:"absolute",right:0,bottom:0,borderWidth:1,borderColor:"#FD5554",borderRadius:5}}>
              <Button
                onPress={()=>{}}
                title={this.props.buttonName}
                color={this.props.themeColor}
                />
              </View>
              
            </View>
        )
    }
}