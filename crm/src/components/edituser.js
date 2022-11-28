import axios from "axios";
import dayjs from "dayjs";
import { React, useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function UserMaster_Edit(props) {
  const userrights = useSelector((state) => state.userrights);
  const { rightsName } = userrights;

  const [CmpnyCode, setCmpnyCode] = useState("");
  const [UserID, setUserID] = useState("");
  const [UserFullName, setUserFullName] = useState("");
  const [UserDetail, setUserDetail] = useState("");
  const [LoginID, setLoginID] = useState("");
  const [Password, setPassword] = useState("");
  const [UserPin, setUserPin] = useState("");
  const [UserEmailID, setUserEmailID] = useState("");
  const [UserFP, setUserFP] = useState({});
  const [Photo, setPhoto] = useState({});
  const [IsActive, setIsActive] = useState("");
  const [LicCount, setLicCount] = useState("");
  const [DateCreated, setDateCreated] = useState("");
  const [CreatedBy, setCreatedBy] = useState("");
  const [RecordChanged, setRecordChanged] = useState("");
  const [LocationID, setLocationID] = useState("");
  const [isValid, setisValid] = useState("");
  const [isDeleted, setisDeleted] = useState("");

  const history = useHistory();

  const argu = props.match.params.UserID;

  useEffect(() => {
    axios.get("http://localhost:8000/getuserid/" + argu).then((response) => {
      setCmpnyCode(response.data[0].CmpnyCode);
      setUserID(response.data[0].UserID);
      setUserFullName(response.data[0].UserFullName);
      setUserDetail(response.data[0].UserDetail);
      setLoginID(response.data[0].LoginID);
      setPassword(response.data[0].Password);
      setUserPin(response.data[0].UserPin);
      setUserEmailID(response.data[0].UserEmailID);
      setUserFP(response.data[0].UserFP);
      setIsActive(response.data[0].IsActive);
      setLicCount(response.data[0].LicCount);
      setDateCreated(response.data[0].DateCreated);
      setCreatedBy(response.data[0].CreatedBy);
      setRecordChanged(response.data[0].RecordChanged);
      setLocationID(response.data[0].LocationID);
      setisValid(response.data[0].isValid);
      setisDeleted(response.data[0].isDeleted);
    });
  }, [argu]);

  const editData = () => {
    axios.put("http://localhost:8000/upusermst/" + argu, {
      CmpnyCode,
      UserID,
      UserFullName,
      UserDetail,
      LoginID,
      Password,
      UserPin,
      UserEmailID,
      UserFP,
      IsActive,
      LicCount,
      DateCreated,
      CreatedBy,
      RecordChanged,
      LocationID,
      isValid,
      isDeleted,
    });
    {
      rightsName === "Admin"
        ? history.push("/usermst")
        : history.push("/userprofile");
    }
  };

  const uploadPhoto = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", Photo);
    fetch("http://localhost:8000/uploadphoto/" + argu, {
      method: "PUT",
      body: formData,
    });
  };

  const uploadFP = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("FP", UserFP);
    fetch("http://localhost:8000/uploadfp/" + argu, {
      method: "PUT",
      body: formData,
    });
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form enctype="multipart/form-data">
            <h3> Edit User Master</h3>
            <div className="form-class4">
              <div className="form-group">
                <label>Company Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CompanyCode"
                  value={CmpnyCode}
                  onChange={(e) => {
                    setCmpnyCode(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="CmpnyCode"
                />
              </div>

              <div className="form-group">
                <label>UserID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserID"
                  value={UserID}
                  onChange={(e) => {
                    setUserID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="UserID"
                />
              </div>

              <div className="form-group">
                <label>UserFullName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserFullName"
                  value={UserFullName}
                  onChange={(e) => {
                    setUserFullName(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="UserFullName"
                />
              </div>

              <div className="form-group">
                <label>UserDetail</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserDetail"
                  onChange={(e) => {
                    setUserDetail(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="UserDetail"
                  value={UserDetail}
                />
              </div>

              <div className="form-group">
                <label>LoginID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="LoginID"
                  onChange={(e) => {
                    setLoginID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="LoginID"
                  value={LoginID}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Password"
                  value={Password}
                />
              </div>

              <div className="form-group">
                <label>UserPin</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserPin"
                  onChange={(e) => {
                    setUserPin(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="UserPin"
                  value={UserPin}
                />
              </div>

              <div className="form-group">
                <label>UserEmailID</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="UserEmailID"
                  onChange={(e) => {
                    setUserEmailID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="UserEmailID"
                  value={UserEmailID}
                />
              </div>

              <div className="form-group">
                <label>UserFP</label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="UserFP"
                  onChange={(e) => {
                    setUserFP(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="UserFP"
                />
                <button onClick={(event) => uploadFP(event)}>Upload</button>
              </div>

              <div className="form-group">
                <label>Photo</label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="Photo"
                  onChange={(e) => {
                    setPhoto(e.target.files[0]);
                    setRecordChanged(1);
                  }}
                  id="Photo"
                  name="Photo"
                />
                <button onClick={(event) => uploadPhoto(event)}>Upload</button>
              </div>

              <div className="form-group">
                <label>LicCount</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="LicCount"
                  onChange={(e) => {
                    setLicCount(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="LicCount"
                  value={LicCount}
                />
              </div>

              <div className="form-group">
                <label>DateCreated</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="DateCreated"
                  name="DateCreated"
                  value={dayjs(DateCreated).format("YYYY-MM-DD")}
                />
              </div>

              <div className="form-group">
                <label>CreatedBy</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CreatedBy"
                  onChange={(e) => {
                    setCreatedBy(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="CreatedBy"
                  value={CreatedBy}
                />
              </div>

              <div className="form-group">
                <label>LocationID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="LocationID"
                  onChange={(e) => {
                    setLocationID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="LocationID"
                  value={LocationID}
                />
              </div>
              <div className="form-group"></div>
            </div>

            <div className="form-group">
              <span className="option">
                <label className="label-master">IsActive</label>
                <label className="option-label">Yes</label>
                <input
                  type="radio"
                  className="form-control"
                  value={1}
                  onChange={(e) => {
                    setIsActive(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="IsActive"
                  className="option-button"
                  checked={IsActive == 1}
                />
                <label className="option-label">No</label>
                <input
                  type="radio"
                  className="form-control"
                  value={0}
                  onChange={(e) => {
                    setIsActive(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="IsActive"
                  className="option-button"
                  checked={IsActive == 0}
                />
              </span>
              <span className="option">
                <label className="label-master">RecordChanged</label>
                <label className="option-label">Yes</label>
                <input
                  type="radio"
                  className="form-control"
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
                  className="form-control"
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
              <span className="option">
                <label className="label-master">isValid</label>
                <label className="option-label">Yes</label>
                <input
                  type="radio"
                  value={1}
                  onChange={(e) => {
                    setisValid(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="isValid"
                  className="option-button"
                  checked={isValid == 1}
                />
                <label className="option-label">No</label>
                <input
                  type="radio"
                  value={0}
                  onChange={(e) => {
                    setisValid(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="isValid"
                  className="option-button"
                  checked={isValid == 0}
                />
              </span>
              <span className="option">
                <label className="label-master">isDeleted</label>
                <label className="option-label">Yes</label>
                <input
                  type="radio"
                  value={1}
                  onChange={(e) => {
                    setisDeleted(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="isDeleted"
                  className="option-button"
                  checked={isDeleted == 1}
                />
                <label className="option-label">No</label>
                <input
                  type="radio"
                  value={0}
                  onChange={(e) => {
                    setisDeleted(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="isDeleted"
                  className="option-button"
                  checked={isDeleted == 0}
                />
              </span>
            </div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => editData()}
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(UserMaster_Edit);
