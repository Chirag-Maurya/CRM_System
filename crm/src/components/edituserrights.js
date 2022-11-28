import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function UserRightsMaster_Edit(props) {
  const userrights = useSelector((state) => state.userrights);
  const { rightsName } = userrights;

  const [UserID, setUserID] = useState("");
  const [CmpnyCode, setCmpnyCode] = useState("");
  const [APP_NAME, setAPP_NAME] = useState("");
  const [MODULE_NAME, setMODULE_NAME] = useState("");
  const [RIGHTS_NAME, setRIGHTS_NAME] = useState("");
  const [RIGHTS_FIELD, setRIGHTS_FIELD] = useState("");
  const [RIGHTS_VALUE, setRIGHTS_VALUE] = useState("");
  const [RIGHTS_CMND, setRIGHTS_CMND] = useState("");
  const [RIGHTS_GIVEN_BY, setRIGHTS_GIVEN_BY] = useState("");
  const [LocationID, setLocationID] = useState("");
  const [RecordChanged, setRecordChanged] = useState("");
  const [isValid, setisValid] = useState("");
  const [isDeleted, setisDeleted] = useState("");

  const history = useHistory();

  const argu = props.match.params.UserID;

  useEffect(() => {
    axios.get("http://localhost:8000/getuserid2/" + argu).then((response) => {
      setUserID(response.data[0].UserID);
      setCmpnyCode(response.data[0].CmpnyCode);
      setAPP_NAME(response.data[0].APP_NAME);
      setMODULE_NAME(response.data[0].MODULE_NAME);
      setRIGHTS_NAME(response.data[0].RIGHTS_NAME);
      setRIGHTS_FIELD(response.data[0].RIGHTS_FIELD);
      setRIGHTS_VALUE(response.data[0].RIGHTS_VALUE);
      setRIGHTS_CMND(response.data[0].RIGHTS_CMND);
      setRIGHTS_GIVEN_BY(response.data[0].RIGHTS_GIVEN_BY);
      setLocationID(response.data[0].LocationID);
      setRecordChanged(response.data[0].RecordChanged);
      setisValid(response.data[0].isValid);
      setisDeleted(response.data[0].isDeleted);
    });
  }, [argu]);

  const editData = () => {
    axios.put("http://localhost:8000/upuserrightsmst/" + argu, {
      UserID,
      CmpnyCode,
      APP_NAME,
      MODULE_NAME,
      RIGHTS_NAME,
      RIGHTS_FIELD,
      RIGHTS_VALUE,
      RIGHTS_CMND,
      RIGHTS_GIVEN_BY,
      LocationID,
      RecordChanged,
      isValid,
      isDeleted,
    });
    history.push("/userrightsmst");
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={() => editData()}>
            <h3> Edit User Master</h3>
            <div className="form-class5">
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
                <label>APP_NAME</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="APP_NAME"
                  value={APP_NAME}
                  onChange={(e) => {
                    setAPP_NAME(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="APP_NAME"
                />
              </div>

              <div className="form-group">
                <label>MODULE_NAME</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="MODULE_NAME"
                  onChange={(e) => {
                    setMODULE_NAME(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="MODULE_NAME"
                  value={MODULE_NAME}
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_NAME</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_NAME"
                  onChange={(e) => {
                    setRIGHTS_NAME(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_NAME"
                  value={RIGHTS_NAME}
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_FIELD</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_FIELD"
                  onChange={(e) => {
                    setRIGHTS_FIELD(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_FIELD"
                  value={RIGHTS_FIELD}
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_VALUE</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_VALUE"
                  onChange={(e) => {
                    setRIGHTS_VALUE(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_VALUE"
                  value={RIGHTS_VALUE}
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_CMND</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_CMND"
                  onChange={(e) => {
                    setRIGHTS_CMND(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_CMND"
                  value={RIGHTS_CMND}
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_GIVEN_BY</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_GIVEN_BY"
                  onChange={(e) => {
                    setRIGHTS_GIVEN_BY(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_GIVEN_BY"
                  value={RIGHTS_GIVEN_BY}
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
            </div>
            <div className="form-group">
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
            <button className="btn btn-primary btn-block">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(UserRightsMaster_Edit);
