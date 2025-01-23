import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Tab, Tabs } from 'react-bootstrap';

const KeywordTracking = () => {
  const keywords = [
    { keyword: '53x', detectedIn: 'WhatsApp', message: 'whatsapp checking on Olegovich 53x', date: 'Dec 20, 2024, 4:08 PM' },
    { keyword: 'CD9', detectedIn: 'Browser Search', message: 'user searched for CD9', date: 'Dec 20, 2024, 3:01 PM' },
    { keyword: 'nude pics', detectedIn: 'Email', message: 'keyword emails healthy ', date: 'Dec 20, 2024, 2:47 PM' },
    { keyword: 'sex tapes', detectedIn: 'Tinder Messages', message: 'Soluta ea a .', date: 'Dec 19, 2024, 5:18 PM' },
    { keyword: 'Cocaine', detectedIn: 'Browser Search', message: 'user searched for Cocaine', date: 'Dec 20, 2024, 4:04 PM' },
    { keyword: 'getting high', detectedIn: 'Browser Search', message: 'user searched for getting high', date: 'Dec 20, 2024, 11:28 AM' },
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', width: '100%', padding: '20px' }}>
      <div className="container my-5">
      <h1
                className="fw-bold mb-4"
                style={{ fontSize: '30px', textAlign: 'left', width: '100%' }}
            >
               Keyword Tracking
            </h1>
        <div className="card shadow-lg">
          <div className="card-body">
            <Tabs 
              defaultActiveKey="detected" 
              id="keyword-tracking-tabs" 
              className="mb-3"
              style={{ background: 'transparent' }}
            >
              <Tab 
                eventKey="detected" 
                title="Detected Keywords"
                tabClassName="bg-transparent"
              >
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr >
                        <th style={{ backgroundColor: '#000000', color: '#ffffff' }}>Keyword</th>
                        <th style={{ backgroundColor: '#000000', color: '#ffffff' }}>Detected In</th>
                        <th style={{ backgroundColor: '#000000', color: '#ffffff' }}>Message</th>
                        <th style={{ backgroundColor: '#000000', color: '#ffffff' }}>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {keywords.map((item, index) => (
                        <tr key={index}>
                          <td colSpan="4" className="p-0">
                            <div className="card my-2" style={{ backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
                              <div className="card-body d-flex justify-content-between align-items-center">
                                <div className="col-3">{item.keyword}</div>
                                <div className="col-4">
                                  <i className={`bi ${
                                    item.detectedIn.toLowerCase().includes('whatsapp') 
                                      ? 'bi-whatsapp' 
                                      : item.detectedIn.toLowerCase().includes('browser') 
                                      ? 'bi-search' 
                                      : item.detectedIn.toLowerCase().includes('email') 
                                      ? 'bi-envelope' 
                                      : item.detectedIn.toLowerCase().includes('tinder')
                                      ? 'bi-chat-dots'
                                      : 'bi-app'
                                  } me-2`}></i>
                                  {item.detectedIn}
                                </div>
                                <div className="col-3">{item.message}</div>
                                <div className="col-3">{item.date}</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Tab>
              <Tab 
                eventKey="rules" 
                title="Rules"
                tabClassName="bg-transparent"
              >
                <div className="text-center py-5">
                  <h5>Rules Page Coming Soon</h5>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeywordTracking;
