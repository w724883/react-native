import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent:'flex-end',
    height:'100%',
    // backgroundColor:'green',
    backgroundColor:'rgb(246,246,246)',
    position:'relative'
  },
  

  list:{
    paddingLeft:15,
    paddingRight:15
    
  },
  item:{
    marginBottom:27,
    flexDirection:'row',
    // flexWrap:'nowrap',
    // alignItems: 'flex-start',
    // justifyContent:'space-between',
    // position:'relative',
  },
  itemme:{
    justifyContent:'flex-end'
  },
  head:{
    width:40,
    height:40,
    backgroundColor:'#ccc',
    borderRadius:20,
    overflow:'hidden',


    // position:'absolute',
    // top:0,
    // zIndex:1,
  },
  // headLeft:{
  //   order:1,
  // },
  // headRight:{
  //   order:0,
  // },
  headImage:{
    width:40,
    height:40,
  },
  // message:{
    
  //   position:'relative',
  // },
  // arrow:{
  //   marginTop:12,
  //   width:0,
  //   height:0,
  //   borderWidth:6,
  //   borderTopColor:'transparent',
  //   borderBottomColor:'transparent',
  // },
  // arrowWrap:{
  //   flexDirection: 'row',
  //   marginLeft:14,
  //   marginRight:-2,
  //   zIndex:1,
  //   position:'relative'
  // },
  // arrowInner:{
  //   marginLeft:-5,
  //   borderRightColor:'#fff',
  // },
  // arrowLeft:{
    
  //   borderLeftWidth:0,
  //   borderRightColor:'#ccc',
  // },
  // arrowRight:{
  //   marginRight:14,
  //   marginLeft:-1,
  //   borderRightWidth:0,
  //   borderLeftColor:'#3ea1fc',
  // },
  messageLeft:{
    marginLeft:14,
    marginRight:120,
    alignItems: 'flex-start',
  },
  messageRight:{
    marginRight:14,
    marginLeft:120,
    alignItems: 'flex-end',
  },
  messageInner:{
    
    borderRadius:5,
    paddingLeft:13,
    paddingRight:13,
    paddingTop:8,
    paddingBottom:8,
    borderWidth:1,
    
  },
  messageInnerLeft:{
    backgroundColor:'#fff',
    borderColor:'#ccc'
  },
  messageInnerRight:{
    backgroundColor:'#3ea1fc',
    borderColor:'#3ea1fc'
  },
  text:{
    fontSize:14
  },
  textRight:{
    color:'#fff',
  },
  textLeft:{
    color:'#4e515e',
  },
  input:{
    paddingTop:5,
    paddingBottom:5,
    paddingRight:15,
    paddingLeft:15,
    backgroundColor:'#ccc',
    // position:'absolute',
    // left:0,
    // bottom:0,
    // right:0,
    width:'100%',
    borderTopWidth:1,
    borderTopColor:'#ccc',
    // alignSelf:'flex-end'
  },
  textInput:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:2,
    fontSize:16,
    height:36,
    textAlignVertical:'center',
  }
  
});