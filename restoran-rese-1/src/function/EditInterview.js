import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditInterview() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [interview,setInterview]=useState({
        title:"",
        email:"" ,
        status:"",
        candidateId: "",
        dateAndTime:"",
        eventLink:"",
        recruiterId:""
})
const {title,email,status,candidateId,dateAndTime,eventLink,recruiterId } = interview

  const onInputChange = (e) => {
    setInterview({ ...interview, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/interviews/${id}`, interview);
    navigate("/Interview");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/interviews/${id}`);
    setInterview(result.data);
  };

  return (

   
  
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Interview</h2>

          <form onSubmit={(e) => onSubmitUpdate(e)}>
            
            <label class="form-label">Title</label><input 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter title'
                                    name = "title"
                                    style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}} 
                                    value={title} 
                                    onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Email</label><input 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter description'
                                    name = "email"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "488px", height: "104px"}} value={email} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">CandidateId</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter candidateId'
                                    name = "candidateId" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "487px", height: "42px"}} value={candidateId} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">dateAndTime</label><input type={"date"} 
                                    className="form-control"
                                    placeholder='Enter dateAndTime'
                                    name = "dateAndTime" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "486px", height: "49px"}} value={dateAndTime} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">eventLink</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter eventLink'
                                    name = "eventLink" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "486px", height: "49px"}} value = {eventLink} onChange={(e)=>onInputChange(e)}/>
                                   
                                   <label class="form-label">recruiterId</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter recruiterId'
                                    name = "recruiterId" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "486px", height: "49px"}} value = {recruiterId} onChange={(e)=>onInputChange(e)}/>

                                    <label class="form-label" style={{marginRight: "10px", marginBottom: "0px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "30px"}}>Status</label><select 
                                    type="select" 
                                    className="form-control"
                                    name = "status" style={{marginRight: "14px", marginBottom: "21px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "35px"}} value={status} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="Select status">
                                                <option value="Open">Open</option>
                                                <option value="Wait">Wait</option>
                                                <option value="Close">Close</option>
                                            </optgroup>
                                    </select>
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Interview">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}