import React from "react";
import Nav from "../components/Nav";
import "../styles/services.css";

export default function Services() {
  const services = [
    {
      title: "Preventative Maintenance",
      description: "The best way to minimize breakdowns is doing routine maintenance",
      image: "preventative-maintenance.jpg",
    },
    {
      title: "Brake Repair & Services",
      description: "Brakes wear out over time requiring service",
      image: "brake-repair.jpg",
    },
    {
      title: "Transmission Service & Repair",
      description: "The transmission is complicated and important components of your car",
      image: "transmission-repair.jpg",
      icon: "⚙️",
    },
  ];

  return (
    <>
      <Nav /> {/* No need to pass props, Nav.jsx detects the route automatically */}
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
              {service.icon && <div className="service-icon">{service.icon}</div>}
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
