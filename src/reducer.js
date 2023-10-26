export const reducer = (state,{type,payload})=>{
    switch (type) {
        case "SETDATA":
            return {...state, data: payload}
            
        case "SETCOMPANY":
            return {...state, company: payload}    
    
        default:
           return state;
    }
}