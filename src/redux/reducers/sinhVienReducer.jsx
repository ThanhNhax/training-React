const stateDefault = {
  arrSinhVien: [
    {
      maSV: "1",
      tenSV: "Nguyễn Văn A",
      soDienThoai: "0909878878",
      email: "email@gmail.com",
    },
    {
      maSV: "2",
      tenSV: "Nguyễn Văn B",
      soDienThoai: "0909878878",
      email: "email@gmail.com",
    },
  ],
  sinhVienInfo: {
    maSV: "",
    tenSV: "",
    soDienThoai: "",
    email: "",
  },
  err: {
    maSV: "",
    tenSV: "",
    soDienThoai: "",
    email: "",
  },
};

export const sinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      //b1: lấy ra dữ liệu action gửi lên
      const { id, value } = action.payload;

      // Xử lý Sinh viên Info
      let svUpdate = { ...state.sinhVienInfo };

      svUpdate[id] = value;
      //Xử lý err
      let newErr = state.err;
      let messErr = "";
      if (value.trim() === "") {
        messErr = id + " không được bỏ trống !!!";
      }
      newErr[id] = messErr;
      //b3: Thay đổi state
      svUpdate[id] = value;
      //b4: Gán state cũ = state update
      state.sinhVienInfo = svUpdate;
      state.err = newErr;

      return { ...state }; //immutable
    }

    case "HANDLE_SUBMIT": {
      //b1: Lấy ra dữ liệu action gửi lên
      let sv = action.payload;
      console.log("Sinh Vien mới", sv);
      //b2: Đối với state là object hoặc array => clone state ra
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.push(sv);
      //Cập nhật state
      state.arrSinhVien = arrSinhVienUpdate;
      console.log("arrSinhVien", state.arrSinhVien);
      return { ...state };
    }
    case "DELETE_SINHVIEN": {
      //b1: Lấy dữ liệu từ payload
      let index = action.payload;
      //b2: clone state.arrComment và xử lý
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.splice(index, 1);
      //b3: Cập nhật state
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    case "EDIT_SINHVIEN": {
      //B1: lấy dữ liệu payload
      let index = action.payload;
      //B2: clone state.sinhVienInfo ra và xử lý
      let sinhVienInfoUpdate = { ...state.sinhVienInfo };
      sinhVienInfoUpdate = state.arrSinhVien[index];
      //Cập nhật lại state
      state.sinhVienInfo = sinhVienInfoUpdate;
      return { ...state };
    }

    case "UPDATE_SINHVIEN": {
      // clonet state.arrSinhVien
      let arrSinhVienUpdate = [...state.arrSinhVien];
      //Tìm comment có name và nội dung trong mảng (Dựa vào name và content của state.commentInfo)
      let cmt = arrSinhVienUpdate.find(
        (sinhVien) => sinhVien.maSV === state.sinhVienInfo.maSV
      );
      if (cmt) {
        cmt.maSV = state.sinhVienInfo.maSV;
        cmt.tenSV = state.sinhVienInfo.tenSV;
        cmt.soDienThoai = state.sinhVienInfo.soDienThoai;
        cmt.email = state.sinhVienInfo.email;
      }
      //Cập nhật state
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    // case "LAY_STORE": {
    //   return;
    // }
    default:
      return state;
  }
};
