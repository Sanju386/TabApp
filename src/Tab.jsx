import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AppContext } from "./Context";


const Tab = () => {

  // const [data, setData] = useState([]);
  // const [company, setCompany] = useState("TOMMY");
 

  const [state,dispatch] = useContext(AppContext)
  console.log(state)
 
  // const {data,setData,company,setCompany} = App


 

  const fetchData = async () => {
    const response = await fetch("https://course-api.com/react-tabs-project");

    const dataList = await response.json();

    // setData(dataList);

   dispatch({type:"SETDATA",payload: dataList})
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBtn = (name) => {
    // setCompany(name);
    dispatch({type:"SETCOMPANY", payload: name})
  };

  return (
    <section className="jobs-center">


      <div className="btn-container">
        {state.data.map((el) => {
          return (
            <button onClick={() => handleBtn(el.company)} className={`job-btn ${ el.company === state.company && "active-btn"}`}>
              {el.company}
            </button>
          );
        })}
      </div>



      {state.data
        .filter((ele) => ele.company === state.company)
        .map((item) => {
          return (
            <article key={item.id} className="job-info">
              <h3>{item.title}</h3>
              <span className="job-company">{item.company}</span>
              <p className="job-date">{item.dates}</p>

              {Array.isArray(item.duties) &&
                item.duties.map((element) => {
                  return (
                    <div key={element} className="job-desc">
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
