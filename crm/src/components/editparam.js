import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function ParamMaster_Edit(props) {
  const userrights = useSelector((state) => state.userrights);
  const { rightsName } = userrights;

  const [ParamID, setParamID] = useState("");
  const [CmpnyCode, setCmpnyCode] = useState("");
  const [AppName, setAppName] = useState("");
  const [ModuleName, setModuleName] = useState("");
  const [Parameters, setParameters] = useState("");
  const [ParamValue, setParamValue] = useState("");
  const [RecordChanged, setRecordChanged] = useState();
  const [LocationID, setLocationID] = useState("");

  const history = useHistory();

  const argu = props.match.params.ParamID;

  useEffect(() => {
    axios.get("http://localhost:8000/getparamid/" + argu).then((response) => {
      setParamID(response.data[0].ParamID);
      setCmpnyCode(response.data[0].CmpnyCode);
      setAppName(response.data[0].AppName);
      setModuleName(response.data[0].ModuleName);
      setParameters(response.data[0].Parameters);
      setParamValue(response.data[0].ParamValue);
      setRecordChanged(response.data[0].RecordChanged);
      setLocationID(response.data[0].LocationID);
    });
  }, [argu]);

  const editData = () => {
    axios.put("http://localhost:8000/upparammst/" + argu, {
      ParamID,
      CmpnyCode,
      AppName,
      ModuleName,
      Parameters,
      ParamValue,
      RecordChanged,
      LocationID,
    });
    {
      rightsName === "Admin"
        ? history.push("/parammst")
        : history.push("/userparammst/:CompanyCode");
    }
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={() => editData()}>
            <h3>Param Master</h3>
            <div className="form-class4">
              <div className="form-group">
                <label>ParamID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ParamID"
                  value={ParamID}
                  onChange={(e) => {
                    setParamID(e.target.value);
                  }}
                  name="ParamID"
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
                <label>AppName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="AppName"
                  value={AppName}
                  onChange={(e) => {
                    setAppName(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="AppName"
                />
              </div>

              <div className="form-group">
                <label>ModuleName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ModuleName"
                  value={ModuleName}
                  onChange={(e) => {
                    setModuleName(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="ModuleName"
                />
              </div>

              <div className="form-group">
                <label>Parameters</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Parameters"
                  value={Parameters}
                  onChange={(e) => {
                    setParameters(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Parameters"
                />
              </div>

              <div className="form-group">
                <label>ParamValue</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ParamValue"
                  value={ParamValue}
                  onChange={(e) => {
                    setParamValue(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="ParamValue"
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
            <button className="btn btn-primary btn-block">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ParamMaster_Edit);
