import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Keylogger = () => {
    const logs = [
        { app: 'Instagram', text: 'I thought you already talked to her', date: 'Dec 20, 2024, 10:16 PM' },
        { app: 'Chrome', text: 'what is my ip address', date: 'Dec 20, 2024, 8:22 PM' },
        { app: 'Instagram', text: 'just don’t tell anyone', date: 'Dec 20, 2024, 2:13 PM' },
        { app: 'Snapchat', text: 'nice pic', date: 'Dec 19, 2024, 9:40 PM' },
        { app: 'Messenger', text: 'did she say anything to you? or dad?', date: 'Dec 19, 2024, 9:10 PM' },
        { app: 'WhatsApp', text: 'should we meet up tomorrow before classes?', date: 'Dec 19, 2024, 1:55 PM' },
        { app: 'WhatsApp', text: 'hey, how are you doing?', date: 'Dec 18, 2024, 3:32 PM' },
        { app: 'Gallery', text: '203917', date: 'Dec 18, 2024, 12:21 PM' },
        { app: 'Chrome', text: 'Bookstores near me', date: 'Dec 18, 2024, 12:20 PM' },
    ];

    return (
        <div
            style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1
                className="fw-bold mb-4"
                style={{ fontSize: '30px', textAlign: 'left', width: '100%' }}
            >
                Keylogger Logs
            </h1>

            <div
                className="card shadow-sm"
                style={{
                    borderRadius: '10px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <div className="card-header bg-dark text-white border-bottom d-flex">
                    <div className="col-3 fw-bold">App</div>
                    <div className="col-6 fw-bold">Text</div>
                    <div className="col-3 fw-bold">Date</div>
                </div>

                <div
                    style={{
                        maxHeight: '400px',
                        overflowY: 'auto',
                        border: '1px solid #e0e0e0',
                        borderRadius: '5px',
                        padding: '10px',
                        backgroundColor: '#f7f7f7',
                    }}
                >
                    {logs.map((log, index) => (
                        <div
                            key={index}
                            className="d-flex align-items-center mb-2 p-2"
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #dcdcdc',
                                borderRadius: '5px',
                            }}
                        >
                            <div className="col-3 d-flex align-items-center">
                                <div
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        backgroundColor: '#000000',
                                        color: '#ffffff',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: '10px',
                                    }}
                                >
                                    <i
                                        className={`bi bi-${log.app.toLowerCase() === 'instagram' ? 'instagram' : log.app.toLowerCase() === 'chrome' ? 'browser-chrome' : log.app.toLowerCase() === 'snapchat' ? 'camera' : log.app.toLowerCase() === 'whatsapp' ? 'whatsapp' : log.app.toLowerCase() === 'gallery' ? 'images' : 'chat-dots'}`}
                                    ></i>
                                </div>
                                {log.app}
                            </div>
                            <div className="col-6 text-truncate">{log.text}</div>
                            <div className="col-3 text-muted small">{log.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Keylogger;
