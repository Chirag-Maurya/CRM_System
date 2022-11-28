import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";

function TrnType_Edit(props) {
  const [AppName, setAppName] = useState("");
  const [TrnTypeId, setTrnTypeId] = useState("");
  const [TrnTypeName, setTrnTypeName] = useState("");
  const [TypeFor, setTypeFor] = useState("");
  const [isValid, setisValid] = useState(1);
  const [isDeleted, setisDeleted] = useState(1);

  const history = useHistory();

  const argu = props.match.params.TrnTypeId;

  useEffect(() => {
    axios.get("http://localhost:8000/gettrntypeid/" + argu).then((response) => {
      setAppName(response.data[0].AppName);
      setTrnTypeId(response.data[0].TrnTypeId);
      setTypeFor(response.data[0].TypeFor);
      setTrnTypeName(response.data[0].TrnTypeName);
      setisValid(response.data[0].isValid);
      setisDeleted(response.data[0].isDeleted);
    });
  }, [argu]);

  const editData = () => {
    axios.put("http://localhost:8000/uptrntype/" + argu, {
      AppName,
      TrnTypeId,
      TrnTypeName,
      TypeFor,
      isValid,
      isDeleted,
    });
    history.push("/trntype");
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={() => editData()}>
            <h3>Trn Type</h3>
            <div className="form-group">
              <label>AppName</label>
              <input
                type="text"
                className="form-control"
                placeholder="AppName"
                value={AppName}
                onChange={(e) => {
                  setAppName(e.target.value);
                }}
                name="AppName"
              />
            </div>

            <div className="form-group">
              <label>TrnTypeID</label>
              <input
                type="text"
                className="form-control"
                placeholder="TrnTypeID"
                value={TrnTypeId}
                onChange={(e) => {
                  setTrnTypeId(e.target.value);
                }}
                name="TrnTypeId"
              />
            </div>

            <div className="form-group">
              <label>TrnTypeName</label>
              <input
                type="text"
                className="form-control"
                placeholder="TrnTypeName"
                value={TrnTypeName}
                onChange={(e) => {
                  setTrnTypeName(e.target.value);
                }}
                name="TrnTypeName"
              />
            </div>

            <div className="form-group">
              <label>TypeFor</label>
              <input
                type="text"
                className="form-control"
                placeholder="TypeFor"
                value={TypeFor}
                onChange={(e) => {
                  setTypeFor(e.target.value);
                }}
                name="TypeFor"
              />
            </div>

            <div className="form-group">
              <span className="option">
                <label className="label-master">isValid</label>
                <label className="option-label">Yes</label>
                <input
                  type="radio"
                  value={1}
                  onChange={(e) => {
                    setisValid(e.target.value);
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

export default withRouter(TrnType_Edit);
