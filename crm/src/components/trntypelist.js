import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

const AllTrnTypes = () => {
  const [trntypes, setTrnTypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/trntype").then((response) => {
      setTrnTypes(response.data);
    });
  }, []);

  const deleteRecord = (TrnTypeId) => {
    axios.delete(`http://localhost:8000/deletetrntype/${TrnTypeId}`);
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Trn Type Master</h3>
          <Container className="container">
            <Row className="row">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>AppName</th>
                    <th>TrnTypeId</th>
                    <th>TrnTypeName</th>
                    <th>TypeFor</th>
                    <th>isValid</th>
                    <th>isDeleted</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {trntypes.map((val) => {
                    return (
                      <tr>
                        <td>{val.AppName}</td>
                        <td>{val.TrnTypeId}</td>
                        <td>{val.TrnTypeName}</td>
                        <td>{val.TypeFor}</td>
                        <td>{val.isValid}</td>
                        <td>{val.isDeleted}</td>
                        <td>
                          <Link to={`/uptrntype/${val.TrnTypeId}`}>
                            <Button variant="info">Edit</Button>
                          </Link>{" "}
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteRecord(val.TrnTypeId);
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

export default withRouter(AllTrnTypes);
