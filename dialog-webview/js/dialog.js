import React, { Component } from 'react';
import { render } from 'react-dom';
// import 'babel-polyfill';

import '../css/dialog.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.body = document.getElementsByTagName('body')[0];
  }
  scrollBottom(){
  	let timer = setTimeout(() => {
  		let height = this.refs.list.offsetHeight;
  		this.body.scrollTop = height;
  		clearTimeout(timer);
  	},200);
  }
  componentDidMount() {
  	this.props.handleTasks.push(this.scrollBottom.bind(this));
  }
  componentDidUpdate(prevProps, prevState) {
  	this.scrollBottom.call(this);
  }
  render() {
    return (
    	<ul className="list" ref="list">
    		{
    			this.props.data && this.props.data.length ? this.props.data.map((value,key) => {
    				return (
    					<li key={key} className={value.me ? "list-right" : "list-left"}>
    						<div className="list-head"></div>
    						<div className="list-message">
    							<div className="list-message-inner">
    								{value.data}
    							</div>
    						</div>
    					</li>
    				)
    			}) : null
    		}
      	</ul>
    );
  }
}

class Input extends Component{
	constructor(props) {
		super(props);
		this.handleTasks = this.handleTasks.bind(this);
	}
	handleTasks(){
		let tasks = this.props.tasks;
		if(tasks){
			for(let task of tasks){
				task();
			}
		}
	}
	handleSubmit(e){
		e.preventDefault();
		e.stopPropagation();

		let input = e.target.children[0];
		let text = input.value;
		if(!text.trim()){
			return false;
		}
		this.props.handleList({"me":true,"data":text});
		input.value = '';

		return false;
	}
	render(){
		return (
			<form method="post" className="input" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" onFocus={this.handleTasks} onChange={this.handleTasks}/>
			</form>
		)

	}
}

class Dialog extends Component{
	constructor(props) {
	  	super(props);
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
	render(){
		return (
			<div className="container">
				<List data={this.state.data} handleTasks={this.tasks} />
				<Input handleList={this.handleList.bind(this)} tasks={this.tasks} />
			</div>
		)
	}
}

render(
    <Dialog />,
    document.getElementById('app')
);
