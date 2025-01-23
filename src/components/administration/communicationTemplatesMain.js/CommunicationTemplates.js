import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCog, 
  FaCalendarAlt, 
  FaMoneyBillWave, 
  FaExchangeAlt, 
  FaClipboardList, 
  FaEdit, 
  FaComments, 
  FaWhatsapp 
} from 'react-icons/fa'; // Import necessary icons

// Define the menu items with their corresponding icons
const menuItems = [
  { to: '#', icon: <FaCog />, label: 'Email Templates' },
  { to: '#', icon: <FaCalendarAlt />, label: 'Default Mail Templates' },
  { to: '#', icon: <FaExchangeAlt />, label: 'Social Mappings' },
  { to: '#', icon: <FaClipboardList />, label: 'SMS Templates' },
  { to: '#', icon: <FaEdit />, label: 'Task Templates' },
  { to: '#', icon: <FaClipboardList />, label: 'Notification Templates' },
  { to: '#', icon: <FaCog />, label: 'Social Templates' },
  { to: '#', icon: <FaWhatsapp />, label: 'WhatsApp Template Mapping' },
  { to: '#', icon: <FaExchangeAlt />, label: 'Webhook' },
  { to: '#', icon: <FaMoneyBillWave />, label: 'Contact Info Update' },
  { to: '#', icon: <FaMoneyBillWave />, label: 'Mail All' },
  { to: '#', icon: <FaMoneyBillWave />, label: 'Mail All Report' },
  { to: '#', icon: <FaMoneyBillWave />, label: 'SMS All' },
  { to: '#', icon: <FaMoneyBillWave />, label: 'SMS All Report' },
];

const CommunicationTemplates = () => {
  return (
    <div className="container mt-4">
      <h5 className="bg-dark text-light rounded px-4 py-2 mb-4 fs-4">
      Communication Templates</h5>
      <div className="card shadow-sm">
        <div className="card-body">
          <ul className="list-unstyled">
            {/* Iterate over the menuItems array */}
            {menuItems.map((item, index) => (
              <li key={index} className="mb-3">
                <Link to={item.to} className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                  {item.icon && <span className="me-2">{item.icon}</span>}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommunicationTemplates;
