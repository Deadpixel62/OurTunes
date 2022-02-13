
export const setInputValue = (input) => {
  return {
    type: "SETINPUTVALUE",
    payload: input,
  };
};

export const setMusicList = (list) => {
  return {
    type: "SETMUSICLIST",
    payload: list,
  };
};

export const AddToCart = (item) => {
  return {
    type: "AddToCart",
    payload: item,
  };
};

export const CheckoutSet = () => {
  return {
    type: "CheckoutSet",
  };
};

export const setName = (input) => {
    return {
        type: "setName",
        payload: input
    }
}

export const deleteFromCart = (item) => {
  return {
    type: "deleteFromCart",
    payload: item
  };
}