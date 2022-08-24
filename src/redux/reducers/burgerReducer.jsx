const initialState = {
  burger: [
    { id: "cheese", price: 10, quantity: 3 },
    { id: "salad", price: 5, quantity: 2 },
    { id: "beef", price: 20, quantity: 2 },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_TOPPING": {
      //b1:Lấy dữ liệu từ payload ra
      const { id, quantity } = payload;
      //B2: clone state.burger
      let burgerUpdate = [...state.burger];
      let item = burgerUpdate.find((it) => it.id === id);
      if (item) {
        item.quantity += quantity;
        if (item.quantity === 0) {
          alert("Số lượng tối thiểu là: 1");
          item.quantity = 1;
        }
      }
      //b2: update lại state
      state.burger = burgerUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
