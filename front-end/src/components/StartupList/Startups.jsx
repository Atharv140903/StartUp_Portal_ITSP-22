import { useEffect, useState } from "react";
import React from "react";
import Startup from "./Startup";
import { useLocation } from "react-router";
import axios from "axios";

 const Startups = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [startups, setStartups] = useState([]);

  useEffect (() => {
     const getStartups = async () => {
      try{
        const res = await axios.get(cat
          ? `http://localhost:5000/api/startups?category=${cat}`
          : "http://localhost:5000/api/startups")
        setStartups(res.data);
      }
      catch (err) {}
     };
     getStartups()
  }, [cat]);

  return (
    <div>
      <div className="category-container px-4 py-2">
        <h2 className="pb-2 border-bottom">{cat}</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {startups.map((item)=>(
            <Startup item={item} key={item.id}/>
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default Startups