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

// Set the filter for which items show up on the list
// ALL
// COMPLETE
// INCOMPLETE
export function setFilter(filter){
    return ({
        type: "SET_FILTER", 
        filter: filter
    });
}