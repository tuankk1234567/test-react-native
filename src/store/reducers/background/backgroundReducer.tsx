const initState:any = {
    backgroundColor:"white",
    status: true

}
const backgroundReducer = (state:any = initState, action:any) =>{

    switch(action.type){
        case "CHANGE_BACKGROUND":{
            let newState = {...state}
            newState.backgroundColor =action.payload.backgroundColor,
            newState.status=action.payload.status
            return newState
        }
        default:
            return state
    }

}
export default backgroundReducer