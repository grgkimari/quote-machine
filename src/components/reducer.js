export const SAVE_DATA = "SAVE_DATA"
export const UPDATE_TARGET = "UPDATE_TARGET"
const initialState = {
    target : {
        text: 'Loading ...',
        author : ""
    },
    data : "NO DATA",
}
export function mainReducer(state = initialState, action){
    switch (action.type){
        case SAVE_DATA:
            return {
                ...state,
                data : action.payload,
            }
        case UPDATE_TARGET:
            return {
                ...state,
                target : action.target,
            }
        default:
            return state
    }
}