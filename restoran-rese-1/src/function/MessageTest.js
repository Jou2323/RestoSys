import React, { useEffect, useRef, useState  } from "react";
import axios from 'axios';
import emailjs from "@emailjs/browser";
import {Link} from "react-router-dom";

const MessageTest = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uwnm12k",
        "template_3ewefi7",
        form.current,
        "7fDu4tZniTLmSxbeB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    loadTests();  
},[]);
const [tests,setTest]=useState([])
  const loadTests= async ()=>{
    const result= await axios.get("http://localhost:8080/test/tests");
    setTest(result.data);
};


  return (
   
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Send Test</h2>
      
    <form ref={form} onSubmit={sendEmail}>
    <label class="form-label">Name</label>
    <input type="text" name="user_name" style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}}/>
    <label class="form-label" >Email</label>
    <input type="email" name="user_email" style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}}/>
    <label>Message</label>
    <textarea name="message" style={{marginRight: "14px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "111px"}}/>
    <select name="link_test" style={{marginRight: "14px", marginBottom: "21px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "35px"}}>
      <optgroup label="Select test">
    {
    tests.map((test)=>(
      <option>{test.link}</option>
    ))
    }
    </optgroup></select>
    
    <input type="submit" className="btn btn-outline-primary" style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}} value="Send" />

    
  </form>
  </div>
  </div>
  </div>
  
  );
};

export default MessageTest;

