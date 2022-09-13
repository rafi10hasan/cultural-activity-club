import React from 'react';
import './Content.css'
const Content = (props) => {
    const{img,title,Age,time}=props.cultural;
    const {handleAddToCalculation}=props;
    return (
        <div className="content"> 
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h4>For Age:{Age}</h4>
            <h4>Time:{time} seconds</h4>
            <button onClick={()=>handleAddToCalculation(props.cultural)}>Add To List</button>
        </div>
    );
};

export default Content;