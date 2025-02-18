import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";

function Composer() {
  const [caption, setCaption] = React.useState("");
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);

  const handleEmojiClick = (emojiObject) => {
    setCaption((prevCaption) => prevCaption + emojiObject.emoji);
  };

  return (
    <div className="container-fluid">
      <div className="row">
      
        <div className="col-12 mb-3 text-center">
          <ul className="nav nav-tabs d-inline-flex justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#media">
                <i className="bi bi-image"></i> Media
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#link">
                <i className="bi bi-link"></i> Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#text">
                <i className="bi bi-text-left"></i> Text
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="m-0">Media</h5>
              <div>
                <i className="bi bi-display me-2"></i>
                <i className="bi bi-cloud-upload me-2"></i>
                <i className="bi bi-grid"></i>
              </div>
            </div>
            <div className="card-body overflow-auto" style={{ maxHeight: '70vh' }}>
              <div className="row">
                {Array.from({ length: 15 }).map((_, index) => (
                  <div className="col-4 mb-3" key={index}>
                    <div className="text-center">
                      <i className="bi bi-folder-fill text-warning fs-2"></i>
                      <p className="text-truncate">Folder {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
       
          <div className="card h-100">
            <div className="card-header">
              <h5 className="m-0">New Post</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <select className="form-select">
                  <option>Please select a profile</option>
                </select>
              </div>
              <div className="mb-3 border rounded p-3 bg-light text-center">
                <p className="m-0">Drag media here to post</p>
              </div>
              <div className="mb-3 position-relative">
                <textarea
                  id="caption-input"
                  className="form-control"
                  rows="3"
                  placeholder="Write a caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                ></textarea>
                <button
                  className="btn btn-outline-secondary btn-sm position-absolute"
                  style={{ bottom: '10px', right: '10px' }}
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <BsEmojiSmile />
                </button>
                {showEmojiPicker && (
                  <div className="position-absolute" style={{ bottom: '50px', right: '10px' }}>
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                  </div>
                )}
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="bi bi-calendar"></i>
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="bi bi-link-45deg"></i>
                </button>
                <button className="btn btn-outline-secondary btn-sm">URL Shortener</button>
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option>Immediately</option>
                </select>
              </div>
              <button className="btn btn-primary w-100">Send now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
      
          <div className="card h-100">
            <div className="card-header">
              <h5 className="m-0">Network Preview</h5>
            </div>
            <div className="card-body overflow-auto" style={{ maxHeight: '70vh' }}>
              {['Facebook', 'Instagram', 'Twitter'].map((network) => (
                <div className="mb-4" key={network}>
                  <h6>
                    <i className={`bi bi-${network.toLowerCase()} me-2`}></i>
                    {network}
                  </h6>
                  <div className="border rounded p-3 bg-light">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-person-circle fs-2 me-2"></i>
                      <div>
                        <p className="m-0">Your Name</p>
                        <small>Feb 8</small>
                      </div>
                    </div>
                    <div className="bg-white rounded p-5 text-center">
                      <i className="bi bi-image fs-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <span>Like</span>
                      <span>Comment</span>
                      <span>Share</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Composer;
