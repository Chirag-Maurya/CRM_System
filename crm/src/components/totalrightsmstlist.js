import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

const AllTotalRights = () => {
  const [totalrights, setTotalrights] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/trmst").then((response) => {
      setTotalrights(response.data);
      console.log(response.data);
    });
  }, []);

  const deleteRecord = (RID) => {
    axios.delete(`http://localhost:8000/deletetrmst/${RID}`);
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Total Rights Master</h3>
          <Container className="container">
            <Row className="row">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>CmpnyCode</th>
                    <th>RID</th>
                    <th>APP_NAME</th>
                    <th>MODULE_NAME</th>
                    <th>RIGHTS_NAME</th>
                    <th>RIGHTS_FIELD</th>
                    <th>RIGHTS_VALUE</th>
                    <th>RIGHTS_CMND</th>
                    <th>IsActive</th>
                    <th>LocationID</th>
                    <th>RecordChanged</th>
                    <th>isValid</th>
                    <th>isDeleted</th>
                    <th>LicGrp</th>
                    <th>ModGrp</th>
                    <th>ModGrpDesc</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {totalrights.map((val) => {
                    return (
                      <tr>
                        <td>{val.CmpnyCode}</td>
                        <td>{val.RID}</td>
                        <td>{val.APP_NAME}</td>
                        <td>{val.MODULE_NAME}</td>
                        <td>{val.RIGHTS_NAME}</td>
                        <td>{val.RIGHTS_FILED}</td>
                        <td>{val.RIGHTS_VALUE}</td>
                        <td>{val.RIGHTS_CMND}</td>
                        <td>{val.IsActive}</td>
                        <td>{val.LocationID}</td>
                        <td>{val.RecordChanged}</td>
                        <td>{val.isValid}</td>
                        <td>{val.isDeleted}</td>
                        <td>{val.LicGrp}</td>
                        <td>{val.ModGrp}</td>
                        <td>{val.ModGrpDesc}</td>
                        <td>
                          <Link to={`/uptotalrightsmaster/${val.RID}`}>
                            <Button variant="info">Edit</Button>
                          </Link>{" "}
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteRecord(val.RID);
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

export default withRouter(AllTotalRights);
