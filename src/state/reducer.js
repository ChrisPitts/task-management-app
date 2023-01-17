export function reducer(state = [], action){
    switch(action.type)
    {
        case "ADD_ITEM":
            return [...state, {
                description: action.description, 
                complete: action.complete
            }];
        case "DELETE_ITEM":
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default: 
            return state;
    }
}