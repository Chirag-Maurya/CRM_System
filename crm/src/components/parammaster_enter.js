import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ParamMaster_Enter extends Component {
  handleSubmit = () => {
    const data = {
      ParamID: this.ParamID,
      CmpnyCode: this.CmpnyCode,
      AppName: this.AppName,
      ModuleName: this.ModuleName,
      Parameters: this.Parameters,
      ParamValue: this.ParamValue,
      RecordChanged: this.RecordChanged,
      LocationID: this.LocationID,
    };

    axios
      .post("http://localhost:8000/prmenter", data)
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
              <h3>Param Master</h3>
              <div className="form-class4">
                <div className="form-group">
                  <label>ParamID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ParamID"
                    onChange={(e) => (this.ParamID = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>CmpnyCode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CmpnyCode"
                    onChange={(e) => (this.CmpnyCode = e.target.value)}
                  />
                </div>

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
                  <label>ModuleName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ModuleName"
                    onChange={(e) => (this.ModuleName = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Parameters</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Parameters"
                    onChange={(e) => (this.Parameters = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>ParamValue</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ParamValue"
                    onChange={(e) => (this.ParamValue = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>LocationID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LocationID"
                    onChange={(e) => (this.LocationID = e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <span className="option">
                  <label className="label-master">RecordChanged</label>
                  <label className="option-label">Yes</label>
                  <input
                    type="radio"
                    value={1}
                    onChange={(e) => {
                      this.RecordChanged = e.target.value;
                    }}
                    name="RecordChanged"
                    className="option-button"
                  />
                  <label className="option-label">No</label>
                  <input
                    type="radio"
                    value={0}
                    onChange={(e) => {
                      this.RecordChanged = e.target.value;
                    }}
                    name="RecordChanged"
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

export default withRouter(ParamMaster_Enter);
