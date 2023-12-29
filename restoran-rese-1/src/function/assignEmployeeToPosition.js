import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AsassignEmployeeToPosition() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [positionest,setPosition]=useState({
    domainemployeer:"",
    nick:"" 
})
const {domainemployeer, nick} = positionest

  const onInputChange = (e) => {
    setPosition({ ...positionest, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
    loadEmployee(); 
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

const [employees,setEmployee]=useState([])
  const loadEmployee= async ()=>{
    const result= await axios.get("http://localhost:8080/employee/employees");
    setEmployee(result.data);
};

  return (

   
  
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Asassign Employee To Position</h2>

          <form onSubmit={(e) => onSubmitUpdate(e)}>
          <label class="form-label" style={{marginRight: "10px", marginBottom: "0px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "30px"}}>Domain employeer</label><select 
                                    type="select" 
                                    className="form-control"
                                    name = "domainemployeer" style={{marginRight: "14px", marginBottom: "21px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "35px"}} value={domainemployeer} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="Select status">
                                     {
    employees.map((employee)=>(
      <option value={employee.domain_gmail}>{employee.domain_gmail} </option>
    ))
    }
                                            </optgroup>
                                    </select>
                                    <label class="form-label" style={{marginRight: "10px", marginBottom: "0px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "30px"}}>Nickname employeer</label><select 
                                    type="select" 
                                    className="form-control"
                                    name = "nick" style={{marginRight: "14px", marginBottom: "21px", paddingBottom: "1px",paddingLeft: "4px", marginLeft: "16px", width: "486px", height: "35px"}} value={nick} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="Select status">
                                     {
    employees.map((employee)=>(
      <option value={employee.nickname}>{employee.nickname} </option>
    ))
    }
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