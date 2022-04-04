import { REDUX_ACTIONS } from "../actions.enum";

export function resetValue(){
    return {
        type:REDUX_ACTIONS.RESET_VALUE,
        payload: "",
    }
};
export function changeValue(value:string){
    return {
        type: REDUX_ACTIONS.CHANGE_VALUE,
        payload :value,
    }
}