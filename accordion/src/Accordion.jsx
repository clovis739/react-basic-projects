import React from 'react'
import { useState } from 'react'

// function Accordion({title, content}) {

// const[isActive, setIsActive] =useState(false)



//   return (
//     <section className='accordion-card' key={Math.random()}>
//         <div className="header" onClick={()=> setIsActive(!isActive)}>
//             <div className="">{title}</div>
//             <p className="icon">
//             {isActive ? "-" : "+"}
//             </p>
//         </div>
//         <div className="content">
// {isActive && <p className='card-info'>{content}</p>}
//         </div>
//     </section>
//   )
// }

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <section className="accordion-card" key={Math.random()}>
        <div className="header" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <p className="icon">{isActive ? "-" : "+"}</p>
        </div>
  
        <div className="content">
          {isActive && <p className="card-info">{content}</p>}
        </div>
      </section>
    );
  };

export default Accordion