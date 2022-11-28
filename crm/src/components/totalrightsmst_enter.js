import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TotalRights_Enter extends Component {
  handleSubmit = () => {
    const data = {
      CmpnyCode: this.CmpnyCode,
      RID: this.RID,
      APP_NAME: this.APP_NAME,
      MODULE_NAME: this.MODULE_NAME,
      RIGHTS_NAME: this.RIGHTS_NAME,
      RIGHTS_FIELD: this.RIGHTS_FIELD,
      RIGHTS_VALUE: this.RIGHTS_VALUE,
      RIGHTS_CMND: this.RIGHTS_CMND,
      isActive: this.isActive,
      LocationID: this.LocationID,
      RecordChanged: this.RecordChanged,
      isValid: this.isValid,
      isDeleted: this.isDeleted,
      LicGrp: this.LicGrp,
      ModGrp: this.ModGrp,
      ModGrpDesc: this.ModGrpDesc,
    };

    axios
      .post("http://localhost:8000/trmenter", data)
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
              <h3>Total Rights Master</h3>
              <div className="form-class4">
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
                  <label>RID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RID"
                    onChange={(e) => (this.RID = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>APP_NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="APP_NAME"
                    onChange={(e) => (this.APP_NAME = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>MODULE_NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MODULE_NAME"
                    onChange={(e) => (this.MODULE_NAME = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>RIGHTS_NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RIGHTS_NAME"
                    onChange={(e) => (this.RIGHTS_NAME = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>RIGHTS_FIELD</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RIGHTS_FIELD"
                    onChange={(e) => (this.RIGHTS_FIELD = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>RIGHTS_VALUE</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RIGHTS_VALUE"
                    onChange={(e) => (this.RIGHTS_VALUE = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>RIGHTS_CMND</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RIGHTS_CMND"
                    onChange={(e) => (this.RIGHTS_CMND = e.target.value)}
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

                <div className="form-group">
                  <label>LicGrp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LicGrp"
                    onChange={(e) => (this.LicGrp = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>ModGrp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ModGrp"
                    onChange={(e) => (this.ModGrp = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>ModGrpDesc</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ModGrpDesc"
                    onChange={(e) => (this.ModGrpDesc = e.target.value)}
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
                  <label className="label-master">IsActive</label>
                  <label className="option-label">Yes</label>
                  <input
                    type="radio"
                    value={1}
                    onChange={(e) => {
                      this.IsActive = e.target.value;
                    }}
                    name="IsActive"
                    className="option-button"
                  />
                  <label className="option-label">No</label>
                  <input
                    type="radio"
                    value={0}
                    onChange={(e) => {
                      this.IsActive = e.target.value;
                    }}
                    name="IsActive"
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

              <button className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TotalRights_Enter);
