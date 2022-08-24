import React, { Component } from "react";
import { connect } from "react-redux";

class TableComment extends Component {
  render() {
    console.log(this.props);
    const { arrComment } = this.props;
    return (
      <div>
        <div className="img">
          <img src="https://i.pravatar.cc?u=20" alt="" height={200} />
        </div>
        {arrComment.map((comment, index) => {
          return (
            <div className="row mt-2 align-items-center" key={index}>
              <div className="col-2">
                <img
                  src={`https://i.pravatar.cc?u=${comment.name}`}
                  width={50}
                />
              </div>
              <div
                className="col-8  rounded"
                style={{ background: "rgba(0,0,0,0.1)", padding: 15 }}
              >
                <h3>{comment.name}</h3>
                <p>{comment.content}</p>
                <div style={{ textAlign: "right" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      //Tạo action xóa
                      const action = {
                        type: "XOA_COMMENT",
                        payload: index,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Xóa
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      //Tạo action xóa
                      const action = {
                        type: "SUA_COMMENT",
                        payload: index,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Sửa
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrComment: state.commentReducer.arrComment,
});

export default connect(mapStateToProps)(TableComment);
