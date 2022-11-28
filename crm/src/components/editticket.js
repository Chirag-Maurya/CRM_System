import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function TicketMaster_Edit(props) {
  const user = useSelector((state) => state.user);
  const { name } = user;

  const userrights = useSelector((state) => state.userrights);
  const { rightsName } = userrights;

  let d = Date(Date.now());
  let dateNow = d.toString();

  const [CmpnyCode, setCmpnyCode] = useState("");
  const [DocNo, setDocNo] = useState("");
  const [DocDate, setDocDate] = useState("");
  const [DocType, setDocType] = useState("");
  const [AccCode, setAccCode] = useState("");
  const [AccName, setAccName] = useState("");
  const [OtherTradingName, setOtherTradingName] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Email, setEmail] = useState("");
  const [RequestType, setRequestType] = useState("");
  const [Description, setDescription] = useState("");
  const [ServiceCover, setServiceCover] = useState("");
  const [ContractDetail, setContractDetail] = useState("");
  const [BillingDetail, setBillingDetail] = useState("");
  const [OtherDetail, setOtherDetail] = useState("");
  const [AssignedTo, setAssignedTo] = useState("");
  const [VendorObservation, setVendorObservation] = useState("");
  const [Conclusion, setConclusion] = useState("");
  const [StatusType, setStatusType] = useState("");
  const [RegistrationDate, setRegistrationDate] = useState("");
  const [ClosingDate, setClosingDate] = useState("");
  const [RegisteredBy, setRegisteredBy] = useState("");
  const [ClosedBy, setClosedBy] = useState("");
  const [CustomerAttachmentLinks, setCustomerAttachmentLinks] = useState("");
  const [VendorAttachmentLinks, setVendorAttachmentLinks] = useState("");
  const [RecordChanged, setRecordChanged] = useState("");
  const [DateEntered, setDateEntered] = useState("");

  const history = useHistory();

  const argu = props.match.params.DocNo;

  useEffect(() => {
    axios.get("http://localhost:8000/getdocno/" + argu).then((response) => {
      setCmpnyCode(response.data[0].CmpnyCode);
      setDocNo(response.data[0].DocNo);
      setDocType(response.data[0].DocType);
      setDocDate(response.data[0].DocDate);
      setAccCode(response.data[0].AccCode);
      setAccName(response.data[0].AccName);
      setOtherTradingName(response.data[0].OtherTradingName);
      setMobileNo(response.data[0].MobileNo);
      setEmail(response.data[0].Email);
      setRequestType(response.data[0].RequestType);
      setDescription(response.data[0].Description);
      setServiceCover(response.data[0].SeviceCover);
      setContractDetail(response.data[0].ContractDetail);
      setBillingDetail(response.data[0].BillingDetail);
      setOtherDetail(response.data[0].OtherDetail);
      setAssignedTo(response.data[0].AssignedTo);
      setVendorObservation(response.data[0].VendorObservation);
      setConclusion(response.data[0].Conclusion);
      setStatusType(response.data[0].StatusType);
      setRegistrationDate(response.data[0].RegistrationDate);
      {
        response.data[0].ClosingDate === null
          ? setClosingDate(dayjs(dateNow).format("YYYY-MM-DD HH:mm:ss"))
          : setClosingDate(response.data[0].ClosingDate);
      }
      setRegisteredBy(response.data[0].RegisteredBy);
      setClosedBy(response.data[0].ClosedBy);
      setCustomerAttachmentLinks(response.data[0].CustomerAttachmentLinks);
      setVendorAttachmentLinks(response.data[0].VendorAttachmentLinks);
      setRecordChanged(response.data[0].RecordChanged);
      setDateEntered(response.data[0].DateEntered);
      console.log(response.data);
    });
  }, [argu, dateNow]);

  const editData = () => {
    axios.put("http://localhost:8000/upticketmst/" + argu, {
      CmpnyCode,
      DocNo,
      DocDate,
      DocType,
      AccCode,
      AccName,
      OtherTradingName,
      MobileNo,
      Email,
      RequestType,
      Description,
      ServiceCover,
      ContractDetail,
      BillingDetail,
      OtherDetail,
      AssignedTo,
      VendorObservation,
      Conclusion,
      StatusType,
      RegistrationDate,
      ClosingDate,
      RegisteredBy,
      ClosedBy,
      CustomerAttachmentLinks,
      VendorAttachmentLinks,
      RecordChanged,
      DateEntered,
    });
    {
      rightsName === "Admin"
        ? history.push("/ticketmst")
        : history.push("/userticketmst/:CompanyCode");
    }
  };

  const handleClose = () => {
    setClosedBy(name);
    setClosingDate(dayjs(dateNow).format("YYYY-MM-DD HH:mm:ss"));
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={() => editData()}>
            <h3>Ticket Master</h3>
            <div className="form-class5">
              <div className="form-group">
                <label>CmpnyCode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CmpnyCode"
                  value={CmpnyCode}
                  onChange={(e) => {
                    setCmpnyCode(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="CmpnyCode"
                />
              </div>

              <div className="form-group">
                <label>DocNo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="DocNo"
                  value={DocNo}
                  onChange={(e) => {
                    setDocNo(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="DocNo"
                />
              </div>

              <div className="form-group">
                <label>DocDate</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="DocDate"
                  value={dayjs(DocDate).format("YYYY-MM-DD")}
                  onChange={(e) => {
                    setDocDate(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="DocDate"
                />
              </div>

              <div className="form-group">
                <label>DocType</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="DocType"
                  value={DocType}
                  onChange={(e) => {
                    setDocType(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="DocType"
                />
              </div>

              <div className="form-group">
                <label>AccCode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="AccCode"
                  value={AccCode}
                  onChange={(e) => {
                    setAccCode(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="AccCode"
                />
              </div>

              <div className="form-group">
                <label>AccName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="AccName"
                  value={AccName}
                  onChange={(e) => {
                    setAccName(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="AccName"
                />
              </div>

              <div className="form-group">
                <label>OtherTradingName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="OtherTradingName"
                  value={OtherTradingName}
                  onChange={(e) => {
                    setOtherTradingName(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="OtherTradingName"
                />
              </div>

              <div className="form-group">
                <label>MobileNo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="MobileNo"
                  value={MobileNo}
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="MobileNo"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Email"
                />
              </div>

              <div className="form-group">
                <label>RequestType</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RequestType"
                  value={RequestType}
                  onChange={(e) => {
                    setRequestType(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RequestType"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  value={Description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Description"
                />
              </div>

              <div className="form-group">
                <label>ServiceCover</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ServiceCover"
                  value={ServiceCover}
                  onChange={(e) => {
                    setServiceCover(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="ServiceCover"
                />
              </div>

              <div className="form-group">
                <label>ContractDetail</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ContractDetail"
                  value={ContractDetail}
                  onChange={(e) => {
                    setContractDetail(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="ContractDetail"
                />
              </div>

              <div className="form-group">
                <label>BillingDetail</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="BillingDetail"
                  value={BillingDetail}
                  onChange={(e) => {
                    setBillingDetail(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="BillingDetail"
                />
              </div>

              <div className="form-group">
                <label>OtherDetail</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="OtherDetail"
                  value={OtherDetail}
                  onChange={(e) => {
                    setOtherDetail(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="OtherDetail"
                />
              </div>

              <div className="form-group">
                <label>AssignedTo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="AssignedTo"
                  value={AssignedTo}
                  onChange={(e) => {
                    setAssignedTo(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="AssignedTo"
                />
              </div>

              <div className="form-group">
                <label>VendorObservation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="VendorObservation"
                  value={VendorObservation}
                  onChange={(e) => {
                    setVendorObservation(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="VendorObservation"
                />
              </div>

              <div className="form-group">
                <label>Conclusion</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Conclusion"
                  value={Conclusion}
                  onChange={(e) => {
                    setConclusion(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Conclusion"
                />
              </div>

              <div className="form-group">
                <label>StatusType</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="StatusType"
                  value={StatusType}
                  onChange={(e) => {
                    setStatusType(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="StatusType"
                />
              </div>

              <div className="form-group">
                <label>RegistrationDate</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="RegistrationDate"
                  value={dayjs(RegistrationDate).format("YYYY-MM-DD")}
                  onChange={(e) => {
                    setRegistrationDate(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RegistrationDate"
                />
              </div>

              <div className="form-group">
                <label>ClosingDate</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="ClosingDate"
                  value={dayjs(ClosingDate).format("YYYY-MM-DD")}
                  name="ClosingDate"
                />
              </div>

              <div className="form-group">
                <label>RegisteredBy</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RegisteredBy"
                  value={RegisteredBy}
                  name="RegisteredBy"
                />
              </div>

              <div className="form-group">
                <label>ClosedBy</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ClosedBy"
                  value={name}
                  name="ClosedBy"
                />
                {ClosedBy === null ? (
                  <button onClick={() => handleClose()}>Close Ticket</button>
                ) : null}
              </div>

              <div className="form-group">
                <label>CustomerAttachmentLinks</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CustomerAttachmentLinks"
                  value={CustomerAttachmentLinks}
                  onChange={(e) => {
                    setCustomerAttachmentLinks(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="CustomerAttachmentLinks"
                />
              </div>

              <div className="form-group">
                <label>VendorAttachmentLinks</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="VendorAttachmentLinks"
                  value={VendorAttachmentLinks}
                  onChange={(e) => {
                    setVendorAttachmentLinks(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="VendorAttachmentLinks"
                />
              </div>

              <div className="form-group">
                <label>DateEntered</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="DateEntered"
                  value={dayjs(DateEntered).format("YYYY-MM-DD")}
                  name="DateEntered"
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
                      {
                        rightsName === "Admin"
                          ? setRecordChanged(e.target.value)
                          : setRecordChanged(RecordChanged);
                      }
                    }}
                    name="RecordChanged"
                    className="option-button"
                    checked={RecordChanged == 1}
                  />
                  <label className="option-label">No</label>
                  <input
                    type="radio"
                    value={0}
                    onChange={(e) => {
                      {
                        rightsName === "Admin"
                          ? setRecordChanged(e.target.value)
                          : setRecordChanged(RecordChanged);
                      }
                    }}
                    name="RecordChanged"
                    className="option-button"
                    checked={RecordChanged == 0}
                  />
                </span>
              </div>
            </div>

            <button className="btn btn-primary btn-block">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(TicketMaster_Edit);
