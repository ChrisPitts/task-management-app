export function reducer(state = [], action){
    switch(action.type)
    {
        case "ADD_ITEM":
            return [{
                description: action.description, 
                complete: action.complete
            }, ...state];
        case "DELETE_ITEM":
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case "TOGGLE_COMPLETE":
            return[
                ...state.slice(0, action.index),
                {
                    description: state[action.index].description, 
                    complete: !state[action.index].complete
                },
                ...state.slice(action.index + 1)
            ]
        case "CLEAR_COMPLETE":
            return state.filter(item =>!item.complete);
        default: 
            return state;
    }
}