import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Content from '../Content/Content';
import './Cultural.css'
const Cultural = () => {

    const [culturals,setCultural]=useState([]);
    const [time,setTime]=useState([]);
    const [second,setSecond]=useState(localStorage.getItem("seconds")||0)


    const addTosecond=(time)=>{
              localStorage.setItem('seconds',time);
              let number=localStorage.getItem("seconds");
              setSecond(number)
    }


    useEffect( ()=>{
        fetch('cultural.json')
       .then(res => res.json())
       .then(data => setCultural(data))
    },[])
   
    const notify = () => toast("congratulations!");

   const handleAddToCalculation=(culturals)=>{
      const newTime=[...time,culturals];
      setTime(newTime);
   }

   let total=0;
   for(const element of time){
      total=total+element.time;
   }

    return (
        <div className="main-container">
            
            <div className="cultural-container">
               {
                culturals.map(cultural=><Content
                    key={cultural.id}
                    cultural={cultural}
                    handleAddToCalculation={handleAddToCalculation}
                    >

                    </Content>)
               }
            </div>

            <div className="cultural-right-container">
                 <h3>Md.Rafi Hasan</h3>
                 <h4>Dhanmondi,shukrabad</h4>
                 <div className='user'>
                      <div>
                          <h3>70KG</h3>
                          <h4>Weight</h4>
                      </div>

                      <div>
                          <h3>5.8</h3>
                          <h4>Height</h4>
                      </div>

                      <div>
                          <h3>24YRS</h3>
                          <h4>Age</h4>
                      </div>
                 </div>
                 <h4>Details:{culturals.length}</h4>

                 <div>
                    <h3>Add a Break:</h3>
                    <div className='break-content'>
                         <button onClick={()=>addTosecond(10)}>10s</button>
                         <button onClick={()=>addTosecond(20)}>20s</button>
                         <button onClick={()=>addTosecond(30)}>30s</button>
                         <button onClick={()=>addTosecond(40)}>40s</button>
                         <button onClick={()=>addTosecond(50)}>50s</button>
                    </div>
                 </div>

                 <div>
                     <h3>Exercise Details:</h3>
                     <div className='exercise-details'>
                        <h3>Exercise Time:</h3>
                        <h3>{total}s</h3>
                     </div>
                      
                     <div className='exercise-details'>
                        <h3>Break Time:</h3>
                        <h3>{second}s</h3>
                     </div>

                 </div>

                 <div className='activity'>
                    <button onClick={notify}>Activity Completed</button>
                    <ToastContainer/>
                 </div>
            </div>
        </div>
    );
};

export default Cultural;