import React, { useState } from 'react';

function DocumentManagementForm() {
  const [documents, setDocuments] = useState([{ id: 1, title: '', type: '', isMandatory: false }]);

  const addDocument = () => {
    setDocuments([
      ...documents,
      { id: documents.length + 1, title: '', type: '', isMandatory: false },
    ]);
  };

  const handleDocumentChange = (id, field, value) => {
    const updatedDocuments = documents.map((doc) =>
      doc.id === id ? { ...doc, [field]: value } : doc
    );
    setDocuments(updatedDocuments);
  };

  const removeDocument = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Document Management</h4>

        <form>
          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
            />
          </div>

          {/* Is Mandatory */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isMandatory"
            />
            <label className="form-check-label" htmlFor="isMandatory">
              Is Mandatory
            </label>
          </div>

          {/* Documents to be Sent */}
          <div className="mb-3">
            <label htmlFor="documentsToSend" className="form-label">
              Documents to be Sent
            </label>
            <input
              type="text"
              className="form-control"
              id="documentsToSend"
              placeholder="Enter documents to be sent"
            />
          </div>

          {/* Documents to be Received */}
          <div className="mb-3">
            <label htmlFor="documentsToReceive" className="form-label">
              Documents to be Received
            </label>
            <input
              type="text"
              className="form-control"
              id="documentsToReceive"
              placeholder="Enter documents to be received"
            />
          </div>
        </form>

        {/* Table for documents */}
        <h5 className="mt-4">Documents List</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Documents</th>
              <th>Type</th>
              <th>Is Mandatory</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={doc.title}
                    onChange={(e) =>
                      handleDocumentChange(doc.id, 'title', e.target.value)
                    }
                    placeholder="Enter document name"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={doc.type}
                    onChange={(e) =>
                      handleDocumentChange(doc.id, 'type', e.target.value)
                    }
                    placeholder="Enter document type"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={doc.isMandatory}
                    onChange={(e) =>
                      handleDocumentChange(doc.id, 'isMandatory', e.target.checked)
                    }
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeDocument(doc.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary btn-sm mt-2"
          onClick={addDocument}
        >
          Add Document
        </button>
      </div>
    </div>
  );
}

export default DocumentManagementForm;
