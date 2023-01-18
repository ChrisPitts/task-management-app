import React from 'react'
import { useSelector} from 'react-redux';



function Todo(props)
{
  return(
    <div><input type={"checkbox"} checked={props.complete}></input> {props.description}</div>
  )
}

function TodoList(props)
{
  const state = useSelector((state)=>state);
  return (
    <>
      {state.map(item => (
      <>
        <Todo description={item.description} complete={item.complete}/>
      </>
      ))}
    </>
  );
}

export default function Todos() {
  return (
    <div>
        <TodoList/>
    </div>
  )
}
