const changeBackground = (value:boolean) =>{
    if(value === true){
        return {
            type: "CHANGE_BACKGROUND",
            payload:{
                backgroundColor:"white",
                status: true
            }
        }
    }else{
        return {
            type: "CHANGE_BACKGROUND",
            payload:{
                backgroundColor:"black",
                status: false
            }
        }
    }
}
export {changeBackground}