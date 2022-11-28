import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import dayjs from "dayjs";

class CompanyMaster_Enter extends Component {
  handleSubmit = () => {
    const data = {
      CompanyCode: this.CompanyCode,
      CompanyName: this.CompanyName,
      Address1: this.Address1,
      Address2: this.Address2,
      PoBox: this.PoBox,
      City: this.City,
      Province: this.Province,
      Country: this.Country,
      Phone: this.Phone,
      Fax: this.Fax,
      Email: this.Email,
      RegistrationNo: this.RegistrationNo,
      VatNo: this.VatNo,
      PinNo: this.PinNo,
      BranchNo: this.BranchNo,
      BranchHq: this.BranchHq,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Current: this.Current,
      RunDate: this.RunDate,
      DateCreated: this.DateCreated,
      UserID: this.UserID,
      LocationID: this.LocationID,
    };

    axios
      .post("http://localhost:8000/cpmenter", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("You have successfully added a company");
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
              <h3>Company Master</h3>
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
                  <label>Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CompanyName"
                    onChange={(e) => (this.CompanyName = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Address1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address1"
                    onChange={(e) => (this.Address1 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Address2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address2"
                    onChange={(e) => (this.Address2 = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>PO Box</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PO Box"
                    onChange={(e) => (this.PoBox = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    onChange={(e) => (this.City = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Province</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Province"
                    onChange={(e) => (this.Province = e.target.value)}
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
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    onChange={(e) => (this.Phone = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Fax</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fax"
                    onChange={(e) => (this.Fax = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => (this.Email = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Registration No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RegistrationNo"
                    onChange={(e) => (this.RegistrationNo = e.target.value)}
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
                  <label>Pin No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pin No"
                    onChange={(e) => (this.PinNo = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Branch No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Branch No"
                    onChange={(e) => (this.BranchNo = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Branch Hq</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Branch Hq"
                    onChange={(e) => (this.BranchHq = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Start Date"
                    onChange={(e) => (this.StartDate = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="End Date"
                    onChange={(e) => (this.EndDate = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Current</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Current"
                    onChange={(e) => (this.Current = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Run Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Run Date"
                    onChange={(e) => (this.RunDate = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Date Created</label>
                  <input
                    type="date"
                    className="form-control"
                    value={dayjs(this.DateCreated).format("YYYY-MM-DD")}
                  />
                </div>

                <div className="form-group">
                  <label>User ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User ID"
                    onChange={(e) => (this.UserID = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Location ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location ID"
                    onChange={(e) => (this.LocationID = e.target.value)}
                  />
                </div>
              </div>

              <button className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyMaster_Enter);
