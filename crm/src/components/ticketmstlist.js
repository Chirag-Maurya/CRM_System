import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import dayjs from "dayjs";

const AllTickets = () => {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/ticketmst").then((response) => {
      setTicket(response.data);
    });
  }, []);

  const deleteRecord = (DocNo) => {
    axios.delete(`http://localhost:8000/deleteticketmst/${DocNo}`);
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Ticket Master</h3>
          <Container className="container">
            <Row className="row">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>CmpnyCode</th>
                    <th>DocNo</th>
                    <th>DocDate</th>
                    <th>DocType</th>
                    <th>AccCode</th>
                    <th>AccName</th>
                    <th>OtherTradingName</th>
                    <th>MobileNo</th>
                    <th>Email</th>
                    <th>RequestType</th>
                    <th>Description</th>
                    <th>ServiceCover</th>
                    <th>ContractDetail</th>
                    <th>BillingDetail</th>
                    <th>OtherDetail</th>
                    <th>AssignedTo</th>
                    <th>VendorObservation</th>
                    <th>Conclusion</th>
                    <th>StatusType</th>
                    <th>RegistrationDate</th>
                    <th>ClosingDate</th>
                    <th>RegisteredBy</th>
                    <th>ClosedBy</th>
                    <th>CustomerAttachmentLinks</th>
                    <th>VendorAttachmentLinks</th>
                    <th>RecordChanged</th>
                    <th>DateEntered</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ticket.map((val) => {
                    return (
                      <tr>
                        <td>{val.CmpnyCode}</td>
                        <td>{val.DocNo}</td>
                        <td>
                          {dayjs(val.DocDate).format("dddd, DD MMMM YYYY")}
                        </td>
                        <td>{val.DocType}</td>
                        <td>{val.AccCode}</td>
                        <td>{val.AccName}</td>
                        <td>{val.OtherTradingName}</td>
                        <td>{val.MobileNo}</td>
                        <td>{val.Email}</td>
                        <td>{val.RequestType}</td>
                        <td>{val.Description}</td>
                        <td>{val.SeviceCover}</td>
                        <td>{val.ContractDetail}</td>
                        <td>{val.BillingDetail}</td>
                        <td>{val.OtherDetail}</td>
                        <td>{val.AssignedTo}</td>
                        <td>{val.VendorObservation}</td>
                        <td>{val.Conclusion}</td>
                        <td>{val.StatusType}</td>
                        <td>
                          {dayjs(val.RegistrationDate).format(
                            "dddd, DD MMMM YYYY"
                          )}
                        </td>
                        <td>
                          {dayjs(val.ClosingDate).format("dddd, DD MMMM YYYY")}
                        </td>
                        <td>{val.RegisteredBy}</td>
                        <td>{val.ClosedBy}</td>
                        <td>{val.CustomerAttachmentLinks}</td>
                        <td>{val.VendorAttachmentLinks}</td>
                        <td>{val.RecordChanged}</td>
                        <td>
                          {dayjs(val.DateEntered).format("dddd, DD MMMM YYYY")}
                        </td>
                        <td>
                          <Link to={`/upticketmaster/${val.DocNo}`}>
                            <Button variant="info">Edit</Button>
                          </Link>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteRecord(val.DocNo);
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

export default withRouter(AllTickets);
