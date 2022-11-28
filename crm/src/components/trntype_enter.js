import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TrnType_Enter extends Component {
  handleSubmit = () => {
    const data = {
      AppName: this.AppName,
      TrnTypeID: this.TrnTypeID,
      TrnTypeName: this.TrnTypeName,
      TypeFor: this.TypeFor,
      isValid: this.isValid,
      isDeleted: this.isDeleted,
    };

    axios
      .post("http://localhost:8000/trnenter", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Trn Type</h3>
              <div className="form-group">
                <label>AppName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="AppName"
                  onChange={(e) => (this.AppName = e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>TrnTypeID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TrnTypeID"
                  onChange={(e) => (this.TrnTypeID = e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>TrnTypeName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TrnTypeName"
                  onChange={(e) => (this.TrnTypeName = e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>TypeFor</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TypeFor"
                  onChange={(e) => (this.TypeFor = e.target.value)}
                />
              </div>

              <div className="form-group">
                <span className="option">
                  <label className="label-master">isValid</label>
                  <label className="option-label">Yes</label>
                  <input
                    type="radio"
                    value={1}
                    onChange={(e) => {
                      this.isValid = e.target.value;
                    }}
                    name="isValid"
                    className="option-button"
                  />
                  <label className="option-label">No</label>
                  <input
                    type="radio"
                    value={0}
                    onChange={(e) => {
                      this.isValid = e.target.value;
                    }}
                    name="isValid"
                    className="option-button"
                  />
                </span>
                <span className="option">
                  <label className="label-master">isDeleted</label>
                  <label className="option-label">Yes</label>
                  <input
                    type="radio"
                    value={1}
                    onChange={(e) => {
                      this.isDeleted = e.target.value;
                    }}
                    name="isDeleted"
                    className="option-button"
                  />
                  <label className="option-label">No</label>
                  <input
                    type="radio"
                    value={0}
                    onChange={(e) => {
                      this.isDeleted = e.target.value;
                    }}
                    name="isDeleted"
                    className="option-button"
                  />
                </span>
              </div>

              <div>
                <button className="btn btn-primary btn-block">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TrnType_Enter);
