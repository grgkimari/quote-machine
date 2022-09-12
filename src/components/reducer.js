export const SAVE_DATA = "SAVE_DATA"
const initialState = {
    data : "NO DATA",
}
export function mainReducer(state = initialState, action){
    switch (action.type){
        case SAVE_DATA:
            return {data : action.payload}
        default:
            return state
    }
}