import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

function CompanyMaster_Edit(props) {
  const userrights = useSelector((state) => state.userrights);
  const { rightsName } = userrights;

  const [CmpnyCode, setCmpnyCode] = useState("");
  const [CmpnyName, setCmpnyName] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [PoBox, setPoBox] = useState("");
  const [City, setCity] = useState("");
  const [Province, setProvince] = useState("");
  const [Country, setCountry] = useState("");
  const [Phone, setPhone] = useState("");
  const [Fax, setFax] = useState("");
  const [Email, setEmail] = useState("");
  const [RegistrationNo, setRegistrationNo] = useState("");
  const [VatNo, setVatNo] = useState("");
  const [PinNo, setPinNo] = useState("");
  const [BranchNo, setBranchNo] = useState("");
  const [BranchHq, setBranchHq] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [Current, setCurrent] = useState("");
  const [RunDate, setRunDate] = useState("");
  const [DateCreated, setDateCreated] = useState(new Date());
  const [UserID, setUserID] = useState("");
  const [LocationID, setLocationID] = useState("");

  const history = useHistory();

  const argu = props.match.params.CmpnyCode;

  useEffect(() => {
    axios.get("http://localhost:8000/getcomcode/" + argu).then((response) => {
      setCmpnyCode(response.data[0].CmpnyCode);
      setCmpnyName(response.data[0].CmpnyName);
      setAddress1(response.data[0].Address1);
      setAddress2(response.data[0].Address2);
      setPoBox(response.data[0].PoBox);
      setCity(response.data[0].City);
      setProvince(response.data[0].Province);
      setCountry(response.data[0].Country);
      setPhone(response.data[0].Phone);
      setFax(response.data[0].Fax);
      setEmail(response.data[0].Email);
      setRegistrationNo(response.data[0].RegistrationNo);
      setVatNo(response.data[0].VatNo);
      setPinNo(response.data[0].PinNo);
      setBranchNo(response.data[0].BranchNo);
      setBranchHq(response.data[0].BranchHq);
      setStartDate(response.data[0].StartDate);
      setEndDate(response.data[0].EndDate);
      setCurrent(response.data[0].Current);
      setRunDate(response.data[0].RunDate);
      setDateCreated(response.data[0].DateCreated);
      setUserID(response.data[0].UserID);
      setLocationID(response.data[0].LocationID);
    });
  }, [argu]);

  const editData = () => {
    axios.put("http://localhost:8000/upcompanymst/" + argu, {
      CmpnyCode,
      CmpnyName,
      Address1,
      Address2,
      PoBox,
      City,
      Province,
      Country,
      Phone,
      Fax,
      Email,
      RegistrationNo,
      VatNo,
      PinNo,
      BranchNo,
      BranchHq,
      StartDate,
      EndDate,
      Current,
      RunDate,
      DateCreated,
      UserID,
      LocationID,
    });
    {
      rightsName === "Admin"
        ? history.push("/companymst")
        : history.push("/usercompanymst/:CompanyCode");
    }
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={() => editData()}>
            <h3> Edit Company Master</h3>
            <div className="form-class5">
              <div className="form-group">
                <label>Company Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CompanyCode"
                  value={CmpnyCode}
                  onChange={(e) => {
                    setCmpnyCode(e.target.value);
                  }}
                  name="CmpnyCode"
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CompanyName"
                  value={CmpnyName}
                  onChange={(e) => {
                    setCmpnyName(e.target.value);
                  }}
                  name="CmpnyName"
                />
              </div>

              <div className="form-group">
                <label>Address1</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address1"
                  value={Address1}
                  onChange={(e) => {
                    setAddress1(e.target.value);
                  }}
                  name="Address1"
                />
              </div>

              <div className="form-group">
                <label>Address2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address2"
                  onChange={(e) => {
                    setAddress2(e.target.value);
                  }}
                  name="Address2"
                  value={Address2}
                />
              </div>

              <div className="form-group">
                <label>PO Box</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="PO Box"
                  onChange={(e) => {
                    setPoBox(e.target.value);
                  }}
                  name="PoBox"
                  value={PoBox}
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  name="City"
                  value={City}
                />
              </div>

              <div className="form-group">
                <label>Province</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Province"
                  onChange={(e) => {
                    setProvince(e.target.value);
                  }}
                  name="Province"
                  value={Province}
                />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  name="Country"
                  value={Country}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  name="Phone"
                  value={Phone}
                />
              </div>

              <div className="form-group">
                <label>Fax</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fax"
                  onChange={(e) => {
                    setFax(e.target.value);
                  }}
                  name="Fax"
                  value={Fax}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="Email"
                  value={Email}
                />
              </div>

              <div className="form-group">
                <label>Registration No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RegistrationNo"
                  onChange={(e) => {
                    setRegistrationNo(e.target.value);
                  }}
                  name="RegistrationNo"
                  value={RegistrationNo}
                />
              </div>

              <div className="form-group">
                <label>VAT No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="VAT No"
                  onChange={(e) => {
                    setVatNo(e.target.value);
                  }}
                  name="VatNo"
                  value={VatNo}
                />
              </div>

              <div className="form-group">
                <label>Pin No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pin No"
                  onChange={(e) => {
                    setPinNo(e.target.value);
                  }}
                  name="PinNo"
                  value={PinNo}
                />
              </div>

              <div className="form-group">
                <label>Branch No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Branch No"
                  onChange={(e) => {
                    setBranchNo(e.target.value);
                  }}
                  name="BranchNo"
                  value={BranchNo}
                />
              </div>

              <div className="form-group">
                <label>Branch Hq</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Branch Hq"
                  onChange={(e) => {
                    setBranchHq(e.target.value);
                  }}
                  name="BranchHq"
                  value={BranchHq}
                />
              </div>

              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Start Date"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  name="StartDate"
                  value={dayjs(StartDate).format("YYYY-MM-DD")}
                />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="End Date"
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  name="EndDate"
                  value={dayjs(EndDate).format("YYYY-MM-DD")}
                />
              </div>

              <div className="form-group">
                <label>Current</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Current"
                  onChange={(e) => {
                    setCurrent(e.target.value);
                  }}
                  name="Current"
                  value={Current}
                />
              </div>

              <div className="form-group">
                <label>Run Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Run Date"
                  onChange={(e) => {
                    setRunDate(e.target.value);
                  }}
                  name="RunDate"
                  value={dayjs(RunDate).format("YYYY-MM-DD")}
                />
              </div>

              <div className="form-group">
                <label>Date Created</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date Created"
                  name="DateCreated"
                  value={dayjs(DateCreated).format("YYYY-MM-DD")}
                />
              </div>

              <div className="form-group">
                <label>User ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User ID"
                  onChange={(e) => {
                    setUserID(e.target.value);
                  }}
                  name="UserID"
                  value={UserID}
                />
              </div>

              <div className="form-group">
                <label>Location ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location ID"
                  onChange={(e) => {
                    setLocationID(e.target.value);
                  }}
                  name="LocationID"
                  value={LocationID}
                />
              </div>
            </div>
            <button className="btn btn-primary btn-block">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CompanyMaster_Edit);
