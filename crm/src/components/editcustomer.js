import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

function CustomerMaster_Edit(props) {
  const userrights = useSelector((state) => state.userrights);
  const { rightsName } = userrights;

  const [CmpnyCode, setCmpnyCode] = useState("");
  const [AccCode, setAccCode] = useState("");
  const [AccType, setAccType] = useState("");
  const [AccName, setAccName] = useState("");
  const [Address, setAddress] = useState("");
  const [ContactPerson, setContactPerson] = useState("");
  const [PhoneFax, setPhoneFax] = useState("");
  const [TaxOverride, setTaxOverride] = useState("");
  const [Cr_Limit, setCr_Limit] = useState("");
  const [Cr_Days, setCr_Days] = useState("");
  const [PriceId, setPriceId] = useState("");
  const [PinNo, setPinNo] = useState("");
  const [VatNo, setVatNo] = useState("");
  const [SetDiscPer, setSetDiscPer] = useState("");
  const [SmCode, setSmCode] = useState("");
  const [AreaID, setAreaID] = useState("");
  const [RouteID, setRouteID] = useState("");
  const [TownID, setTownID] = useState("");
  const [BizType, setBizType] = useState("");
  const [CurrBalance, setCurrBalance] = useState("");
  const [TotalTurnover, setTotalTurnover] = useState("");
  const [OpeningBalance, setOpeningBalance] = useState("");
  const [ClosingBalance, setClosingBalance] = useState("");
  const [UnAllocated, setUnAllocated] = useState("");
  const [AccStatus, setAccStatus] = useState("");
  const [DateCreated, setDateCreated] = useState("");
  const [UserID, setUserID] = useState("");
  const [CardNo, setCardNo] = useState("");
  const [OtherTradingName, setOtherTradingName] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [EmailAdd, setEmailAdd] = useState("");
  const [Add1, setAdd1] = useState("");
  const [Add2, setAdd2] = useState("");
  const [Add3, setAdd3] = useState("");
  const [Add4, setAdd4] = useState("");
  const [Add5, setAdd5] = useState("");
  const [PoBox, setPoBox] = useState("");
  const [CityTown, setCityTown] = useState("");
  const [StateProvince, setStateProvince] = useState("");
  const [Country, setCountry] = useState("");
  const [Tele1, setTele1] = useState("");
  const [Fax1, setFax1] = useState("");
  const [Note, setNote] = useState("");
  const [SiteCode, setSiteCode] = useState("");
  const [SiteName, setSiteName] = useState("");
  const [RecordChanged, setRecordChanged] = useState("");
  const [LocationID, setLocationID] = useState("");
  const [BalancePoints, setBalancePoints] = useState("");
  const [isValid, setisValid] = useState();
  const [isDeleted, setisDeleted] = useState();
  const [WHPercent, setWHPercent] = useState("");

  const history = useHistory();

  const argu = props.match.params.AccCode;

  useEffect(() => {
    axios.get("http://localhost:8000/getacccode/" + argu).then((response) => {
      setCmpnyCode(response.data[0].CmpnyCode);
      setAccCode(response.data[0].AccCode);
      setAccType(response.data[0].AccType);
      setAccName(response.data[0].AccName);
      setAddress(response.data[0].Address);
      setContactPerson(response.data[0].ContactPerson);
      setPhoneFax(response.data[0].PhoneFax);
      setTaxOverride(response.data[0].TaxOverride);
      setCr_Limit(response.data[0].Cr_Limit);
      setCr_Days(response.data[0].Cr_Days);
      setPriceId(response.data[0].PriceId);
      setPinNo(response.data[0].PinNo);
      setVatNo(response.data[0].VatNo);
      setSetDiscPer(response.data[0].SetsetSetDiscPer);
      setSmCode(response.data[0].SmCode);
      setAreaID(response.data[0].AreaID);
      setRouteID(response.data[0].RouteID);
      setTownID(response.data[0].TownID);
      setBizType(response.data[0].BizType);
      setCurrBalance(response.data[0].CurrBalance);
      setTotalTurnover(response.data[0].TotalTurnover);
      setOpeningBalance(response.data[0].OpeningBalance);
      setClosingBalance(response.data[0].ClosingBalance);
      setUnAllocated(response.data[0].unAllocated);
      setAccStatus(response.data[0].Accstatus);
      setDateCreated(response.data[0].DateCreated);
      setUserID(response.data[0].userID);
      setCardNo(response.data[0].CardNo);
      setOtherTradingName(response.data[0].OtherTradingName);
      setMobileNo(response.data[0].MobileNo);
      setEmailAdd(response.data[0].EmailAdd);
      setAdd1(response.data[0].Add1);
      setAdd2(response.data[0].Add2);
      setAdd3(response.data[0].Add3);
      setAdd4(response.data[0].Add4);
      setAdd5(response.data[0].Add5);
      setPoBox(response.data[0].PoBox);
      setCityTown(response.data[0].CityTown);
      setStateProvince(response.data[0].StateProvince);
      setCountry(response.data[0].Country);
      setTele1(response.data[0].Tele1);
      setFax1(response.data[0].Fax1);
      setNote(response.data[0].Note);
      setSiteCode(response.data[0].SiteCode);
      setSiteName(response.data[0].SiteName);
      setRecordChanged(response.data[0].RecordChanged);
      setLocationID(response.data[0].LocationID);
      setBalancePoints(response.data[0].BalancePoints);
      setisValid(response.data[0].isValid);
      setisDeleted(response.data[0].isDeleted);
      setWHPercent(response.data[0].WHPercent);
    });
  }, [argu]);

  const editData = () => {
    axios.put("http://localhost:8000/upcustomermst/" + argu, {
      CmpnyCode,
      AccCode,
      AccType,
      AccName,
      Address,
      ContactPerson,
      PhoneFax,
      TaxOverride,
      Cr_Limit,
      Cr_Days,
      PriceId,
      PinNo,
      VatNo,
      SetDiscPer,
      SmCode,
      AreaID,
      RouteID,
      TownID,
      BizType,
      CurrBalance,
      TotalTurnover,
      OpeningBalance,
      ClosingBalance,
      UnAllocated,
      AccStatus,
      DateCreated,
      UserID,
      CardNo,
      OtherTradingName,
      MobileNo,
      EmailAdd,
      Add1,
      Add2,
      Add3,
      Add4,
      Add5,
      PoBox,
      CityTown,
      StateProvince,
      Country,
      Tele1,
      Fax1,
      Note,
      SiteCode,
      SiteName,
      RecordChanged,
      LocationID,
      BalancePoints,
      isValid,
      isDeleted,
      WHPercent,
    });
    {
      rightsName === "Admin"
        ? history.push("/customermst")
        : history.push("/usercustomermst/:CompanyCode");
    }
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner ">
          <form onSubmit={() => editData()}>
            <h3>Edit Customer Master</h3>
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
                    setRecordChanged(1);
                  }}
                  name="CmpnyCode"
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
                <label>AccType</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="AccType"
                  value={AccType}
                  onChange={(e) => {
                    setAccType(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="AccType"
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
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={Address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Address"
                />
              </div>

              <div className="form-group">
                <label>ContactPerson</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ContactPerson"
                  value={ContactPerson}
                  onChange={(e) => {
                    setContactPerson(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="ContactPerson"
                />
              </div>

              <div className="form-group">
                <label>PhoneFax</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="PhoneFax"
                  value={PhoneFax}
                  onChange={(e) => {
                    setPhoneFax(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="PhoneFax"
                />
              </div>

              <div className="form-group">
                <label>TaxOverride</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TaxOverride"
                  value={TaxOverride}
                  onChange={(e) => {
                    setTaxOverride(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="TaxOverride"
                />
              </div>

              <div className="form-group">
                <label>Cr_Limit</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cr_Limit"
                  value={Cr_Limit}
                  onChange={(e) => {
                    setCr_Limit(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Cr_Limit"
                />
              </div>

              <div className="form-group">
                <label>Cr_Days</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cr_Days"
                  value={Cr_Days}
                  onChange={(e) => {
                    setCr_Days(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Cr_Days"
                />
              </div>

              <div className="form-group">
                <label>PriceId</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="PriceId"
                  value={PriceId}
                  onChange={(e) => {
                    setPriceId(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="PriceId"
                />
              </div>

              <div className="form-group">
                <label>PinNo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="PinNo"
                  value={PinNo}
                  onChange={(e) => {
                    setPinNo(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="PinNo"
                />
              </div>

              <div className="form-group">
                <label>VAT No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="VAT No"
                  value={VatNo}
                  onChange={(e) => {
                    setVatNo(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="VatNo"
                />
              </div>

              <div className="form-group">
                <label>SetDiscPer</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="SetDiscPer"
                  value={SetDiscPer}
                  onChange={(e) => {
                    setSetDiscPer(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="SetDiscPer"
                />
              </div>

              <div className="form-group">
                <label>SmCode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="SmCode"
                  value={SmCode}
                  onChange={(e) => {
                    setSmCode(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="SmCode"
                />
              </div>

              <div className="form-group">
                <label>AreaID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="AreaID"
                  value={AreaID}
                  onChange={(e) => {
                    setAreaID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="AreaID"
                />
              </div>

              <div className="form-group">
                <label>RouteID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RouteID"
                  value={RouteID}
                  onChange={(e) => {
                    setRouteID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="RouteID"
                />
              </div>

              <div className="form-group">
                <label>TownID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TownID"
                  value={TownID}
                  onChange={(e) => {
                    setTownID(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="TownID"
                />
              </div>

              <div className="form-group">
                <label>BizType</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="BizType"
                  value={BizType}
                  onChange={(e) => {
                    setBizType(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="BizType"
                />
              </div>

              <div className="form-group">
                <label>CurrBalance</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CurrBalance"
                  value={CurrBalance}
                  onChange={(e) => {
                    setCurrBalance(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="CurrBalance"
                />
              </div>

              <div className="form-group">
                <label>TotalTurnOver</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TotalTurnOver"
                  value={TotalTurnover}
                  onChange={(e) => {
                    setTotalTurnover(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="TotalTurnover"
                />
              </div>

              <div className="form-group">
                <label>OpeningBalance</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="OpeningBalance"
                  value={OpeningBalance}
                  onChange={(e) => {
                    setOpeningBalance(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="OpeningBalance"
                />
              </div>

              <div className="form-group">
                <label>ClosingBalance</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ClosingBalance"
                  value={ClosingBalance}
                  onChange={(e) => {
                    setClosingBalance(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="ClosingBalance"
                />
              </div>

              <div className="form-group">
                <label>UnAllocated</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UnAllocated"
                  value={UnAllocated}
                  onChange={(e) => {
                    setUnAllocated(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="UnAllocated"
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
                      setAccStatus(e.target.value);
                      setRecordChanged(1);
                    }}
                    name="AccStatus"
                    className="option-button"
                    checked={AccStatus == 1}
                  />
                  <label className="option-label">Inactive</label>
                  <input
                    type="radio"
                    value={0}
                    onChange={(e) => {
                      setAccStatus(e.target.value);
                      setRecordChanged(1);
                    }}
                    name="AccStatus"
                    className="option-button"
                    checked={AccStatus == 0}
                  />
                </span>
              </div>

              <div className="form-group">
                <label>DateCreated</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="DateCreated"
                  value={dayjs(DateCreated).format("YYYY-MM-DD")}
                  name="DateCreated"
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
                <label>CardNo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CardNo"
                  value={CardNo}
                  onChange={(e) => {
                    setCardNo(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="CardNo"
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
                <label>SmCode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="SmCode"
                  value={SmCode}
                  onChange={(e) => {
                    setSmCode(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="SmCode"
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
                <label>EmailAdd</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="EmailAdd"
                  value={EmailAdd}
                  onChange={(e) => {
                    setEmailAdd(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="EmailAdd"
                />
              </div>

              <div className="form-group">
                <label>Add1</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add1"
                  value={Add1}
                  onChange={(e) => {
                    setAdd1(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Add1"
                />
              </div>

              <div className="form-group">
                <label>Add2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add2"
                  value={Add2}
                  onChange={(e) => {
                    setAdd2(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Add2"
                />
              </div>

              <div className="form-group">
                <label>Add3</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add3"
                  value={Add3}
                  onChange={(e) => {
                    setAdd3(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Add3"
                />
              </div>

              <div className="form-group">
                <label>Add4</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add4"
                  value={Add4}
                  onChange={(e) => {
                    setAdd4(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Add4"
                />
              </div>

              <div className="form-group">
                <label>Add5</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add5"
                  value={Add5}
                  onChange={(e) => {
                    setAdd5(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Add5"
                />
              </div>

              <div className="form-group">
                <label>PoBox</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="PoBox"
                  value={PoBox}
                  onChange={(e) => {
                    setPoBox(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="PoBox"
                />
              </div>

              <div className="form-group">
                <label>CityTown</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CityTown"
                  value={CityTown}
                  onChange={(e) => {
                    setCityTown(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="CityTown"
                />
              </div>

              <div className="form-group">
                <label>StateProvince</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="StateProvince"
                  value={StateProvince}
                  onChange={(e) => {
                    setStateProvince(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="StateProvince"
                />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  value={Country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Country"
                />
              </div>

              <div className="form-group">
                <label>Tele1</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tele1"
                  value={Tele1}
                  onChange={(e) => {
                    setTele1(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Tele1"
                />
              </div>

              <div className="form-group">
                <label>Fax1</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fax1"
                  value={Fax1}
                  onChange={(e) => {
                    setFax1(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Fax1"
                />
              </div>

              <div className="form-group">
                <label>Note</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Note"
                  value={Note}
                  onChange={(e) => {
                    setNote(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="Note"
                />
              </div>

              <div className="form-group">
                <label>SiteCode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="SiteCode"
                  value={SiteCode}
                  onChange={(e) => {
                    setSiteCode(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="SiteCode"
                />
              </div>

              <div className="form-group">
                <label>SiteName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="SiteName"
                  value={SiteName}
                  onChange={(e) => {
                    setSiteName(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="SiteName"
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
                <label>BalancePoints</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="BalancePoints"
                  value={BalancePoints}
                  onChange={(e) => {
                    setBalancePoints(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="BalancePoints"
                />
              </div>

              <div className="form-group">
                <label>WHPercent</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="WHPercent"
                  value={WHPercent}
                  onChange={(e) => {
                    setWHPercent(e.target.value);
                    setRecordChanged(1);
                  }}
                  name="WHPercent"
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
                  name="RecordChanged"
                  onChange={(e) => {
                    {
                      rightsName === "Admin"
                        ? setRecordChanged(e.target.value)
                        : setRecordChanged(RecordChanged);
                    }
                  }}
                  className="option-button"
                  checked={RecordChanged == 1}
                />
                <label className="option-label">No</label>
                <input
                  type="radio"
                  className="form-control"
                  value={0}
                  name="RecordChanged"
                  onChange={(e) => {
                    {
                      rightsName === "Admin"
                        ? setRecordChanged(e.target.value)
                        : setRecordChanged(RecordChanged);
                    }
                  }}
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

export default withRouter(CustomerMaster_Edit);
