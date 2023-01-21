// import React from 'react'
import React, { Component } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addItem, deleteItem, toggleComplete} from '../state/action-creators';
import { connect } from 'react-redux';

export class Input extends Component {
    constructor(props){
        super(props);
        this.state = {description: ""};
    }
    handleChangeDescription(event){
        this.setState({description: event.target.value})
    }
    addItem()
    {
        this.props.onAdd(this.state.description);
        this.setState({description: ""});
    }
    render() {
        return (
            <div>
                <input value={this.state.description} onChange={this.handleChangeDescription.bind(this)}></input>
                <button onClick={()=>this.addItem()}>Add</button>
            </div>
        )
    }
}


function Todo(props)
{
    let dispatch = useDispatch();
    return(
        <div>
            <input 
                type={"checkbox"} 
                checked={props.complete}
                onClick={()=>props.toggleComplete(props.index)}>
            </input> 
            {props.description} 
            <button onClick={()=>props.onDelete(props.index)}>Delete</button>
            </div>
    )
}

function TodoList(props)
{
  const state = useSelector((state)=>state);
  
  return (
    <>
        <Input onAdd={props.onAdd}/>
        {state.map((item, index) => (  
        <Todo 
            description={item.description} 
            complete={item.complete} 
            index={index}
            onDelete={props.onDelete}
            toggleComplete={props.toggleComplete}/>
      ))}
    </>
  );
}

function mapStateToProps(state){
    return {items: state}
}

function mapDispatchToProps(dispatch)
{
    return{
        onAdd: (description, complete=false)=>{
            dispatch(addItem(description, complete))
        },
        onDelete: (index)=>{
            dispatch(deleteItem(index));
        },
        toggleComplete: (index)=>{
            dispatch(toggleComplete(index));
        }
    }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps) (TodoList)

export default function Todos() {
    

    return (
        <div>
            <TodoListContainer/>
        </div>
  )
}
