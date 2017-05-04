import React, { Component } from 'react';
import {
  Text,
  Image,
  TextInput,
  View,
  ListView
} from 'react-native';

import styles from './styles';
import dumiHead from './imgs/dumiHead.png';
import userHead from './imgs/userHead.png';

class List extends Component {
  constructor(props) {
    super(props);
    this.height = 0;
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }
  scrollBottom(){
  	let timer = setTimeout(() => {
  		this.refs.list.scrollTo({y:this.height});
  		clearTimeout(timer);
  	},400);
  }
  componentDidMount() {
  	this.props.handleTasks.push(this.scrollBottom.bind(this));
  }
  componentDidUpdate(prevProps, prevState) {
  	this.scrollBottom.call(this);
  }
  // onLayout={(e) => {this.height += e.nativeEvent.layout.height}}
  render() {
    return (
      	<View style={styles.list}>
            <ListView
            	ref="list"
              	contentContainerStyle={styles.listContent}
              	dataSource={this.ds.cloneWithRows(this.props.data)}
              	renderRow={(value) => {
                	let itemme = value.me ? styles.itemme : null;

                	// let head = value.me ? styles.headRight : styles.headLeft;
                	let message = value.me ? styles.messageRight : styles.messageLeft;
                	let messageInner = value.me ? styles.messageInnerRight : styles.messageInnerLeft;
                	// let arrow = value.me ? styles.arrowRight : styles.arrowLeft;
                	let text = value.me ? styles.textRight : styles.textLeft;
                	let headImage = value.me ? userHead : dumiHead;

                	return (
	                  	<View style={[styles.item,itemme]}>
	                  		{
	                  			value.me ? null : (
	                  				 <View style={styles.head}>
                  				 		<Image source={headImage} style={styles.headImage} />
                  					</View>
	                  			)
	                  		}
	                      	
	                    	<View style={message}>
	                      		<View style={[styles.messageInner,messageInner]}>

	                        		<Text style={[styles.text,text]}>{value.data}</Text>
	                      		</View>
	                    	</View>

	                  		{
	                  			value.me ? (
	                  				 <View style={styles.head}>
                  				 		<Image source={headImage} style={styles.headImage} />
                  					</View>
	                  			) : null
	                  		}
	                  	</View>
                	)
              	}}
              	renderFooter={() => {
              		return <View onLayout={(e) => {this.height = e.nativeEvent.layout.y}} />
              	}}
            />        
      </View>
    );
  }
}

class Input extends Component{
	constructor(props) {
		super(props);
		this.handleTasks = this.handleTasks.bind(this);
	}
	handleSubmit(text){
		if(!text.trim()){
			return false;
		}
		this.props.handleList({"me":true,"data":text});
		// this.handleTasks();
		this.refs.input.clear();
	}
	handleTasks(){
		let tasks = this.props.tasks;
		if(tasks){
			for(let task of tasks){
				task();
			}
		}
	}
	render(){
		return (
			<View style={styles.input}>
				<TextInput
					ref="input"
					style={styles.textInput}
					underlineColorAndroid="transparent"
					keyboardType="default"
					onSubmitEditing={(event) => this.handleSubmit.call(this,event.nativeEvent.text)}
					onFocus={() => {this.handleTasks()}}
				/>
			</View>
		)
		
	}
}

export default class Dialog extends Component {
	constructor(props) {
	  	super(props);
	  	// this.handleList = this.handleList.bind(this);
	  	this.tasks = [];
	  	this.state = {
	  		data: [{"me":false,"data":"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":true,"data":"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"},{"me":false,"data":"哈哈哈"}]
	    };
	}
	handleList(data){
		let datas = this.state.data;
		if(Object.prototype.toString.call(data) == '[object Array]'){
			datas = datas.concat(data);
		}else{
			datas.push(data);
		}
		this.setState({
			data:datas
		});
	}
  	render() {
    	return (
      		<View style={styles.container}>
	        	<List data={this.state.data} handleTasks={this.tasks}/>
	        	<Input handleList={this.handleList.bind(this)} tasks={this.tasks} />
	      	</View>
	    );
  }
}