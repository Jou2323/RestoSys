import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function rgb(r, g, b){
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(",r,",",g,",",b,")"].join("");
  }
    
export default function Testdata() {
    
    let navigate = useNavigate();


   
    const [test,setTest]=useState({
        title:"" ,
        link:"",
        count_test:"",
        date_create:"",
    })
    const {title,link,count_test,date_create} = test
   
    const onInputChange = (e) =>{
        setTest({...test, [e.target.name]: e.target.value});
    }
    const onSubmitAdd=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/test/addtest",test)
        navigate("/Testdata");
       };

   
    const [tests,setTests]=useState([])

    useEffect(() => {
        loadTest();  
    },[]);
    

    
    const loadTest= async ()=>{
        const result= await axios.get("http://localhost:8080/test/tests");
        setTests(result.data);
    };

    const deleteTest=async (id)=>{
        await axios.delete(`http://localhost:8080/test/${id}`)
        loadTest()
    }
    return(
     
<div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
<div class="container-fluid">


<div class="modal fade" role="dialog" tabindex="-1" id="modal-1">
<div class="modal-dialog" role="document">
                                
                                <div class="modal-content">
                                    
                                    <div class="modal-header">
                                   
                                        <h4 class="modal-title">Add test</h4><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <form onSubmit={(e)=>onSubmitAdd(e)}>
                                    <div class="modal-body">
                                    <label class="form-label">Title</label><input 
                                    type={"link"} 
                                    className="form-control"
                                    placeholder='Enter title'
                                    name = "title"
                                    style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '387px', height: '51px'}} 
                                    value={title} 
                                    onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Link</label><textarea 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter link'
                                    name = "link"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "388px", height: "104px"}} value={link} onChange={(e)=>onInputChange(e)}></textarea>
                                    <label class="form-label">Count test</label><input type={"number"} 
                                    className="form-control"
                                    placeholder='Enter count test'
                                    name = "count_test" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "387px", height: "42px"}} value={count_test} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Date create</label><input type={"date"} 
                                    className="form-control"
                                    placeholder='Enter date create'
                                    name = "date_create" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={date_create} onChange={(e)=>onInputChange(e)}/>
                                    </div>
                                    <a class="btn btn-link d-block btn-google w-100" target="blank" href="https://docs.google.com/forms/u/0/" role="button"><i class="fab fa-google"></i>&nbsp;Google Form</a>
                                    <div class="modal-footer"><Link class="btn btn-light"  data-bs-dismiss="modal" to="/Testdata">Close</Link><button class="btn btn-primary" type="submit">Create</button></div></form>  
                                </div> 
                        </div> 
                         
    </div>
<div class="row">
        <h2 class="text-dark mb-4 aligh-left col-sm-3" >Test-data soft-skills</h2>
        <button class="btn btn-primary col-sm-2 " type="submit" style={{ color: 'white', marginLeft: '-1px', marginBottom : '11px' }}  data-bs-target="#modal-1" data-bs-toggle="modal">Add test</button>
</div>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">Test information</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 col-xl-1 offset-xl-5 text-nowrap">
                                    <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
                                                <option value="10" selected="">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>&nbsp;</label></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                                </div>
                            </div>
                            <div class="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                                <table class="table my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>IP</th>
                                            <th>Catigory</th>
                                            <th>Link</th>
                                            <th>Date create</th>
                                            <th class="text-center" style={{width:"200px"}}>Update</th>
                                            <th class="text-center" style={{width:"200px"}}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            tests.map((test)=>(
                                                <tr>
                                            <td class="me-xl-0"  >{test.id}</td>
                                            <td class="text-center"> {test.title}</td>  
                                            <td class="text-center"><a href={test.link}>Link</a></td>
                                            <td class="text-center">{test.date_create}</td>
                                            <Link class="btn btn-primary" style={{marginTop: '21px',marginBottom: '21px', marginLeft: '15px', background: rgb(223,182,78)}} to={`/Testdata/${test.id}`}><span class="text-white-50 icon" style={{paddingright: '0px', marginright: '11px'}}><i class="fas fa-exclamation-triangle"></i></span>Edit</Link>
                                            <td class="text-center"><button class="btn btn-primary" onClick={()=>deleteTest(test.id)} style={{marginTop: '15px',marginBottom: '21px', marginLeft: '11px', background: rgb(223,87,78)}}><span class="text-white-50 icon" style={{marginRight: '5px' }}><i class="fas fa-trash" ></i></span>Delete</button></td>
                                        </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>IP</strong></td>
                                            <td><strong>Catigory</strong></td>
                                            <td><strong>Link</strong></td>
                                            <td><strong>Date create</strong></td>
                                            <td><strong>Update</strong></td>
                                            <td class="text-center"><strong>Delete</strong></td>

                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"></link>
    </div>
    
    )
                                    
}
