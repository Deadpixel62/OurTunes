
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
