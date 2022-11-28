import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import dayjs from "dayjs";

class CustomerMaster_Enter extends Component {
  handleSubmit = (e) => {
    const data = {
      CompanyCode: this.CompanyCode,
      AccCode: this.AccCode,
      AccType: this.AccType,
      AccName: this.AccName,
      Address: this.Address,
      ContactPerson: this.ContactPerson,
      PhoneFax: this.PhoneFax,
      PriceId: this.PriceId,
      PinNo: this.PinNo,
      VatNo: this.VatNo,
      SmCode: this.SmCode,
      AreaID: this.AreaID,
      RouteID: this.RouteID,
      TownID: this.TownID,
      BizType: this.BizType,
      AccStatus: this.AccStatus,
      DateCreated: this.DateCreated,
      UserID: this.UserID,
      CardNo: this.CardNo,
      OtherTradingName: this.OtherTradingName,
      MobileNo: this.MobileNo,
      EmailAdd: this.EmailAdd,
      Add1: this.Add1,
      Add2: this.Add2,
      Add3: this.Add3,
      Add4: this.Add4,
      Add5: this.Add5,
      PoBox: this.PoBox,
      CityTown: this.CityTown,
      StateProvince: this.StateProvince,
      Country: this.Country,
      Tele1: this.Tele1,
      Fax1: this.Fax1,
      Note: this.Note,
      SiteCode: this.SiteCode,
      SiteName: this.SiteName,
      RecordChanged: this.RecordChanged,
      LocationID: this.LocationID,
      BalancePoints: this.BalancePoints,
      isValid: this.isValid,
      isDeleted: this.isDeleted,
      WHPercent: this.WHPercent,
    };

    axios
      .post("http://localhost:8000/ctmenter", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let d = Date(Date.now());
    let dateNow = d.toString();
    this.DateCreated = dayjs(dateNow).format("YYYY-MM-DD HH:mm:ss");
    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Customer Master</h3>
              <div className="form-class5">
                <div className="form-group">
                  <label>Company Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CompanyCode"
                    onChange={(e) => (this.CompanyCode = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>AccCode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="AccCode"
                    onChange={(e) => (this.AccCode = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>AccType</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="AccType"
                    onChange={(e) => (this.AccType = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>AccName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="AccName"
                    onChange={(e) => (this.AccName = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    onChange={(e) => (this.Address = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>ContactPerson</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ContactPerson"
                    onChange={(e) => (this.ContactPerson = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>PhoneFax</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PhoneFax"
                    onChange={(e) => (this.PhoneFax = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>PriceId</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PriceId"
                    onChange={(e) => (this.PriceId = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>PinNo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PinNo"
                    onChange={(e) => (this.PinNo = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>VAT No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="VAT No"
                    onChange={(e) => (this.VatNo = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>SmCode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SmCode"
                    onChange={(e) => (this.SmCode = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>AreaID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="AreaID"
                    onChange={(e) => (this.AreaID = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>RouteID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RouteID"
                    onChange={(e) => (this.RouteID = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>TownID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="TownID"
                    onChange={(e) => (this.TownID = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>BizType</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="BizType"
                    onChange={(e) => (this.BizType = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <span className="option">
                    <label className="label-master">AccStatus</label>
                    <label className="option-label">Active</label>
                    <input
                      type="radio"
                      value={1}
                      onChange={(e) => {
                        this.AccStatus = e.target.value;
                      }}
                      name="AccStatus"
                      className="option-button"
                    />
                    <label className="option-label">Inactive</label>
                    <input
                      type="radio"
                      value={0}
                      onChange={(e) => {
                        this.AccStatus = e.target.value;
                      }}
                      name="AccStatus"
                      className="option-button"
                    />
                  </span>
                </div>

                <div className="form-group">
                  <label>DateCreated</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DateCreated"
                    value={dayjs(this.DateCreated).format("YYYY-MM-DD")}
                  />
                </div>

                <div className="form-group">
                  <label>UserID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UserID"
                    onChange={(e) => (this.UserID = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>CardNo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CardNo"
                    onChange={(e) => (this.CardNo = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>OtherTradingName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="OtherTradingName"
                    onChange={(e) => (this.OtherTradingName = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>SmCode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SmCode"
                    onChange={(e) => (this.SmCode = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>MobileNo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MobileNo"
                    onChange={(e) => (this.MobileNo = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>EmailAdd</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="EmailAdd"
                    onChange={(e) => (this.EmailAdd = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Add1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add1"
                    onChange={(e) => (this.Add1 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Add2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add2"
                    onChange={(e) => (this.Add2 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Add3</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add3"
                    onChange={(e) => (this.Add3 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Add4</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add4"
                    onChange={(e) => (this.Add4 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Add5</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add5"
                    onChange={(e) => (this.Add5 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>PoBox</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PoBox"
                    onChange={(e) => (this.PoBox = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>CityTown</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CityTown"
                    onChange={(e) => (this.CityTown = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>StateProvince</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="StateProvince"
                    onChange={(e) => (this.StateProvince = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    onChange={(e) => (this.Country = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Tele1</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Tele1"
                    onChange={(e) => (this.Tele1 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Fax1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fax1"
                    onChange={(e) => (this.Fax1 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Note</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Note"
                    onChange={(e) => (this.Note = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>SiteCode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SiteCode"
                    onChange={(e) => (this.SiteCode = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>SiteName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SiteName"
                    onChange={(e) => (this.SiteName = e.target.value)}
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
                  <label>BalancePoints</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="BalancePoints"
                    onChange={(e) => (this.BalancePoints = e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>WHPercent</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="WHPercent"
                    onChange={(e) => (this.WHPercent = e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <span className="option">
                  <label className="label-master">RecordChanged</label>
                  <label className="option-label">Yes</label>
                  <input
                    type="radio"
                    className="form-control"
                    value={1}
                    onChange={(e) => (this.RecordChanged = e.target.value)}
                    name="RecordChanged"
                    className="option-button"
                  />
                  <label className="option-label">No</label>
                  <input
                    type="radio"
                    className="form-control"
                    value={0}
                    onChange={(e) => (this.RecordChanged = e.target.value)}
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
                    onChange={(e) => (this.isValid = e.target.value)}
                    name="isValid"
                    className="option-button"
                  />
                  <label className="option-label">No</label>
                  <input
                    type="radio"
                    value={0}
                    onChange={(e) => (this.isValid = e.target.value)}
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
                    onChange={(e) => (this.isDeleted = e.target.value)}
                    name="isDeleted"
                    className="option-button"
                  />
                  <label className="option-label">No</label>
                  <input
                    type="radio"
                    value={0}
                    onChange={(e) => (this.isDeleted = e.target.value)}
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

export default withRouter(CustomerMaster_Enter);
