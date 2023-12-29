import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPosition() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [positionest,setPosition]=useState({
        title:"",
        start_work:"" ,
        end_work:"",
        requirements: "",
        status:""
})
const {title,start_work,end_work,requirements,status } = positionest

  const onInputChange = (e) => {
    setPosition({ ...positionest, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/positions/${id}`, positionest);
    navigate("/Position");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/positions/${id}`);
    setPosition(result.data);
  };

  return (

   
  
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Position</h2>

          <form onSubmit={(e) => onSubmitUpdate(e)}>
            
            <label class="form-label">Title</label><input 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter title'
                                    name = "title"
                                    style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}} 
                                    value={title} 
                                    onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">start_work</label><input 
                                    type={"date"} 
                                    className="form-control"
                                    placeholder='Enter EditPosition'
                                    name = "start_work"
                                    style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}}  value={start_work} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">end_work</label><input type={"date"} 
                                    className="form-control"
                                    placeholder='Enter end_work'
                                    name = "end_work" style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}} value={end_work} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">requirements</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter requirements'
                                    name = "requirements" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "486px", height: "49px"}} value={requirements} onChange={(e)=>onInputChange(e)}/>
                              

                                    <label class="form-label" style={{marginRight: "10px", marginBottom: "0px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "30px"}}>Status</label><select 
                                    type="select" 
                                    className="form-control"
                                    name = "status" style={{marginRight: "14px", marginBottom: "21px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "35px"}} value={status} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="Select status">
                                                <option value="Approve">Approve</option>
                                                <option value="Progress">Progress</option>
                                                <option value="No Approve">No Approve</option>
                                            </optgroup>
                                    </select>
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Position">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}