import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import dayjs from "dayjs";

const AllCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/companymst").then((response) => {
      setCompanies(response.data);
    });
  }, []);

  const deleteRecord = (CmpnyCode) => {
    axios.delete(`http://localhost:8000/deletecompanymst/${CmpnyCode}`);
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Company Master</h3>
          <Container className="container">
            <Row className="row">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>CompanyCode</th>
                    <th>CompanyName</th>
                    <th>Address1</th>
                    <th>Address2</th>
                    <th>PoBox</th>
                    <th>City</th>
                    <th>Province</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Fax</th>
                    <th>Email</th>
                    <th>RegistrationNo</th>
                    <th>VatNo</th>
                    <th>PinNo</th>
                    <th>BranchNo</th>
                    <th>BranchHq</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>Current</th>
                    <th>RunDate</th>
                    <th>DateCreated</th>
                    <th>UserID</th>
                    <th>LocationID</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((val) => {
                    return (
                      <tr>
                        <td>{val.CmpnyCode}</td>
                        <td>{val.CmpnyName}</td>
                        <td>{val.Address1}</td>
                        <td>{val.Address2}</td>
                        <td>{val.PoBox}</td>
                        <td>{val.City}</td>
                        <td>{val.Province}</td>
                        <td>{val.Country}</td>
                        <td>{val.Phone}</td>
                        <td>{val.Fax}</td>
                        <td>{val.Email}</td>
                        <td>{val.RegistrationNo}</td>
                        <td>{val.VatNo}</td>
                        <td>{val.PinNo}</td>
                        <td>{val.BranchNo}</td>
                        <td>{val.BranchHq}</td>
                        <td>
                          {dayjs(val.StartDate).format("dddd, DD MMMM YYYY")}
                        </td>
                        <td>
                          {dayjs(val.EndDate).format("dddd, DD MMM YYYY")}
                        </td>
                        <td>{val.Current}</td>
                        <td>
                          {dayjs(val.RunDate).format("dddd, DD MMM YYYY")}
                        </td>
                        <td>
                          {dayjs(val.DateCreated).format("dddd, DD MMM YYYY")}
                        </td>
                        <td>{val.UserID}</td>
                        <td>{val.LocationID}</td>
                        <td>
                          <Link to={`/upcompanymaster/${val.CmpnyCode}`}>
                            <Button variant="info">Edit</Button>
                          </Link>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteRecord(val.CmpnyCode);
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

export default withRouter(AllCompanies);
