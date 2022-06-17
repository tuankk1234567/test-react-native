const initState:any = {
    user:"user1",
    password: "password"

}
const userReducer = (state:any = initState, action:any) =>{

    switch(action.type){
        case "UPDATE_USER":{
            let newState = {...state}
            newState.user =action.payload.user,
            newState.password=action.payload.password
            return newState
        }
        default:
            return state
    }

}
export default userReducer