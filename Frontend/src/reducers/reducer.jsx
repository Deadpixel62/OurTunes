const initialState = {
    musicList: [],
    inputValue:"",
    cart:[],
    price: 0,
    name:"",

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
      state.price = state.price + action.payload.price;
      return {
        ...state,
        cart: [
          ...state.cart,
          state.musicList.find((product) => product.id === action.payload.id),
        ],
      };

    case "CheckoutSet":
      return {
        ...state,
        cart: [],
        price: 0,
      };

    case "setName":
      return { ...state, name: action.payload };

    default:
      return state;
  }
}


export default Reducer;