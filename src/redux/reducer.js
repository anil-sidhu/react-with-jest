const initialState =
    {
        id: 40
    }

export default function todoApp(state = initialState, action) {
    switch (action.type) {

        case "ADD_TODO":
            return {
                ...state,
                id: action.id,
            }
            break;
        default:
            return state
    }
}




