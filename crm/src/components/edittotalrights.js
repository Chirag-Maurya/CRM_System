import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function TotalRightsMaster_Edit(props) {
  const userrights = useSelector((state) => state.userrights);
  const { rightsName } = userrights;

  const [CmpnyCode, setCmpnyCode] = useState("");
  const [RID, setRID] = useState("");
  const [APP_NAME, setAPP_NAME] = useState("");
  const [MODULE_NAME, setMODULE_NAME] = useState("");
  const [RIGHTS_NAME, setRIGHTS_NAME] = useState("");
  const [RIGHTS_FIELD, setRIGHTS_FIELD] = useState("");
  const [RIGHTS_VALUE, setRIGHTS_VALUE] = useState("");
  const [RIGHTS_CMND, setRIGHTS_CMND] = useState("");
  const [IsActive, setIsActive] = useState();
  const [LocationID, setLocationID] = useState("");
  const [RecordChanged, setRecordChanged] = useState();
  const [isValid, setisValid] = useState();
  const [isDeleted, setisDeleted] = useState();
  const [LicGrp, setLicGrp] = useState("");
  const [ModGrp, setModGrp] = useState("");
  const [ModGrpDesc, setModGrpDesc] = useState("");

  const history = useHistory();

  const argu = props.match.params.RID;

  useEffect(() => {
    axios.get("http://localhost:8000/getrid/" + argu).then((response) => {
      setCmpnyCode(response.data[0].CmpnyCode);
      setRID(response.data[0].RID);
      setAPP_NAME(response.data[0].APP_NAME);
      setMODULE_NAME(response.data[0].MODULE_NAME);
      setRIGHTS_NAME(response.data[0].RIGHTS_NAME);
      setRIGHTS_FIELD(response.data[0].RIGHTS_FIELD);
      setRIGHTS_VALUE(response.data[0].RIGHTS_VALUE);
      setRIGHTS_CMND(response.data[0].RIGHTS_CMND);
      setIsActive(response.data[0].IsActive);
      setLocationID(response.data[0].LocationID);
      setRecordChanged(response.data[0].RecordChanged);
      setisValid(response.data[0].isValid);
      setisDeleted(response.data[0].isDeleted);
      setLicGrp(response.data[0].LicGrp);
      setModGrp(response.data[0].ModGrp);
      setModGrpDesc(response.data[0].ModGrpDesc);
    });
  }, [argu]);

  const editData = () => {
    axios.put("http://localhost:8000/uptrmst/" + argu, {
      CmpnyCode,
      RID,
      APP_NAME,
      MODULE_NAME,
      RIGHTS_NAME,
      RIGHTS_FIELD,
      RIGHTS_VALUE,
      RIGHTS_CMND,
      IsActive,
      LocationID,
      RecordChanged,
      isValid,
      isDeleted,
      LicGrp,
      ModGrp,
      ModGrpDesc,
    });
    {
      rightsName === "Admin"
        ? history.push("/trmst")
        : history.push("/usertrmst/:CompanyCode");
    }
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={() => editData()}>
            <h3>Total Rights Master</h3>
            <div className="form-class4">
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
                <label>RID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RID"
                  value={RID}
                  onChange={(e) => {
                    setRID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RID"
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
                  value={MODULE_NAME}
                  onChange={(e) => {
                    setMODULE_NAME(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="MODULE_NAME"
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_NAME</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_NAME"
                  value={RIGHTS_NAME}
                  onChange={(e) => {
                    setRIGHTS_NAME(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_NAME"
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_FIELD</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_FIELD"
                  value={RIGHTS_FIELD}
                  onChange={(e) => {
                    setRIGHTS_FIELD(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_FIELD"
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_VALUE</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_VALUE"
                  value={RIGHTS_VALUE}
                  onChange={(e) => {
                    setRIGHTS_VALUE(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_VALUE"
                />
              </div>

              <div className="form-group">
                <label>RIGHTS_CMND</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RIGHTS_CMND"
                  value={RIGHTS_CMND}
                  onChange={(e) => {
                    setRIGHTS_CMND(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RIGHTS_CMND"
                />
              </div>
              <div className="form-group">
                <label>ModGrp</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ModGrp"
                  value={ModGrp}
                  onChange={(e) => {
                    setModGrp(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="ModGrp"
                />
              </div>

              <div className="form-group">
                <label>LocationID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="LocationID"
                  value={LocationID}
                  onChange={(e) => {
                    setLocationID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="LocationID"
                />
              </div>

              <div className="form-group">
                <label>ModGrpDesc</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ModGrpDesc"
                  value={ModGrpDesc}
                  onChange={(e) => {
                    setModGrpDesc(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="ModGrpDesc"
                />
              </div>
              <div className="form-group">
                <label>LicGrp</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="LicGrp"
                  value={LicGrp}
                  onChange={(e) => {
                    setLicGrp(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="LicGrp"
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
                <label className="label-master">IsActive</label>
                <label className="option-label">Yes</label>
                <input
                  type="radio"
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

export default withRouter(TotalRightsMaster_Edit);
