import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import dayjs from "dayjs";

class TicketMaster_Enter extends Component {
  handleSubmit = () => {
    const data = {
      CmpnyCode: this.CmpnyCode,
      DocNo: this.DocNo,
      DocDate: this.DocDate,
      DocType: this.DocType,
      AccCode: this.AccCode,
      AccName: this.AccName,
      OtherTradingName: this.OtherTradingName,
      MobileNo: this.MobileNo,
      Email: this.Email,
      RequestType: this.RequestType,
      Description: this.Description,
      ServiceCover: this.ServiceCover,
      ContractDetail: this.ContractDetail,
      BillingDetail: this.BillingDetail,
      OtherDetail: this.OtherDetail,
      AssignedTo: this.AssignedTo,
      VendorObservation: this.VendorObservation,
      Conclusion: this.Conclusion,
      StatusType: this.StatusType,
      RegistrationDate: this.RegistrationDate,
      ClosingDate: this.ClosingDate,
      RegisteredBy: this.RegisteredBy,
      ClosedBy: this.ClosedBy,
      CustomerAttachmentLinks: this.CustomerAttachmentLinks,
      VendorAttachmentLinks: this.VendorAttachmentLinks,
      RecordChanged: this.RecordChanged,
      DateEntered: this.DateEntered,
    };

    axios
      .post("http://localhost:8000/tcmenter", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const name = this.props.user.name;

    let d = Date(Date.now());
    let dateNow = d.toString();
    this.DateEntered = dayjs(dateNow).format("YYYY-MM-DD HH:mm:ss");
    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Ticket Master</h3>
              <div className="form-class5">
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
                  <label>DocNo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="DocNo"
                    onChange={(e) => (this.DocNo = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>DocDate</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DocDate"
                    onChange={(e) => (this.DocDate = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>DocType</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="DocType"
                    onChange={(e) => (this.DocType = e.target.value)}
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
                  <label>AccName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="AccName"
                    onChange={(e) => (this.AccName = e.target.value)}
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
                  <label>MobileNo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MobileNo"
                    onChange={(e) => (this.MobileNo = e.target.value)}
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
                  <label>RequestType</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RequestType"
                    onChange={(e) => (this.RequestType = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={(e) => (this.Description = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>ServiceCover</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ServiceCover"
                    onChange={(e) => (this.ServiceCover = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>ContractDetail</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ContractDetail"
                    onChange={(e) => (this.ContractDetail = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>BillingDetail</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="BillingDetail"
                    onChange={(e) => (this.BillingDetail = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>OtherDetail</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="OtherDetail"
                    onChange={(e) => (this.OtherDetail = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>AssignedTo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="AssignedTo"
                    onChange={(e) => (this.AssignedTo = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>VendorObservation</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="VendorObservation"
                    onChange={(e) => (this.VendorObservation = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Conclusion</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Conclusion"
                    onChange={(e) => (this.Conclusion = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>StatusType</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="StatusType"
                    onChange={(e) => (this.StatusType = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>RegistrationDate</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="RegistrationDate"
                    onChange={(e) => (this.RegistrationDate = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>ClosingDate</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="ClosingDate"
                    onChange={(e) => (this.ClosingDate = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>RegisteredBy</label>
                  <input
                    type="text"
                    value={name}
                    className="form-control"
                    placeholder="RegisteredBy"
                    onChange={(e) => (this.RegisteredBy = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>ClosedBy</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ClosedBy"
                    onChange={(e) => (this.ClosedBy = e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>CustomerAttachmentLinks</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CustomerAttachmentLinks"
                    onChange={(e) =>
                      (this.CustomerAttachmentLinks = e.target.value)
                    }
                  />
                </div>

                <div className="form-group">
                  <label>VendorAttachmentLinks</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="VendorAttachmentLinks"
                    onChange={(e) =>
                      (this.VendorAttachmentLinks = e.target.value)
                    }
                  />
                </div>

                <div className="form-group">
                  <label>DateEntered</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DateEntered"
                    value={dayjs(this.DateEntered).format("YYYY-MM-DD")}
                  />
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(withRouter(TicketMaster_Enter));
