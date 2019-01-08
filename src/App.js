import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';


class App extends Component {
  
  state = {
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  };
  
  handlechange = (e)=>{
    this.setState({
      item: e.target.value
    });
    
  };
  handleSubmit= event => {
    
    event.preventDefault();
    
    const Newitem ={
      id:this.state.id,
      title:this.state.item
    };
    const Updateitems = [...this.state.items,Newitem];
   
    this.setState({
      items:Updateitems,
      item:"",
      id:uuid(),
      edititem:false 

    })
  
  };
 
  ClearList = ()=>{
    this.setState({
      items:[]
    })
  };

  handleDelete = (id) =>{
    const filtredItems  = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filtredItems
    })
  };

  handleEdit = id =>{
    const filtredItems  = this.state.items.filter(item => item.id !== id)
    const selectedItem  = this.state.items.find(item => item.id ===id)

    
    this.setState({
      items: filtredItems,
      item: selectedItem.title,
      editItem: true,
      id:id
    });
  };
 
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-8 mt-4">
        <h3 className="text-capitalize text-center" >
          A Todo Input
        </h3>
        
        <TodoInput 
        item ={this.state.item} 
        handleChange={this.handlechange}
        handleSubmit={this.handleSubmit}
        editItem = {this.state.editItem}
        
        />
        <TodoList items ={this.state.items}
        ClearList = {this.ClearList}
        handleDelet = {this.handleDelete}
        handleEdit ={this.handleEdit}
        />
        </div>
        </div>
      </div>

   )
  }
}

export default App;
