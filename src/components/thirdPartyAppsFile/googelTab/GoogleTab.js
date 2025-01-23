import React from "react";

const GoogleTab = () => {
  const googleCard = [
    {
      id: 1,
      icon: "fa-brands fa-google-drive",
      title: "Contacts",
      description:
        "Google Contacts is available in its free email service Gmail, as a standalone service, and as a part of Google's business.",
      btn: "fa-solid fa-circle-dot",
    },
    {
      id: 2,
      icon: "fa-brands fa-google-drive",
      title: "Drive",
      description:
        "Google Drive is a file storage and synchronization service that enables file sharing and collaborative editing.",
      btn: "fa-solid fa-circle-dot",
    },
    {
      id: 3,
      icon: "fa-brands fa-google-drive",
      title: "Docs",
      description:
        "Google Docs is an online word processor that allows you to create and format text documents.",
      btn: "fa-solid fa-circle-dot",
    },
    {
      id: 4,
      icon: "fa-brands fa-google-drive",
      title: "Sheets",
      description:
        "Google Sheets is a spreadsheet program that allows you to create, edit, and collaborate on spreadsheets online.",
      btn: "fa-solid fa-circle-dot",
    },
    {
      id: 5,
      icon: "fa-brands fa-google-drive",
      title: "Forms",
      description:
        "Google Forms is a survey administration app that allows you to create forms and surveys.",
      btn: "fa-solid fa-circle-dot",
    },
  ];

  return (
    <div className="row p-4">
      {googleCard.map((item) => (
        <div className="col-3 mb-4" key={item.id}>
          <div className="card shadow-sm border-light" style={{ cursor: 'pointer' }}>
            <div className="card-body text-center">
              <div className="d-flex justify-content-center gap-3 align-items-center mb-2">
                <i className={`${item.icon} text-primary`} style={{ fontSize: '2rem' }}></i>
                <h5 className="card-title">{item.title}</h5>
              </div>
              <p className="card-text">{item.description}</p>
              <i className={`${item.btn} text-primary`} style={{ fontSize: '1.5rem' }}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleTab;
