import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import dayjs from "dayjs";

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/customermst").then((response) => {
      setCustomers(response.data);
    });
  }, []);

  function deleteRecord(AccCode) {
    axios.delete(`http://localhost:8000/deletecustomermst/${AccCode}`);
  }

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Customer Master</h3>
          <Container className="container">
            <Row className="row">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>CompanyCode</th>
                    <th>AccCode</th>
                    <th>AccType</th>
                    <th>AccName</th>
                    <th>Address</th>
                    <th>ContactPerson</th>
                    <th>PhoneFax</th>
                    <th>TaxOverride</th>
                    <th>Cr_Limit</th>
                    <th>Cr_Days</th>
                    <th>PriceId</th>
                    <th>PinNo</th>
                    <th>VatNo</th>
                    <th>SetDiscPer</th>
                    <th>SmCode</th>
                    <th>AreaID</th>
                    <th>RouteID</th>
                    <th>TownID</th>
                    <th>BizType</th>
                    <th>CurrBalance</th>
                    <th>TotalTurnover</th>
                    <th>OpeningBalance</th>
                    <th>ClosingBalance</th>
                    <th>UnAllocated</th>
                    <th>AccStatus</th>
                    <th>DateCreated</th>
                    <th>UserID</th>
                    <th>CardNo</th>
                    <th>OtherTradingName</th>
                    <th>MobileNo</th>
                    <th>EmailAdd</th>
                    <th>Add1</th>
                    <th>Add2</th>
                    <th>Add3</th>
                    <th>Add4</th>
                    <th>Add5</th>
                    <th>PoBox</th>
                    <th>CityTown</th>
                    <th>StateProvince</th>
                    <th>Country</th>
                    <th>Tele1</th>
                    <th>Fax1</th>
                    <th>Note</th>
                    <th>SiteCode</th>
                    <th>SiteName</th>
                    <th>RecordChanged</th>
                    <th>LocationID</th>
                    <th>BalancePoints</th>
                    <th>isValid</th>
                    <th>isDeleted</th>
                    <th>WHPercent</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((val) => {
                    return (
                      <tr>
                        <td>{val.CmpnyCode}</td>
                        <td>{val.AccCode}</td>
                        <td>{val.AccType}</td>
                        <td>{val.AccName}</td>
                        <td>{val.Address}</td>
                        <td>{val.ContactPerson}</td>
                        <td>{val.PhoneFax}</td>
                        <td>{val.TaxOverride}</td>
                        <td>{val.Cr_Limit}</td>
                        <td>{val.Cr_Days}</td>
                        <td>{val.PriceId}</td>
                        <td>{val.PinNo}</td>
                        <td>{val.VatNo}</td>
                        <td>{val.SetDiscPer}</td>
                        <td>{val.SmCode}</td>
                        <td>{val.AreaID}</td>
                        <td>{val.RouteID}</td>
                        <td>{val.TownID}</td>
                        <td>{val.BizType}</td>
                        <td>{val.CurrBalance}</td>
                        <td>{val.TotalTurnover}</td>
                        <td>{val.OpeningBalance}</td>
                        <td>{val.ClosingBalance}</td>
                        <td>{val.UnAllocated}</td>
                        <td>{val.AccStatus}</td>
                        <td>
                          {dayjs(val.DateCreated).format("dddd, DD MMMM YYYY")}
                        </td>
                        <td>{val.UserID}</td>
                        <td>{val.CardNo}</td>
                        <td>{val.OtherTradingName}</td>
                        <td>{val.MobileNo}</td>
                        <td>{val.EmailAdd}</td>
                        <td>{val.Add1}</td>
                        <td>{val.Add2}</td>
                        <td>{val.Add3}</td>
                        <td>{val.Add4}</td>
                        <td>{val.Add5}</td>
                        <td>{val.PoBox}</td>
                        <td>{val.CityTown}</td>
                        <td>{val.StateProvince}</td>
                        <td>{val.Country}</td>
                        <td>{val.Tele1}</td>
                        <td>{val.Fax1}</td>
                        <td>{val.Note}</td>
                        <td>{val.SiteCode}</td>
                        <td>{val.SiteName}</td>
                        <td>{val.RecordChanged}</td>
                        <td>{val.LocationID}</td>
                        <td>{val.BalancePoints}</td>
                        <td>{val.isValid}</td>
                        <td>{val.isDeleted}</td>
                        <td>{val.WHPercent}</td>
                        <td>
                          <Link to={`/upcustomermaster/${val.AccCode}`}>
                            <Button variant="info">Edit</Button>
                          </Link>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteRecord(val.AccCode);
                            }}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AllCustomers);
