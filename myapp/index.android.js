/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';


class Nav extends Component {
  render() {
    return (
      <View style={styles.nav}>
        <View style={styles.navWrap}>
          <Text style={styles.navTitle}>全栈学习</Text>
        </View>
      </View>
    );
  }
}
// <ListView
//   contentContainerStyle={styles.listContent}
//   dataSource={this.state.dataSource}
//   renderRow={(value) => (
//     <View style={styles.listItem}>
//       <Text>{value.title}</Text>
//       <View style={styles.listItemDesc}>
//         <Text style={styles.listItemAuthor}>{value.author}</Text>
//         <Text style={styles.listItemTime}>{value.time}</Text>
//       </View>
//     </View>
//   )}
// />
class List extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.page = 1;
    this.state = {
      data:[],
      loading:''
    };
  }
  getList(){
    fetch("http://10.0.3.2:88/laravel/techdoc-server/public?page="+this.page).then(res => {
      return res.json();
    }).then(json => {
      console.log(json);

      if(json.data.length){
        let data = this.state.data;
        data = data.concat(json.data);
        this.setState({
          data,
          loading:'下拉刷新'
        });
      }else{
        this.setState({
          loading:'被你看完啦'
        });
      }
    }).catch((error) => {
      this.setState({
        loading:error
      });
    });
  }
  componentWillMount() {
    this.getList();
  }
  render() {
    return (
      <View style={styles.list}>
        <View style={styles.listTitle}>
          <View style={styles.listTitleWrap}>
            <Text style={styles.listTitleText}>最新文章</Text>
          </View>
        </View>
        {
          this.state.data && this.state.data.length ? (
            <ListView
              contentContainerStyle={styles.listContent}
              dataSource={this.ds.cloneWithRows(this.state.data)}
              onEndReachedThreshold={2}
              onEndReached={() => {
                this.setState({
                  loading:'loading...'
                });
                
                this.getList();
              }}
              renderRow={(value) => {
                return (
                  <View style={styles.listItem}>
                    <Text>{value.title}</Text>
                    <View style={styles.listItemDesc}>
                      <Text style={styles.listItemAuthor}>{value.user_name}</Text>
                      <Text style={styles.listItemTime}>{value.updated_at}</Text>
                    </View>
                  </View>
                )
              }}
              renderFooter={() => {
                return <Text>{this.state.loading}</Text>
              }}
            />
          ) : null
        }
        
      </View>
    );
  }
}
export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    // flexDirection: 'column',
    // backgroundColor:'green',
    height:'100%',
    alignItems: 'stretch',
    // justifyContent:'space-around',
    // flex:1
    position:'relative'
  },
  nav: {
    backgroundColor: '#b92b27',
    height: 50,
    // width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    right:0,
    zIndex:2,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBotto·mWidth: 2,
    // borderBottomColor: '#b92b27',
    // flex:0
  },
  navWrap :{
    width:'90%',
    // paddingTop: 15,
    // paddingBottom: 15,
  },
  navTitle :{
    fontSize: 16,
    color: '#fff',
    // paddingTop: 15,
    // paddingBottom: 10,
    // borderBottomWidth: 2,
    // borderBottomColor: '#b92b27',
  },

  list:{
    // paddingTop: 50,
    // paddingBottom: 50,
    // flexDirection: 'column',
    // alignItems: 'center',
    // alignSelf:'center',
    // justifyContent: 'center',
    // backgroundColor:'yellow',
    // justifyContent:'space-between',
    // justifyContent: 'flex-end',
    flex:1,
    position:'relative'
  },
  listTitle:{
    // flex:1
    position:'absolute',
    top:0,
    left:0,
    right:0,
    zIndex:1,
    paddingTop: 50,
    backgroundColor:'#fff',
  },
  listTitleWrap:{
    borderBottomWidth: 2,
    borderBottomColor: '#b92b27',
    height:40,
    // height: 30,
    width:'90%',
    alignSelf:'center',
    justifyContent: 'center',
  },
  listTitleText:{
    fontSize: 16,
    color: '#b92b27',
  },
  listContent:{
    // width:'90%',
    // flex:1,
    // alignSelf:'flex-end',
    // flexDirection: 'column',
    alignItems: 'center',
    paddingTop:90,
    backgroundColor:'#fff'
    // backgroundColor:'red',
    // flex:1
  },
  listItem:{
    width:'90%',
    borderBottomWidth: 1,
    borderBottomColor: '#e3ecec',
    paddingTop: 15,
    paddingBottom: 15,

    // flex:1
  },
  listItemDesc:{
    flexDirection:'row',
  },
  listItemAuthor:{
    color: '#999999',
    fontSize: 14,
  },
  listItemTime:{
    fontSize: 14,
    marginLeft: 10,
    color: '#08c'
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
