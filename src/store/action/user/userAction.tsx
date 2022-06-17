const changeUser = (payload: any) => {
        return {
            type: "UPDATE_USER",
            payload:payload
        }

}
export {changeUser}