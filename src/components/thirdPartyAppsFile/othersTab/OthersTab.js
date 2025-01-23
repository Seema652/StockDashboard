import React from "react";

const OthersTab = () => {
  const googleCard = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Contacts is available in its free email service Gmail, as a standalone service, and as a part of Google's business.",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Drive is a file storage and synchronization service that enables file sharing and collaborative editing.",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Docs is an online word processor that allows you to create and format text documents.",
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Sheets is a spreadsheet program that allows you to create, edit, and collaborate on spreadsheets online.",
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Forms is a survey administration app that allows you to create forms and surveys.",
    },
  ];

  const PaymentGateway = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Contacts is available in its free email service Gmail, as a standalone service, and as a part of Google's business.",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Drive is a file storage and synchronization service that enables file sharing and collaborative editing.",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Docs is an online word processor that allows you to create and format text documents.",
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Sheets is a spreadsheet program that allows you to create, edit, and collaborate on spreadsheets online.",
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
      description:
        "Google Forms is a survey administration app that allows you to create forms and surveys.",
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <h3>Telephony</h3>
        <div className="row p-4">
          {googleCard.map((item) => (
            <div className="col-3 mb-4" key={item.id}>
              <div className="card shadow-sm border-light" style={{ cursor: "pointer" }}>
                <div className="card-body text-center">
                  <img src={item.img} alt="Google logo" style={{ width: "50px", height: "50px" }} />
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary">Enable</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-12">
        <h3>Payment Gateway</h3>
        <div className="row p-4">
          {PaymentGateway.map((item) => (
            <div className="col-3 mb-4" key={item.id}>
              <div className="card shadow-sm border-light" style={{ cursor: "pointer" }}>
                <div className="card-body text-center">
                <img src={item.img} alt="Google logo" style={{ width: "50px", height: "50px" }} />
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary">Enable</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OthersTab;
