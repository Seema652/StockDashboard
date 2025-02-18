import React from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Faquestion() {
  const navigate = useNavigate();

  const faqList = [
    {
      id: 1,
      question: "What is the Watermark feature?",
      answer:
        "The Watermark feature allows you to brand all your image content with your company's logo. The Watermark feature is customizable per social media account.",
    },
    {
      id: 2,
      question: "Can I post on a Facebook group where I'm not an admin?",
      answer:
        "No, you can use it only for posting on Facebook groups where you are an admin.",
    },
    {
      id: 3,
      question: "Is this a mobile app?",
      answer:
        "No, there is no mobile app. However, it can work equally well on desktop and mobile devices.",
    },
    {
      id: 4,
      question: "What Social Media Channels are supported?",
      answer:
        "Instagram offers various content formats, including image and video posts, stories, carousels, and reels. On Facebook, users can interact through pages and groups, while Twitter allows sharing updates in the form of tweets.",
    },
  ];

  const handleDelete = (faqId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
  };

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 bg-black p-3 rounded text-white">
        <h3 className="mb-3 mb-md-0">FAQs</h3>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search FAQs..."
            style={{ maxWidth: "250px" }}
          />
          <button
            className="btn btn-success"
            onClick={() => navigate("/faqsmanager/faqupdate")}
          >
            <FaPlus className="me-1" />
          </button>
        </div>
      </div>

      <div className="row g-3">
        {faqList.map((faq) => (
          <div key={faq.id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 border-0 shadow-lg">
              <div className="card-body" style={{ maxHeight: "150px", overflowY: "auto" }}>
                <h5 className="card-title bg-white p-2">{faq.question}</h5>
                <p className="card-text">{faq.answer}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(faq.id)}
                >
                  <FaTrash className="me-1" /> Delete
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    navigate("/faqsmanager/faqupdate", {
                      state: { question: faq.question, answer: faq.answer },
                    })
                  }
                >
                  <FaEdit className="me-1" /> Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faquestion;
