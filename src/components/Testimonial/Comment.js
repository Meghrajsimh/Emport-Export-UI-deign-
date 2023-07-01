import React from 'react'
import "./Comment.css";
import {FaStar} from "react-icons/fa";

function Comment({src,name,company ,info}){
    return(
       <div className="commentContainer">
            <div className="commentContainer1">
                  <div className='commentTop'>
                     <img src={src} />
                     <div className='commentName'>
                        <h3>{name}</h3>
                        <p>{company}</p>
                     </div>
                     <div className='notation'>
                           <h1>“</h1>
                     </div>
                  </div>
                  <div className='commentInfo'>
                      <p>{info}</p>
                  </div>
                     <FaStar className='star'/>
                     <FaStar className='star'/>
                     <FaStar className='star'/>
                     <FaStar className='star'/>
                     <FaStar className='star'/>
            </div>
       </div>
    )
}

export default Comment