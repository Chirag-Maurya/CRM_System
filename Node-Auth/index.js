//var { app } = require("cli");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
var { app } = require("cli");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");

app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookies: {
      expires: 60 * 60 * 8,
    },
  })
);

const upload = multer({ dest: "uploads/" });

app.use("/uploads", express.static("uploads"));

//connecting to database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "crm database",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to MySQL Server!");
});

/********________REGISTER AND LOGIN________********/

//post register request
app.post("/register", (req, res) => {
  const CompanyCode = req.body.CompanyCode;
  const UserID = req.body.UserID;
  const UserFullName = req.body.UserFullName;
  const UserDetail = req.body.UserDetail;
  const LoginID = req.body.LoginID;
  const Password = req.body.Password;
  const ConfirmPassword = req.body.ConfirmPassword;
  const UserPin = req.body.UserPin;
  const UserEmailID = req.body.UserEmailID;
  const DateCreated = req.body.DateCreated;
  const CreatedBy = req.body.CreatedBy;

  db.query(
    "INSERT INTO usermst (CmpnyCode,UserID,UserFullName,UserDetail,LoginID,Password,UserPin,UserEmailID,DateCreated,CreatedBy) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      CompanyCode,
      UserID,
      UserFullName,
      UserDetail,
      LoginID,
      Password,
      UserPin,
      UserEmailID,
      DateCreated,
      CreatedBy,
    ],
    (err, result) => {
      console.log(err);
    }
  );
  db.query(
    "INSERT INTO userrightsmst (UserID,CmpnyCode) VALUES (?,?)",
    [UserID, CompanyCode],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

//post login request
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("We need a token. Please give it to us next time!!!");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You failed to authenticate" });
      } else {
        req.userId = decoded.userid;
        next();
      }
    });
  }
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("You are Authenticated...");
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const LoginID = req.body.LoginID;
  const Password = req.body.Password;
  db.query(
    "SELECT * FROM usermst WHERE LoginID = ? AND password = ?",
    [LoginID, Password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        const userid = result[0].UserID;
        const token = jwt.sign({ userid }, "jwtSecret", {
          expiresIn: 60 * 60 * 24,
        });
        req.session.user = result;

        res.json({ auth: true, token: token, result: result });
      } else {
        res.send({ message: "Wrong LoginID/Password combination" });
      }
    }
  );
});

//logout
const logout = async (req, res) => {
  res.clearCookie("userId", { path: "/" });
  res
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
};

app.get("/logout", logout, (req, res) => {
  res.send("You have been logged out successfully");
});

//user rights request
app.get("/profileuserrights/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM userrightsmst WHERE UserID = ?",
    id,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

/*******************************_____________________ADMIN REQUESTS_____________________*******************************/

/********________COMPANY MASTER________********/
app.post("/cpmenter", (req, res) => {
  const CompanyCode = req.body.CompanyCode;
  const CompanyName = req.body.CompanyName;
  const Address1 = req.body.Address1;
  const Address2 = req.body.Address2;
  const PoBox = req.body.PoBox;
  const City = req.body.City;
  const Province = req.body.Province;
  const Country = req.body.Country;
  const Phone = req.body.Phone;
  const Fax = req.body.Fax;
  const Email = req.body.Email;
  const RegistrationNo = req.body.RegistrationNo;
  const VatNo = req.body.VatNo;
  const PinNo = req.body.PinNo;
  const BranchNo = req.body.BranchNo;
  const BranchHq = req.body.BranchHq;
  const StartDate = req.body.StartDate;
  const EndDate = req.body.EndDate;
  const Current = req.body.Current;
  const RunDate = req.body.RunDate;
  const DateCreated = req.body.DateCreated;
  const UserID = req.body.UserID;
  const LocationID = req.body.LocationID;

  db.query(
    "INSERT INTO companymst (CmpnyCode,CmpnyName,Address1,Address2,PoBox,City,Province,Country,Phone,Fax,Email,RegistrationNo,VatNo,PinNo,BranchNo,BranchHq,StartDate,EndDate,Current,RunDate,DateCreated,UserID,LocationID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      CompanyCode,
      CompanyName,
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
    ],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

app.get("/companymst", (req, res) => {
  db.query("SELECT * FROM companymst", (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.delete("/deletecompanymst/:CmpnyCode", (req, res) => {
  const CompanyCode = req.params.CmpnyCode;
  db.query(
    "DELETE FROM companymst WHERE CmpnyCode = ?",
    CompanyCode,
    (err, result) => {
      if (err) console.log(err);
    }
  );
});

app.get("/getcomcode/:CmpnyCode", (req, res) => {
  const CompanyCode = req.params.CmpnyCode;
  db.query(
    "SELECT * FROM companymst WHERE CmpnyCode = ?",
    CompanyCode,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.put("/upcompanymst/:CmpnyCode", (req, res) => {
  const CmpnyCode = req.params.CmpnyCode;
  const CompanyCode = req.body.CmpnyCode;
  const CompanyName = req.body.CmpnyName;
  const Address1 = req.body.Address1;
  const Address2 = req.body.Address2;
  const PoBox = req.body.PoBox;
  const City = req.body.City;
  const Province = req.body.Province;
  const Country = req.body.Country;
  const Phone = req.body.Phone;
  const Fax = req.body.Fax;
  const Email = req.body.Email;
  const RegistrationNo = req.body.RegistrationNo;
  const VatNo = req.body.VatNo;
  const PinNo = req.body.PinNo;
  const BranchNo = req.body.BranchNo;
  const BranchHq = req.body.BranchHq;
  const StartDate = req.body.StartDate;
  const EndDate = req.body.EndDate;
  const Current = req.body.Current;
  const RunDate = req.body.RunDate;
  const DateCreated = req.body.DateCreated;
  const UserID = req.body.UserID;
  const LocationID = req.body.LocationID;
  db.query(
    "UPDATE companymst SET CmpnyCode=?,CmpnyName=?,Address1=?,Address2=?,PoBox=?,City=?,Province=?,Country=?,Phone=?,Fax=?,Email=?,RegistrationNo=?,VatNo=?,PinNo=?,BranchNo=?,BranchHq=?,StartDate=?,EndDate=?,Current=?,RunDate=?,DateCreated=?,UserID=?,LocationID=? WHERE CmpnyCode=?",
    [
      CompanyCode,
      CompanyName,
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
      CmpnyCode,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

/********________CUSTOMER MASTER________********/
app.post("/ctmenter", (req, res) => {
  const CompanyCode = req.body.CompanyCode;
  const AccCode = req.body.AccCode;
  const AccType = req.body.AccType;
  const AccName = req.body.AccName;
  const Address = req.body.Address;
  const ContactPerson = req.body.ContactPerson;
  const PhoneFax = req.body.PhoneFax;
  const TaxOverride = req.body.TaxOverride;
  const Cr_Limit = req.body.Cr_Limit;
  const Cr_Days = req.body.Cr_Days;
  const PriceId = req.body.PriceId;
  const PinNo = req.body.PinNo;
  const VatNo = req.body.VatNo;
  const SetDiscPer = req.body.SetDiscPer;
  const SmCode = req.body.SmCode;
  const AreaID = req.body.AreaID;
  const RouteID = req.body.RouteID;
  const TownID = req.body.TownID;
  const BizType = req.body.BizType;
  const CurrBalance = req.body.CurrBalance;
  const TotalTurnOver = req.body.TotalTurnOver;
  const OpeningBalance = req.body.OpeningBalance;
  const ClosingBalance = req.body.ClosingBalance;
  const UnAllocated = req.body.UnAllocated;
  const AccStatus = req.body.AccStatus;
  const DateCreated = req.body.DateCreated;
  const UserID = req.body.UserID;
  const CardNo = req.body.CardNo;
  const OtherTradingName = req.body.OtherTradingName;
  const MobileNo = req.body.MobileNo;
  const EmailAdd = req.body.EmailAdd;
  const Add1 = req.body.Add1;
  const Add2 = req.body.Add2;
  const Add3 = req.body.Add3;
  const Add4 = req.body.Add4;
  const Add5 = req.body.Add5;
  const PoBox = req.body.PoBox;
  const CityTown = req.body.CityTown;
  const StateProvince = req.body.StateProvince;
  const Country = req.body.Country;
  const Tele1 = req.body.Tele1;
  const Fax1 = req.body.Fax1;
  const Note = req.body.Note;
  const SiteCode = req.body.SiteCode;
  const SiteName = req.body.SiteName;
  const RecordChanged = req.body.RecordChanged;
  const LocationID = req.body.LocationID;
  const BalancePoints = req.body.BalancePoints;
  const isValid = req.body.isValid;
  const isDeleted = req.body.isDeleted;
  const WHPercent = req.body.WHPercent;

  db.query(
    "INSERT INTO customermst (CmpnyCode,AccCode,AccType,AccName,Address,ContactPerson,PhoneFax,TaxOverride,Cr_Limit,Cr_Days,PriceId,PinNo,VatNo,SetDiscPer,SmCode,AreaID,RouteID,TownID,BizType,CurrBalance,TotalTurnOver,OpeningBalance,ClosingBalance,UnAllocated,AccStatus,DateCreated,UserID,CardNo,OtherTradingName,MobileNo,EmailAdd,Add1,Add2,Add3,Add4,Add5,PoBox,CityTown,StateProvince,Country,Tele1,Fax1,Note,SiteCode,SiteName,RecordChanged,LocationID,BalancePoints,isValid,isDeleted,WHPercent) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      CompanyCode,
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
      TotalTurnOver,
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
    ],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

app.get("/customermst", (req, res) => {
  db.query("SELECT * FROM customermst", (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.delete("/deletecustomermst/:AccCode", (req, res) => {
  const AccCode = req.params.AccCode;
  db.query(
    "DELETE FROM customermst WHERE AccCode = ?",
    AccCode,
    (err, result) => {
      if (err) console.log(err);
    }
  );
});

app.get("/getacccode/:AccCode", (req, res) => {
  const AccCode = req.params.AccCode;
  db.query(
    "SELECT * FROM customermst WHERE AccCode = ?",
    AccCode,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.put("/upcustomermst/:AccCode", (req, res) => {
  const AccCode = req.params.AccCode;
  const CompanyCode = req.body.CmpnyCode;
  const AccountCode = req.body.AccCode;
  const AccType = req.body.AccType;
  const AccName = req.body.AccName;
  const Address = req.body.Address;
  const ContactPerson = req.body.ContactPerson;
  const PhoneFax = req.body.PhoneFax;
  const TaxOverride = req.body.TaxOverride;
  const Cr_Limit = req.body.Cr_Limit;
  const Cr_Days = req.body.Cr_Days;
  const PriceId = req.body.PriceId;
  const PinNo = req.body.PinNo;
  const VatNo = req.body.VatNo;
  const SetDiscPer = req.body.SetDiscPer;
  const SmCode = req.body.SmCode;
  const AreaID = req.body.AreaID;
  const RouteID = req.body.RouteID;
  const TownID = req.body.TownID;
  const BizType = req.body.BizType;
  const CurrBalance = req.body.CurrBalance;
  const TotalTurnOver = req.body.TotalTurnOver;
  const OpeningBalance = req.body.OpeningBalance;
  const ClosingBalance = req.body.ClosingBalance;
  const UnAllocated = req.body.UnAllocated;
  const AccStatus = req.body.AccStatus;
  const DateCreated = req.body.DateCreated;
  const UserID = req.body.UserID;
  const CardNo = req.body.CardNo;
  const OtherTradingName = req.body.OtherTradingName;
  const MobileNo = req.body.MobileNo;
  const EmailAdd = req.body.EmailAdd;
  const Add1 = req.body.Add1;
  const Add2 = req.body.Add2;
  const Add3 = req.body.Add3;
  const Add4 = req.body.Add4;
  const Add5 = req.body.Add5;
  const PoBox = req.body.PoBox;
  const CityTown = req.body.CityTown;
  const StateProvince = req.body.StateProvince;
  const Country = req.body.Country;
  const Tele1 = req.body.Tele1;
  const Fax1 = req.body.Fax1;
  const Note = req.body.Note;
  const SiteCode = req.body.SiteCode;
  const SiteName = req.body.SiteName;
  const RecordChanged = req.body.RecordChanged;
  const LocationID = req.body.LocationID;
  const BalancePoints = req.body.BalancePoints;
  const isValid = req.body.isValid;
  const isDeleted = req.body.isDeleted;
  const WHPercent = req.body.WHPercent;
  db.query(
    "UPDATE customermst SET CmpnyCode=?,AccCode=?,AccType=?,AccName=?,Address=?,ContactPerson=?,PhoneFax=?,TaxOverride=?,Cr_Limit=?,Cr_Days=?,PriceId=?,PinNo=?,VatNo=?,SetDiscPer=?,SmCode=?,AreaID=?,RouteID=?,TownID=?,BizType=?,CurrBalance=?,TotalTurnOver=?,OpeningBalance=?,ClosingBalance=?,UnAllocated=?,AccStatus=?,DateCreated=?,UserID=?,CardNo=?,OtherTradingName=?,MobileNo=?,EmailAdd=?,Add1=?,Add2=?,Add3=?,Add4=?,Add5=?,PoBox=?,CityTown=?,StateProvince=?,Country=?,Tele1=?,Fax1=?,Note=?,SiteCode=?,SiteName=?,RecordChanged=?,LocationID=?,BalancePoints=?,isValid=?,isDeleted=?,WHPercent=? WHERE AccCode=?",
    [
      CompanyCode,
      AccountCode,
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
      TotalTurnOver,
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
      AccCode,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

/********________PARAM MASTER________********/
app.post("/prmenter", (req, res) => {
  const ParamID = req.body.ParamID;
  const CmpnyCode = req.body.CmpnyCode;
  const AppName = req.body.AppName;
  const ModuleName = req.body.ModuleName;
  const Parameters = req.body.Parameters;
  const ParamValue = req.body.ParamValue;
  const RecordChanged = req.body.RecordChanged;
  const LocationID = req.body.LocationID;

  db.query(
    "INSERT INTO parammst (ParamID, CmpnyCode, AppName, ModuleName, Parameters, ParamValue, RecordChanged, LocationID) VALUES (?,?,?,?,?,?,?,?)",
    [
      ParamID,
      CmpnyCode,
      AppName,
      ModuleName,
      Parameters,
      ParamValue,
      RecordChanged,
      LocationID,
    ],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

app.get("/parammst", (req, res) => {
  db.query("SELECT * FROM parammst", (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.delete("/deleteparammst/:ParamID", (req, res) => {
  const ParamID = req.params.ParamID;
  db.query("DELETE FROM parammst WHERE ParamID = ?", ParamID, (err, result) => {
    if (err) console.log(err);
  });
});

app.get("/getparamid/:ParamID", (req, res) => {
  const ParamID = req.params.ParamID;
  db.query(
    "SELECT * FROM parammst WHERE ParamID = ?",
    ParamID,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.put("/upparammst/:ParamID", (req, res) => {
  const ParameID = req.params.ParamID;
  const ParamID = req.body.ParamID;
  const CmpnyCode = req.body.CmpnyCode;
  const AppName = req.body.AppName;
  const ModuleName = req.body.ModuleName;
  const Parameters = req.body.Parameters;
  const ParamValue = req.body.ParamValue;
  const RecordChanged = req.body.RecordChanged;
  const LocationID = req.body.LocationID;

  db.query(
    "UPDATE parammst SET ParamID=?, CmpnyCode=?, AppName=?, ModuleName=?, Parameters=?, ParamValue=?, RecordChanged=?, LocationID=? WHERE ParamID=?",
    [
      ParamID,
      CmpnyCode,
      AppName,
      ModuleName,
      Parameters,
      ParamValue,
      RecordChanged,
      LocationID,
      ParameID,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

/********________TRN TYPE________********/
app.post("/trnenter", (req, res) => {
  const AppName = req.body.AppName;
  const TrnTypeID = req.body.TrnTypeID;
  const TrnTypeName = req.body.TrnTypeName;
  const TypeFor = req.body.TypeFor;
  const isValid = req.body.isValid;
  const isDeleted = req.body.isDeleted;

  db.query(
    "INSERT INTO `trntype` (`AppName`, `TrnTypeId`, `TrnTypeName`, `TypeFor`, `isValid`, `isDeleted`) VALUES (?,?,?,?,?,?)",
    [AppName, TrnTypeID, TrnTypeName, TypeFor, isValid, isDeleted],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

app.get("/trntype", (req, res) => {
  db.query("SELECT * FROM trntype", (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.delete("/deletetrntype/:TrnTypeId", (req, res) => {
  const TrnTypeId = req.params.TrnTypeId;
  db.query(
    "DELETE FROM trntype WHERE TrnTypeId = ?",
    TrnTypeId,
    (err, result) => {
      if (err) console.log(err);
    }
  );
});

app.get("/gettrntypeid/:TrnTypeId", (req, res) => {
  const TrnTypeId = req.params.TrnTypeId;
  db.query(
    "SELECT * FROM trntype WHERE TrnTypeId = ?",
    TrnTypeId,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.put("/uptrntype/:TrnTypeId", (req, res) => {
  const trntypeid = req.params.TrnTypeId;
  const AppName = req.body.AppName;
  const TrnTypeId = req.body.TrnTypeId;
  const TrnTypeName = req.body.TrnTypeName;
  const TypeFor = req.body.TypeFor;
  const isValid = req.body.isValid;
  const isDeleted = req.body.isDeleted;
  db.query(
    "UPDATE `trntype` SET `AppName`=?, `TrnTypeId`=?, `TrnTypeName`=?, `TypeFor`=?, `isValid`=?, `isDeleted`=? WHERE TrnTypeId=?",
    [AppName, TrnTypeId, TrnTypeName, TypeFor, isValid, isDeleted, trntypeid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

/********________TOTAL RIGHTS MASTER________********/
app.post("/trmenter", (req, res) => {
  const CmpnyCode = req.body.CmpnyCode;
  const RID = req.body.RID;
  const APP_NAME = req.body.APP_NAME;
  const MODULE_NAME = req.body.MODULE_NAME;
  const RIGHT_NAME = req.body.RIGHT_NAME;
  const RIGHTS_FIELD = req.body.RIGHTS_FIELD;
  const RIGHTS_VALUE = req.body.RIGHTS_VALUE;
  const RIGHTS_CMND = req.body.RIGHTS_CMND;
  const isActive = req.body.isActive;
  const LocationID = req.body.LocationID;
  const RecordChanged = req.body.RecordChanged;
  const isValid = req.body.isValid;
  const isDeleted = req.body.isDeleted;
  const LicGrp = req.body.LicGrp;
  const ModGrp = req.body.ModGrp;
  const ModGrpDesc = req.body.ModGrpDesc;

  db.query(
    "INSERT INTO `totalrightsmst` (`CmpnyCode`, `RID`, `APP_NAME`, `MODULE_NAME`, `RIGHTS_NAME`, `RIGHTS_FIELD`, `RIGHTS_VALUE`, `RIGHTS_CMND`, `IsActive`, `LocationID`, `RecordChanged`, `isValid`, `isDeleted`, `LicGrp`, `ModGrp`, `ModGrpDesc`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      CmpnyCode,
      RID,
      APP_NAME,
      MODULE_NAME,
      RIGHT_NAME,
      RIGHTS_FIELD,
      RIGHTS_VALUE,
      RIGHTS_CMND,
      isActive,
      LocationID,
      RecordChanged,
      isValid,
      isDeleted,
      LicGrp,
      ModGrp,
      ModGrpDesc,
    ],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

app.get("/trmst", (req, res) => {
  db.query("SELECT * FROM totalrightsmst", (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.delete("/deletetrmst/:RID", (req, res) => {
  const RID = req.params.RID;
  db.query("DELETE FROM totalrightsmst WHERE RID = ?", RID, (err, result) => {
    if (err) console.log(err);
  });
});

app.get("/getrid/:RID", (req, res) => {
  const RID = req.params.RID;
  db.query("SELECT * FROM totalrightsmst WHERE RID = ?", RID, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.put("/uptrmst/:RID", (req, res) => {
  const RId = req.params.RID;
  const CompanyCode = req.body.CmpnyCode;
  const RID = req.body.RID;
  const APP_NAME = req.body.APP_NAME;
  const MODULE_NAME = req.body.MODULE_NAME;
  const RIGHTS_NAME = req.body.RIGHTS_NAME;
  const RIGHTS_FIELD = req.body.RIGHTS_FIELD;
  const RIGHTS_VALUE = req.body.RIGHTS_VALUE;
  const RIGHTS_CMND = req.body.RIGHTS_CMND;
  const IsActive = req.body.IsActive;
  const LocationID = req.body.LocationID;
  const RecordChanged = req.body.RecordChanged;
  const isValid = req.body.isValid;
  const isDeleted = req.body.isDeleted;
  const LicGrp = req.body.LicGrp;
  const ModGrp = req.body.ModGrp;
  const ModGrpDesc = req.body.ModGrpDesc;
  db.query(
    "UPDATE `totalrightsmst` SET `CmpnyCode`=?, `RID`=?, `APP_NAME`=?, `MODULE_NAME`=?, `RIGHTS_NAME`=?, `RIGHTS_FIELD`=?, `RIGHTS_VALUE`=?, `RIGHTS_CMND`=?, `IsActive`=?, `LocationID`=?, `RecordChanged`=?, `isValid`=?, `isDeleted`=?, `LicGrp`=?, `ModGrp`=?, `ModGrpDesc`=? WHERE RID=?",
    [
      CompanyCode,
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
      RId,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

/********________TICKET MASTER________********/
app.post("/tcmenter", (req, res) => {
  const CmpnyCode = req.body.CmpnyCode;
  const DocNo = req.body.DocNo;
  const DocDate = req.body.DocDate;
  const DocType = req.body.DocType;
  const AccCode = req.body.AccCode;
  const AccName = req.body.AccName;
  const OtherTradingName = req.body.OtherTradingName;
  const MobileNo = req.body.MobileNo;
  const Email = req.body.Email;
  const RequestType = req.body.RequestType;
  const Description = req.body.Description;
  const ServiceCover = req.body.ServiceCover;
  const ContractDetail = req.body.ContractDetail;
  const BillingDetail = req.body.BillingDetail;
  const OtherDetail = req.body.OtherDetail;
  const AssignedTo = req.body.AssignedTo;
  const VendorObservation = req.body.VendorObservation;
  const Conclusion = req.body.Conclusion;
  const StatusType = req.body.StatusType;
  const RegistrationDate = req.body.RegistrationDate;
  const ClosingDate = req.body.ClosingDate;
  const RegisteredBy = req.body.RegisteredBy;
  const ClosedBy = req.body.ClosedBy;
  const CustomerAttachmentLinks = req.body.CustomerAttachmentLinks;
  const VendorAttachmentLinks = req.body.VendorAttachmentLinks;
  const RecordChanged = req.body.RecordChanged;
  const DateEntered = req.body.DateEntered;

  db.query(
    "INSERT INTO `ticketmst` (`CmpnyCode`, `DocNo`, `DocDate`, `DocType`, `AccCode`, `AccName`, `OtherTradingName`, `MobileNo`, `Email`, `RequestType`, `Description`, `SeviceCover`, `ContractDetail`, `BillingDetail`, `OtherDetail`, `AssignedTo`, `VendorObservation`, `Conclusion`, `StatusType`, `RegistrationDate`, `ClosingDate`, `RegisteredBy`, `ClosedBy`, `CustomerAttachmentLinks`, `VendorAttachmentLinks`, `RecordChanged`, `DateEntered`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
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
    ],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

app.get("/ticketmst", (req, res) => {
  db.query("SELECT * FROM ticketmst", (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.delete("/deleteticketmst/:DocNo", (req, res) => {
  const DocNo = req.params.DocNo;
  db.query("DELETE FROM ticketmst WHERE DocNo = ?", DocNo, (err, result) => {
    if (err) console.log(err);
  });
});

app.get("/getdocno/:DocNo", (req, res) => {
  const DocNo = req.params.DocNo;
  db.query("SELECT * FROM ticketmst WHERE DocNo = ?", DocNo, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.put("/upticketmst/:DocNo", (req, res) => {
  const DocuNo = req.params.DocNo;
  const CompanyCode = req.body.CmpnyCode;
  const DocNo = req.body.DocNo;
  const DocDate = req.body.DocDate;
  const DocType = req.body.DocType;
  const AccCode = req.body.AccCode;
  const AccName = req.body.AccName;
  const OtherTradingName = req.body.OtherTradingName;
  const MobileNo = req.body.MobileNo;
  const Email = req.body.Email;
  const RequestType = req.body.RequestType;
  const Description = req.body.Description;
  const ServiceCover = req.body.ServiceCover;
  const ContractDetail = req.body.ContractDetail;
  const BillingDetail = req.body.BillingDetail;
  const OtherDetail = req.body.OtherDetail;
  const AssignedTo = req.body.AssignedTo;
  const VendorObservation = req.body.VendorObservation;
  const Conclusion = req.body.Conclusion;
  const StatusType = req.body.StatusType;
  const RegistrationDate = req.body.RegistrationDate;
  const ClosingDate = req.body.ClosingDate;
  const RegisteredBy = req.body.RegisteredBy;
  const ClosedBy = req.body.ClosedBy;
  const CustomerAttachmentLinks = req.body.CustomerAttachmentLinks;
  const VendorAttachmentLinks = req.body.VendorAttachmentLinks;
  const RecordChanged = req.body.RecordChanged;
  const DateEntered = req.body.DateEntered;
  db.query(
    "UPDATE `ticketmst` SET `CmpnyCode`=?, `DocNo`=?, `DocDate`=?, `DocType`=?, `AccCode`=?, `AccName`=?, `OtherTradingName`=?, `MobileNo`=?, `Email`=?, `RequestType`=?, `Description`=?, `SeviceCover`=?, `ContractDetail`=?, `BillingDetail`=?, `OtherDetail`=?, `AssignedTo`=?, `VendorObservation`=?, `Conclusion`=?, `StatusType`=?, `RegistrationDate`=?, `ClosingDate`=?, `RegisteredBy`=?, `ClosedBy`=?, `CustomerAttachmentLinks`=?, `VendorAttachmentLinks`=?, `RecordChanged`=?, `DateEntered`=? WHERE DocNo=?",
    [
      CompanyCode,
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
      DocuNo,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

/********________USER MASTER________********/
app.get("/usermst", (req, res) => {
  db.query("SELECT * FROM usermst", (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.delete("/deleteusermst/:UserID", (req, res) => {
  const UserID = req.params.UserID;
  db.query(
    "DELETE FROM userrightsmst WHERE UserID = ?",
    UserID,
    (err, result) => {
      if (err) console.log(err);
    }
  );

  db.query("DELETE FROM usermst WHERE UserID = ?", UserID, (err, result) => {
    if (err) console.log(err);
  });
});

app.get("/getuserid/:UserID", (req, res) => {
  const UserID = req.params.UserID;
  db.query("SELECT * FROM usermst WHERE UserID = ?", UserID, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.put("/upusermst/:UserID", (req, res) => {
  const userid = req.params.UserID;
  const CompanyCode = req.body.CmpnyCode;
  const UserID = req.body.UserID;
  const UserFullName = req.body.UserFullName;
  const UserDetail = req.body.UserDetail;
  const LoginID = req.body.LoginID;
  const Password = req.body.Password;
  const UserPin = req.body.UserPin;
  const UserEmailID = req.body.UserEmailID;
  const UserFP = req.body.UserFP;
  // const Photo = req.body.Photo;
  const IsActive = req.body.IsActive;
  const LicCount = req.body.LicCount;
  const DateCreated = req.body.DateCreated;
  const CreatedBy = req.body.CreatedBy;
  const RecordChanged = req.body.RecordChanged;
  const LocationID = req.body.LocationID;
  const isValid = req.body.isValid;
  const isDeleted = req.body.isDeleted;
  db.query(
    "UPDATE usermst SET CmpnyCode=?,UserID=?,UserFullName=?,UserDetail=?,LoginID=?,Password=?,UserPin=?,UserEmailID=?,UserFP=?,IsActive=?,LicCount=?,DateCreated=?,CreatedBy=?,RecordChanged=?,LocationID=?,isValid=?,isDeleted=? WHERE UserID=?",
    [
      CompanyCode,
      UserID,
      UserFullName,
      UserDetail,
      LoginID,
      Password,
      UserPin,
      UserEmailID,
      UserFP,
      // Photo,
      IsActive,
      LicCount,
      DateCreated,
      CreatedBy,
      RecordChanged,
      LocationID,
      isValid,
      isDeleted,
      userid,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/uploadphoto/:UserId", upload.single("avatar"), (req, res) => {
  const userid = req.params.UserId;
  const photo = req.file;
  const fileType = photo.mimetype.split("/")[1];
  let newFileName = photo.filename + "." + fileType;

  fs.rename(
    `./uploads/${photo.filename}`,
    `./uploads/${newFileName}`,
    function () {
      console.log("file renamed and uploaded");
    }
  );

  db.query(
    "UPDATE usermst SET Photo=? WHERE UserID=?",
    [newFileName, userid],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

app.put("/uploadfp/:UserId", upload.single("FP"), (req, res) => {
  const userid = req.params.UserId;
  const fp = req.file;
  const fileType = photo.mimetype.split("/")[1];
  let newFileName = photo.filename + "." + fileType;

  fs.rename(
    `./uploads/${photo.filename}`,
    `./uploads/${newFileName}`,
    function () {
      console.log("file renamed and uploaded");
    }
  );

  db.query(
    "UPDATE usermst SET UserFP=? WHERE UserID=?",
    [newFileName, userid],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );
});

/********________USER RIGHTS MASTER________********/
app.get("/userrightsmst", (req, res) => {
  db.query("SELECT * FROM userrightsmst", (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.delete("/deleteuserrightsmst/:UserID", (req, res) => {
  const UserID = req.params.UserID;
  db.query(
    "DELETE FROM userrightsmst WHERE UserID = ?",
    UserID,
    (err, result) => {
      if (err) console.log(err);
    }
  );

  db.query("DELETE FROM usermst WHERE UserID = ?", UserID, (err, result) => {
    if (err) console.log(err);
  });
});

app.get("/getuserid2/:UserID", (req, res) => {
  const UserID = req.params.UserID;
  db.query(
    "SELECT * FROM userrightsmst WHERE UserID = ?",
    UserID,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.put("/upuserrightsmst/:UserID", (req, res) => {
  const userid = req.params.UserID;
  const UserID = req.body.UserID;
  const CmpnyCode = req.body.CmpnyCode;
  const APP_NAME = req.body.APP_NAME;
  const MODULE_NAME = req.body.MODULE_NAME;
  const RIGHTS_NAME = req.body.RIGHTS_NAME;
  const RIGHTS_FIELD = req.body.RIGHTS_FIELD;
  const RIGHTS_VALUE = req.body.RIGHTS_VALUE;
  const RIGHTS_CMND = req.body.RIGHTS_CMND;
  const RIGHTS_GIVEN_BY = req.body.RIGHTS_GIVEN_BY;
  const LocationID = req.body.LocationID;
  const RecordChanged = req.body.RecordChanged;
  const isValid = req.body.isValid;
  const isDeleted = req.body.isDeleted;
  db.query(
    "UPDATE userrightsmst SET UserID=?,CmpnyCode=?,APP_NAME=?,MODULE_NAME=?,RIGHTS_NAME=?,RIGHTS_FIELD=?,RIGHTS_VALUE=?,RIGHTS_CMND=?,RIGHTS_GIVEN_BY=?,LocationID=?,RecordChanged=?,isValid=?,isDeleted=? WHERE UserID=?",
    [
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
      userid,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

/*******************************_____________________USER REQUESTS_____________________*******************************/

/********________COMPANY MASTER________********/
app.get("/usercompanymst/:CmpnyCode", (req, res) => {
  const CompanyCode = req.params.CmpnyCode;
  db.query(
    "SELECT * FROM companymst WHERE CmpnyCode = ?",
    CompanyCode,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

/********________CUSTOMER MASTER________********/
app.get("/usercustomermst/:CmpnyCode", (req, res) => {
  const CompanyCode = req.params.CmpnyCode;
  db.query(
    "SELECT * FROM customermst WHERE CmpnyCode = ?",
    CompanyCode,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

/********________PARAM MASTER________********/
app.get("/userparammst/:CmpnyCode", (req, res) => {
  const CmpnyCode = req.params.CmpnyCode;
  db.query(
    "SELECT * FROM parammst WHERE CmpnyCode = ?",
    CmpnyCode,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

/********________TICKET MASTER________********/
app.get("/userticketmst/:CmpnyCode", (req, res) => {
  const CompanyCode = req.params.CmpnyCode;
  db.query(
    "SELECT * FROM ticketmst WHERE CmpnyCode = ?",
    CompanyCode,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

/********________TOTAL RIGHTS MASTER________********/
app.get("/usertrmst/:CmpnyCode", (req, res) => {
  const CmpnyCode = req.params.CmpnyCode;
  db.query(
    "SELECT * FROM totalrightsmst WHERE CmpnyCode = ?",
    CmpnyCode,
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});
