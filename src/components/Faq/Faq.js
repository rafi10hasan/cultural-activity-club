import React from 'react';
import './Faq.css'

const Faq = () => {
    return (

        <div>
            <h2 className='text-center'>Frequently asked Question?</h2>
            <div className='faq-container'>
               <div className='faq'>
                  <h2>How Does React Work?</h2>
                  <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
               </div>

               <div className='faq'>
                  <h2>Difference Between props and state?</h2>
                  <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
               </div>


               <div className='faq'>
                  <h2>What works useEffect without data load?</h2>
                  <p>Use the useLayoutEffect() hook instead of the useEffect() hook here. This will run synchronously directly after React calculates the DOM changes but before it paints those changes to the screen.</p>
               </div>
        </div>
        </div>
    );
};

export default Faq;