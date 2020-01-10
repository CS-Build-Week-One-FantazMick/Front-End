  const initialState = {
    title: "",
    description: "",
    players: [],
    error_msg: "",
    position:[1,1]
  }
const roomReducer = (state = initialState, action) =>
    
    
 {
    switch(action.type) {
        case "TITLE":
            return state.title = action.payload;
            
        case "DESCRIPTION":
            return state.description = action.payload;
        case "PLAYERS":
            return state.players = action.payload;
        case "ERROR_MSG":
            return state.error_msg = action.payload;
        case "POSITION":
        console.log("OOOOOEEEEEE",action.payload)
         return state.position = action.payload;
           
        default:
         return state
    }
}

export default roomReducer