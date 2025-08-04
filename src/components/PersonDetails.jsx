import React, { useState } from "react";
import { Form, Button, Accordion } from "react-bootstrap";
export default function PersonDetails() {
  const [personDetails, setPersonDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
const [activeKey, setActiveKey] = useState("0");

const handleSubmit = (e) => {
    e.preventDefault();
    setActiveKey("1");
};
const handleBack = (e) => {
    e.preventDefault();
    setActiveKey("0");
};

return (
    <div className="container" data-bs-theme="dark" style={{ textAlign: 'center', padding: '20px' }}>
        <Accordion activeKey={activeKey} onSelect={setActiveKey}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Person Details</Accordion.Header>
                <Accordion.Body>
                    <div className="form">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter First name"
                                    value={personDetails.firstName}
                                    onChange={(e) =>
                                        setPersonDetails({
                                            ...personDetails,
                                            firstName: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Last name"
                                    value={personDetails.lastName}
                                    onChange={(e) =>
                                        setPersonDetails({ ...personDetails, lastName: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Person Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={personDetails.email}
                                    onChange={(e) =>
                                        setPersonDetails({ ...personDetails, email: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Submitted Details</Accordion.Header>
                <Accordion.Body>
                    <div className="container">
                        <div>
                            <h3>Person Details</h3>
                            <p className="text-muted">First Name: {personDetails.firstName}</p>
                            <p className="text-muted">Last Name: {personDetails.lastName}</p>
                            <p className="text-muted">Email: {personDetails.email}</p>
                        </div>
                         <Button variant="primary" type="submit" onClick={handleBack}>
                                Back
                            </Button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
);
}
