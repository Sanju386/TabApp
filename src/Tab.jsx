import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { SETDATA, SETCOMPANY } from "./Redux/tabSlice";

const Tab = () => {
  const tab = useSelector((store) => store.tab);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch("https://course-api.com/react-tabs-project");

    const dataList = await response.json();

    dispatch(SETDATA(dataList));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBtn = (name) => {
    dispatch(SETCOMPANY(name));
  };

  return (
    <section className="jobs-center">
      <div className="btn-container">
        {tab.data.map((el) => {
          return (
            <button
              key={el.id}
              onClick={() => handleBtn(el.company)}
              className={`job-btn ${
                el.company === tab.company && "active-btn"
              }`}
            >
              {el.company}
            </button>
          );
        })}
      </div>

      {tab.data
        .filter((ele) => ele.company === tab.company)
        .map((item) => {
          return (
            <article key={item.id} className="job-info">
              <h3>{item.title}</h3>
              <span className="job-company">{item.company}</span>
              <p className="job-date">{item.dates}</p>

              {Array.isArray(item.duties) &&
                item.duties.map((element, index) => {
                  
                  return (
                    <div key={index} className="job-desc">
                      <FaAngleDoubleRight />
                      <p>{element}</p>
                    </div>
                  );
                })}
            </article>
          );
        })}
    </section>
  );
};

export default Tab;
