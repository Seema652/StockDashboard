import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Updatecaption = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const handleEmojiClick = (emojiObject) => {
    setCaption((prev) => prev + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ width: "60%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
        <h4 className="mb-3 text-white p-3 text-left " style={{ backgroundColor: "black", borderRadius: "5px" }}>
          <i className="bi bi-pencil-square"></i> Update
        </h4>
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
        <div className="mb-3">
          <label htmlFor="caption" className="form-label">
            Caption
          </label>
          <div className="position-relative">
            <textarea
              className="form-control"
              id="caption"
              rows="3"
              placeholder="Enter caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
            <button
              className="btn position-absolute end-0 top-0 mt-2 me-2"
              onClick={() => setShowPicker((prev) => !prev)}
            >
              <BsEmojiSmile size={24} />
            </button>
            {showPicker && (
              <div className="position-absolute end-0 mt-2" style={{ zIndex: 1 }}>
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={() => navigate("/caption")}>
            Back
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Updatecaption;
