import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {

    const {item, handleChange, handleSubmit, editItem} = this.props

    return (
      <div className="card card-body my-3 text-center ">
        <form onSubmit={handleSubmit}>  
           <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book" />
               </div>
              </div>
            <input type="text" className="form-control text-capitalize" placeholder="add  a todo item"
            value={item}
            onChange={handleChange}
            
            />

          </div>
          <button typpe="submit" className={editItem ? "btn btn-block bg-success text-white" : "btn btn-block bg-primary text-white"}>
          {editItem ? "Edit Item": "add item"}
         </button>
        </form>

      </div>
    );
  }
}