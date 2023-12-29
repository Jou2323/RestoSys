import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditTestdata() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [test,setTest]=useState({
        link:"",
        title:"" ,
        count_test:"",
        date_create:""
})
const {title,link,count_test,date_create} = test

  const onInputChange = (e) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTest();
  }, []);

  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/test/${id}`, test);
    navigate("/Testdata");
  };

  const loadTest = async () => {
    const result = await axios.get(`http://localhost:8080/test/${id}`);
    setTest(result.data);
  };

  return (

   
  
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Test</h2>

          <form onSubmit={(e) => onSubmitUpdate(e)}>
            
            <label class="form-label">Title</label><input 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter title'
                                    name = "title"
                                    style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '487px', height: '51px'}} 
                                    value={title} 
                                    onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Link</label><input 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter Link'
                                    name = "Link"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "488px", height: "104px"}} value={link} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Count_test</label><input type={"number"} 
                                    className="form-control"
                                    placeholder='Enter Count_test'
                                    name = "Count_test" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "487px", height: "42px"}} value={count_test} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Date create</label><input type={"date"} 
                                    className="form-control"
                                    placeholder='Enter Date create'
                                    name = "date_create" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "487px", height: "42px"}} value={date_create} onChange={(e)=>onInputChange(e)}/>
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Testdata">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}