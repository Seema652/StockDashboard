import React from "react";
import { Button, Table } from "react-bootstrap";

function Language() {
    const languages = [
        {
            name: "Gujarati",
            direction: "Left to Right",
            created: "2023-02-17 17:12:24",
        },
        {
            name: "Urdu",
            direction: "Right to Left",
            created: "2023-02-17 17:12:24",
        },
        {
            name: "Marathi",
            direction: "Left to Right",
            created: "2023-02-17 17:12:24",
        },
        {
            name: "Chinese",
            direction: "Left to Right",
            created: "2023-02-17 17:12:24",
        },
    ];

    return (
        <div className="container mt-4">
            <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3 rounded-top">
                <h4 className="text-light">Language Profile Listing</h4>
                <div className="d-flex gap-2">
                    <Button variant="danger">Sync Language</Button>
                    <Button variant="danger">Add Language</Button>
                    <Button variant="danger">Back</Button>
                </div>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Language</th>
                        <th>Direction</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {languages.map((language, index) => (
                        <tr key={index}>
                            <td>{language.name}</td>
                            <td>{language.direction}</td>
                            <td>{language.created}</td>
                            <td>
                                <Button variant="primary" size="sm" className="me-2">
                                    Edit
                                </Button>
                                <Button variant="success" size="sm">
                                    Add Words
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Language;
