const initialState = {
    musicList: [],
    inputValue:"",
    cart:[]

}


const Reducer=  (state = initialState, action) => {
  switch (action.type) {
    case "SETINPUTVALUE":
      console.log(action.payload);
      return { ...state, inputValue: action.payload };

    case "SETMUSICLIST":
      console.log(action.payload);
      return { ...state, musicList: action.payload };

       case "AddToCart":
                return {...state, 
                cart : [...state.cart, state.musicList.find(product => product.id === action.payload.id)]}

    default:
      return state;
  }
}


export default Reducer;