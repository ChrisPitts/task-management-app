export function addItem(description, complete=false){
    return (
        {
            type: "ADD_ITEM",
            description: description,
            complete: complete
        }
    );
}


export function deleteItem(index){
    console.log("delete")
    return ({
            type: "DELETE_ITEM",
            index: index
        }
    )
}

export function toggleComplete(index){
    return ({
            type: "TOGGLE_COMPLETE",
            index: index
        })
}
