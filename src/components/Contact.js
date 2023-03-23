import React, { useState } from "react";
import '../css/Contact.css'
  
export default function Contact() {
  const [values, setValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  function isEmpty(event){
      let currentElement = event.target
      if(currentElement.value === ""){
        setErrors({ErrorField: `Field "${event.target.name}" is required`})
      }else{
        setErrors({})
      }
  }

  function send(event){
    setErrors({})
  }
 
  function validateEmail(e){
    e.preventDefault();
    let email = values.email
    let errors = {};
    
   
    if (!email.includes('@') || email.length < 10) {
      errors.email = "Invalid email address";
    }else{
      errors = {}
    }
 
    setErrors(errors);

  };

 
  function setEmail(e){
    setValues((values) => ({ ...values, email: e.target.value }));
  };
 
  return (
    <div id="form">
        <form onSubmit={validateEmail}>
            <h2>Contact Form</h2>
            <div className="mb-3">
               <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
               <input className="form-control" id="exampleFormControlInput1" placeholder="John" name="Name" onMouseOut={isEmpty} onMouseOver={send} />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleFormControlInput2"  placeholder="email@example.com" value={values.email} name="Email" onChange={setEmail} onMouseOut={isEmpty} onMouseOver={send}/>
           </div>
           <div className="mb-3">
               <label htmlFor="exampleFormControlTextarea1" className="form-label">Massage</label>
               <textarea className="form-control" id="exampleFormControlTextarea3" rows="3" name="Massage" onMouseOut={isEmpty} onMouseOver={send}></textarea>
           </div>
        <div><button type="submit" className="btn btn-primary">Submit</button></div>
        <br />
          {Object.entries(errors).map(([key, error]) => (
        <span key={`${key}: ${error}`} style={{fontWeight: "bold", color: "red"}}>{key}: {error}</span>))}
        </form> 
    </div>
  );
}
