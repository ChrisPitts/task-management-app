import { type } from "@testing-library/user-event/dist/type"

export function addItem(description, complete=false){
    return (dispatch)=>{
        dispatch({
            type: "ADD_ITEM",
            description: description,
            complete: complete
        })
    }
}

export function deleteItem(index){
    return (dispatch)=>{
        dispatch({
            type: "DELETE_ITEM",
            index: index
        })
    }
}