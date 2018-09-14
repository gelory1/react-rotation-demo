const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
        demo:{
            borderWidth:1,
            borderStyle:'solid',
            borderColor:'#FF8000',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:5,
            margin:10,
            borderRadius:5,
          },
          textCenter:{
            textAlign:'center',
          },
          whiteColor:{
            color:'white',
          },
          couponsleft:{
            fontSize:20,
            color:'#fff',
            textAlign:'center'
          },
          themeColor:{
            borderColor:'#FF8000',
            color:'#FF8000'
          },
          testBorder:{
            borderWidth:1,
            borderStyle:'solid',
            borderColor:'red',
          }
    };