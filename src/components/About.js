import React, {useState} from 'react'
// import React from "react";
// import { createRoot } from "react-dom/client";

export default function About(props) {
  // const [myStyle, setmystyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   border: '1px solid white',
  //   transition: '0.8s'
    
  // })
  // const [btntext, setbtntext] = useState("Enable Dark Mode")

  // const toggleStyle = ()=>{
  //   if(myStyle.color === 'white'){
  //     setmystyle({
  //     color: 'black',
  //     backgroundColor: 'white',
  //     border: '1px solid white',
  //     transition: '0.8s'

      

  //     })
  //     setbtntext("Enable Dark Mode")
  //   }
  //   else{
  //     setmystyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white',
  //       transition: '0.8s'

  //     })
  //     setbtntext("Enable Light Mode")
  //   }
  // }
  return (
    <div className='container  my-3' style={{background: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', transition: '0.8s'}}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{background: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', transition: '0.8s'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', transition: '0.8s'}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{background: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', transition: '0.8s'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{background: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', transition: '0.8s'}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{background: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', transition: '0.8s'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{background: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', transition: '0.8s'}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong> This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button onClick={toggleStyle} className="p-3 mb-2 b-radius my-2 bg-primary text-white" type="button" >{btntext} </button> */}
    </div>
  )
}


