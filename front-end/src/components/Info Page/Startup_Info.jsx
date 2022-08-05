import React from "react";
import "./Startup_Info.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods.js";

const Startup_Info = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [startup, setStartup] = useState({});

  useEffect(() => {
    const getStartup = async () => {
      try {
        const res = await publicRequest.get("/startups/find/" + id);
        setStartup(res.data);
        console.log(res);
      } catch {}
    };
    getStartup();
  }, [id]);



  return (
    <div className="container">
      <div className="info-heading bg-dark">
        <img className="startup-logo" src={startup.startuplogo} />
        <div className="heading-title">
          <p className="startup-name text-white">{startup.startupname}</p>
          <p className="categories text-white">{startup.category}</p>
        </div>
      </div>
      <hr />
      <div className="details">
        <p className="detail-title">Details</p>
        <hr />
        <div className="detail-content">
          <div className="location">
            <label className="location-label">Location</label>
            <p>{startup.location}</p>
          </div>
          <div className="founded-date">
            <label className="date-label">Founded Date</label>
            <p>{startup.date}</p>
          </div>
          <div className="founders">
            <label className="founders-label">Founder/s</label>
            <p>{startup.founders}</p>
          </div>
          <div className="funding-type">
            <label className="funding-label">Last Funding Type</label>
            <p>{startup.fundingtype}</p>
          </div>
          <div className="about-startup">
            <label className="about-label">About Company</label>
            <p>
            {startup.aboutcompany}
            </p>
          </div>
        </div>
      </div>

      <div className="people">
        <p className="people-title">People</p>
        <hr />
        <div className="people-content">
          <div className="employee-profile">
            <label className="employee-label">Employee Profile</label>
            <p>{startup.employeeprofile}</p>
          </div>
        </div>
      </div>
      
      <div className="contact">
        <p className="contact-title">Contacts</p>
        <hr />
        <div className="contact-content">
          <div className="website">
            <label className="website-label">Company Website</label>
            <p>{startup.companywebsite}</p>
          </div>
          <div className="mail">
            <label className="mail-label">Company Email Address</label>
            <p>{startup.companyemail}</p>
          </div>
          <div className="contactno">
            <label className="contactno-label">Contact No.</label>
            <p>{startup.contactno}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startup_Info;
