import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

const AllParam = () => {
  const [param, setParam] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/parammst").then((response) => {
      setParam(response.data);
    });
  }, []);

  const deleteRecord = (ParamID) => {
    axios.delete(`http://localhost:8000/deleteparammst/${ParamID}`);
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Param Master</h3>
          <Container className="container">
            <Row className="row">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ParamID</th>
                    <th>CmpnyCode</th>
                    <th>AppName</th>
                    <th>ModuleName</th>
                    <th>Parameters</th>
                    <th>ParamValue</th>
                    <th>RecordChanged</th>
                    <th>LocationID</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {param.map((val) => {
                    return (
                      <tr>
                        <td>{val.ParamID}</td>
                        <td>{val.CmpnyCode}</td>
                        <td>{val.AppName}</td>
                        <td>{val.ModuleName}</td>
                        <td>{val.Parameters}</td>
                        <td>{val.ParamValue}</td>
                        <td>{val.RecordChanged}</td>
                        <td>{val.LocationID}</td>
                        <td>
                          <Link to={`/upparammaster/${val.ParamID}`}>
                            <Button variant="info">Edit</Button>
                          </Link>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteRecord(val.ParamID);
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

export default withRouter(AllParam);
