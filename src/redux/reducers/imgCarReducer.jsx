const stateDefault = "./img/product/black-car.jpg";

export const imgCarReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE-COLOR": {
      //B1: Lấy dữ liệu gửi lên từ acttion
      const { payload } = action;
      //B2: Xử lý thay đổi state
      state = payload;
      return state;
    }
    default:
      return state;
  }
};
