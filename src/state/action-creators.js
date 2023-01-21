// Adding an item to the list
export function addItem(description, complete=false){
    return (
        {
            type: "ADD_ITEM",
            description: description,
            complete: complete
        }
    );
}

// Removing an item from the list
export function deleteItem(index){
    console.log("delete")
    return ({
            type: "DELETE_ITEM",
            index: index
        }
    )
}

// Toggling the complete status of an item
export function toggleComplete(index){
    return ({
            type: "TOGGLE_COMPLETE",
            index: index
        })
}

// Removing all complete items from the list
export function clearComplete(){
    return ({type: "CLEAR_COMPLETE"});
}