const initialState = {
  musicList: [],
  inputValue: "",
  cart: [],
  price: 0,
  name: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETINPUTVALUE":
      console.log(action.payload);
      return { ...state, inputValue: action.payload };

    case "SETMUSICLIST":
      console.log(action.payload);
      localStorage.setItem("products", JSON.stringify(action.payload));
      return { ...state, musicList: action.payload };

    case "AddToCart":
      state.price += action.payload.price;
      action.payload.isInCart = true;
      return {
        ...state,
        cart: [
          ...state.cart,
          state.musicList.find((product) => product.id === action.payload.id),
        ],
      };

    case "cacheCart":
      localStorage.setItem("products", JSON.stringify(state.musicList));
      localStorage.setItem("cart", JSON.stringify(state.cart));

    case "getCart":
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
      };

    case "CheckoutSet":
      state.cart.map((product) => (product.isInCart = false));
      localStorage.removeItem("cart");
       localStorage.setItem(
        "products",
        JSON.stringify(
          state.musicList.map((obj) => {
            return { ...obj, isInCart: false };
          })
        )
      );
      return {
        ...state,
        cart: [],
        price: 0,
      };

    case "setName":
      return { ...state, name: action.payload };

    case "deleteFromCart":
      console.log(action.payload);
      // action.payload.isInCart = false;
      console.log("productzz: ", state.musicList);
      localStorage.setItem(
        "products",
        JSON.stringify(
          state.musicList.map((elm, i) => {
            if (elm.id === action.payload.id) {
              return { ...elm, isInCart: false };
            }
            return elm;
          })
        )
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(
          state.cart.filter((item) => item.id != action.payload.id)
        )
      );
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload.id),
        musicList: state.musicList.map((elm, i) => {
          if (elm.id === action.payload.id) {
            return { ...elm, isInCart: false };
          }
          return elm;
        }),
      };

    default:
      return state;
  }
};

export default Reducer;
