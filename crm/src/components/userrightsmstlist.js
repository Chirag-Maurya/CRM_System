import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

const AllUsersRights = () => {
  const [usersrights, setUsersrights] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/userrightsmst").then((response) => {
      console.log(response.data);
      setUsersrights(response.data);
    });
  }, []);

  const deleteRecord = (UserID) => {
    axios.delete(`http://localhost:8000/deleteuserrightsmst/${UserID}`);
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>User Rights Master</h3>
          <Container className="container">
            <Row className="row">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>UserID</th>
                    <th>CmpnyCode</th>
                    <th>APP_NAME</th>
                    <th>MODULE_NAME</th>
                    <th>RIGHTS_NAME</th>
                    <th>RIGHTS_FIELD</th>
                    <th>RIGHTS_VALUE</th>
                    <th>RIGHTS_CMND</th>
                    <th>RIGHTS_GIVEN_BY</th>
                    <th>LocationID</th>
                    <th>RecordChanged</th>
                    <th>isValid</th>
                    <th>isDeleted</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {usersrights.map((val) => {
                    return (
                      <tr>
                        <td>{val.UserID}</td>
                        <td>{val.CmpnyCode}</td>
                        <td>{val.APP_NAME}</td>
                        <td>{val.MODULE_NAME}</td>
                        <td>{val.RIGHTS_NAME}</td>
                        <td>{val.RIGHTS_FIELD}</td>
                        <td>{val.RIGHTS_VALUE}</td>
                        <td>{val.RIGHTS_CMND}</td>
                        <td>{val.RIGHTS_GIVEN_BY}</td>
                        <td>{val.LocationID}</td>
                        <td>{val.RecordChanged}</td>
                        <td>{val.isValid}</td>
                        <td>{val.isDeleted}</td>
                        <td>
                          <Link to={`/upuserrightsmaster/${val.UserID}`}>
                            <Button variant="info">Edit</Button>
                          </Link>
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

export default withRouter(AllUsersRights);
