import React from 'react'
import "./News.css";
import {FaCalendarDay} from "react-icons/fa";
function News ({ src, date, month, info1,info2, li1, li2, li3, li4 }){
    return(
        <div className='news'>
          <div className='news1'>
          <div className='leftNews'>
              <img src={src}/>
              <div className='time'>
                 <FaCalendarDay className='calender'/>
                 <h2><b>{date}</b></h2>
                 <p>{month}</p>
              </div>
          </div>
          <div className='rightNews'>
            <h4>{info1}</h4>
            <p>{info2}</p>
            <div className='newsList'>
                    <ul>
                        <li>{li1} </li>
                        <li>{li2}</li>
                        <li>{li3}</li>
                        <li>{li4}</li>
                    </ul>
            </div>
            
          </div>
          </div>
        </div>
    )
}

export default News