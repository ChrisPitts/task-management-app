import React, { Component } from 'react';
import { useSelector, connect} from 'react-redux';
import { addItem, clearComplete, deleteItem, toggleComplete} from '../state/action-creators';

// Component that allows the user to add items to the to do list
export class Input extends Component {
    constructor(props){
        super(props);
        this.state = {description: ""};
    }
// activates whenever the input field changes
    handleChangeDescription(event){
        this.setState({description: event.target.value})
    }
// adds an item to the to do list
    addItem()
    {
        this.props.onAdd(this.state.description);
        this.setState({description: ""});
    }
    render() {
        return (
            <div>
                <input value={this.state.description} onChange={this.handleChangeDescription.bind(this)}></input>
                <button onClick={()=>this.addItem()} useId="addBtn">Add</button>
            </div>
        )
    }
}

// Displays an individual todo list item
function Todo(props)
{
    return(
        <div>
            <input 
                type={"checkbox"} 
                checked={props.complete}
                onClick={()=>props.toggleComplete(props.index)}>
            </input> 
            <span>{props.description}</span> 
            <button onClick={()=>props.onDelete(props.index)}>Delete</button>
            </div>
    )
}

// Contains the entire todo list
function TodoList(props)
{
  const state = useSelector((state)=>state);
  
  return (
    <main>
        <Input onAdd={props.onAdd} />
        {state.map((item, index) => (  
        <Todo 
            description={item.description} 
            complete={item.complete} 
            index={index}
            onDelete={props.onDelete}
            toggleComplete={props.toggleComplete}/>
        ))}
        <button onClick={()=>props.clearComplete()}>Clear Complete</button>
    </main>
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
        },
        clearComplete: ()=>{
            dispatch(clearComplete());
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
