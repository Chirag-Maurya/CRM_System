import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import dayjs from "dayjs";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/usermst").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  const deleteRecord = (UserID) => {
    axios.delete(`http://localhost:8000/deleteusermst/${UserID}`);
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>User Master</h3>
          <Container className="container">
            <Row className="row">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>CmpnyCode</th>
                    <th>UserID</th>
                    <th>UserFullName</th>
                    <th>UserDetail</th>
                    <th>LoginID</th>
                    <th>Password</th>
                    <th>UserPin</th>
                    <th>UserEmailID</th>
                    <th>UserFP</th>
                    <th>Photo</th>
                    <th>IsActive</th>
                    <th>LicCount</th>
                    <th>DateCreated</th>
                    <th>CreatedBy</th>
                    <th>RecordChanged</th>
                    <th>LocationID</th>
                    <th>isValid</th>
                    <th>isDeleted</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((val) => {
                    return (
                      <tr>
                        <td>{val.CmpnyCode}</td>
                        <td>{val.UserID}</td>
                        <td>{val.UserFullName}</td>
                        <td>{val.UserDetail}</td>
                        <td>{val.LoginID}</td>
                        <td>{val.Password}</td>
                        <td>{val.UserPin}</td>
                        <td>{val.UserEmailID}</td>
                        <td>{val.UserFP}</td>
                        <td>{val.Photo}</td>
                        <td>{val.IsActive}</td>
                        <td>{val.LicCount}</td>
                        <td>
                          {dayjs(val.DateCreated).format("dddd, DD MMMM YYYY")}
                        </td>
                        <td>{val.CreatedBy}</td>
                        <td>{val.RecordChanged}</td>
                        <td>{val.LocationID}</td>
                        <td>{val.isValid}</td>
                        <td>{val.isDeleted}</td>
                        <td>
                          <Link to={`/upusermaster/${val.UserID}`}>
                            <Button variant="info">Edit</Button>
                          </Link>{" "}
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteRecord(val.UserID);
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

export default withRouter(AllUsers);
