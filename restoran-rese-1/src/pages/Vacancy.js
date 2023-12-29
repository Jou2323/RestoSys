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
    
export default function Vacancy() {
    
    let navigate = useNavigate();


   
    const [vacancy,setVacancy]=useState({
        title:"" ,
        description:"",
        location:"",
        cost:"",
        year_exp:"",
        work_table:"",
        requirements: "Обов'язки: "+
        "- Розробка та реалізація маркетингових стратегій, спрямованих на залучення нових клієнтів та збільшення продажів" +
        "- Створення та управління контентом на наших сайтах та соціальних мережах" + 
        "- Організація та проведення маркетингових кампаній, включаючи email-розсилки, контекстну рекламу та SMM" + 
        "- Аналіз результатів маркетингових заходів та внесення змін до стратегії, якщо це необхідно - участь у розробці маркетингових матеріалів, таких як брошури, рекламні стенди, презентації тощо.",
        responsibilities: "",
        status: ""

    })
    const {title,description,location,cost,year_exp, work_table ,requirements,responsibilities, status} = vacancy
   
    const onInputChange = (e) =>{
     setVacancy({...vacancy, [e.target.name]: e.target.value});
    }
    const onSubmitAdd=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/vacancies/addvacancy",vacancy)
        navigate("/Vacancy");
       };

   
    const [vacancys,setVacancys]=useState([])

    useEffect(() => {
        loadVacancy();  
    },[]);
    

    
    const loadVacancy= async ()=>{
        const result= await axios.get("http://localhost:8080/vacancies/vacancys");
        setVacancys(result.data);
    };

    const deleteVacancy=async (id)=>{
        await axios.delete(`http://localhost:8080/vacancies/${id}`)
        loadVacancy()
    }
    return(
     
<div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
<div class="container-fluid">


<div class="modal fade" role="dialog" tabindex="-1" id="modal-1">
<div class="modal-dialog" role="document">
                                
                                <div class="modal-content">
                                    
                                    <div class="modal-header">
                                   
                                        <h4 class="modal-title">Create Vacancy</h4><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <form onSubmit={(e)=>onSubmitAdd(e)}>
                                    <div class="modal-body">
                                    <label class="form-label">Title</label><input 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter title'
                                    name = "title"
                                    style={{paddingLeft: '7px', marginRight: '220px', marginLeft: '17px', width: '387px', height: '51px'}} 
                                    value={title} 
                                    onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Description</label><textarea 
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter description'
                                    name = "description"
                                    style={{marginRight: "12px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "388px", height: "104px"}} value={description} onChange={(e)=>onInputChange(e)}></textarea>
                                    <label class="form-label">Location</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter location'
                                    name = "location" style={{paddingLeft: "7px", margin: "2px", marginRight: "220px", marginLeft: "17px", width: "387px", height: "42px"}} value={location} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Cost</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter cost'
                                    name = "cost" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={cost} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Year expiriees</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter year_exp'
                                    name = "year_exp" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={year_exp} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label">Work table</label><input type={"text"} 
                                    className="form-control"
                                    placeholder='Enter work_table'
                                    name = "work_table" style={{ paddingLeft: "7px", marginRight: "220px", marginLeft: "17px", width: "386px", height: "49px"}} value={work_table} onChange={(e)=>onInputChange(e)}/>
                                    <label class="form-label" style={{width: "510px"}}>Requirements</label><textarea
                                    type={"text"} 
                                    className="form-control"
                                    placeholder='Enter requirements'
                                    name = "requirements" style={{marginRight: "14px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "386px", height: "111px"}} value={requirements} onChange={(e)=>onInputChange(e)}></textarea>
                                    <label class="form-label">responsibilities</label><textarea  type={"text"} 
                                    className="form-control"
                                    placeholder='Enter responsibilities'
                                    name = "responsibilities" style={{marginRight: "14px", marginBottom: "0px", paddingBottom: "1px", paddingLeft: "4px", marginLeft: "16px", width: "388px"}} value={responsibilities} onChange={(e)=>onInputChange(e)}></textarea>
                                    <label class="form-label" style={{paddingLeft: "17px", paddingRight: "374px", paddingTop: "8px"}}>Status</label><select 
                                    type={"text"} 
                                    className="form-control"
                                    name = "status" style={{paddingBottom: "0px", marginBottom: "10px", paddingRight: "0px", marginRight: "216px", marginLeft: "15px", paddingLeft: "0px", width: "240px"}} value={status} onChange={(e)=>onInputChange(e)}>
                                     <optgroup label="This is a group">
                                               <option value="Open">Open</option>
                                                <option value="Wait">Wait</option>
                                                <option value="Close">Close</option>
                                            </optgroup></select>
                                    </div>
        
                                    <div class="modal-footer"><Link class="btn btn-light"  data-bs-dismiss="modal" to="/Vacancy">Close</Link><button class="btn btn-primary" type="submit">Create</button></div></form>  
                                </div> 
                        </div> 
                         
    </div>
<div class="row">
        <h2 class="text-dark mb-4 aligh-left col-sm-2" >List Vacancy</h2>
        <button class="btn btn-primary col-sm-2 " type="submit" style={{ color: 'white', marginLeft: '-1px', marginBottom : '11px' }}  data-bs-target="#modal-1" data-bs-toggle="modal">Create vacancy</button>
</div>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">Vacancy information</p>
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
                                            <th>Specialization</th>
                                            <th>Description Position</th>
                                            <th>Location</th>
                                            <th>Expiriens</th>
                                            <th style={{width:"100px"}}>Time work</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center" style={{width:"100px"}}>Check info</th>
                                            <th class="text-center" style={{width:"200px"}}>Update</th>
                                            <th class="text-center" style={{width:"200px"}}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            vacancys.map((vacancy)=>(
                                                <tr>
                                            <td class="me-xl-0"  >{vacancy.id}</td>
                                            <td> {vacancy.title}</td>
                                            <td style={{whiteSpace: "pre"}}>{vacancy.responsibilities}</td>
                                            <td>{vacancy.location}</td>
                                            <td class="text-center pe-xl-2 me-xl-0" style={{width: '81.5px', height: '58px', margin: '0px'}}>{vacancy.year_exp}</td>
                                            <td class="text-center">{vacancy.work_table}</td>
                                            <td class="text-center">{vacancy.status}</td>
                                            <td class="text-center"><Link class="btn btn-primary" role="button" style={{marginTop: '12px',marginBottom: '14px',marginLeft: '0px', marginRight: '2px', paddingRight: '10px'}} to={`/VacancyDetail/${vacancy.id}`}>Info</Link></td>
                                            <Link class="btn btn-primary" style={{marginTop: '21px',marginBottom: '21px', marginLeft: '15px', background: rgb(223,182,78)}} to={`/Vacancy/${vacancy.id}`}><span class="text-white-50 icon" style={{paddingright: '0px', marginright: '11px'}}><i class="fas fa-exclamation-triangle"></i></span>Update Vacancy</Link>
                                            <td class="text-center"><button class="btn btn-primary" onClick={()=>deleteVacancy(vacancy.id)} style={{marginTop: '15px',marginBottom: '21px', marginLeft: '11px', background: rgb(223,87,78)}}><span class="text-white-50 icon" style={{marginRight: '5px' }}><i class="fas fa-trash" ></i></span>Delete vacancy</button></td>
                                        </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>IP</strong></td>
                                            <td><strong>Specialization</strong></td>
                                            <td><strong>Desccription</strong></td>
                                            <td><strong>Location</strong></td>
                                            <td><strong>Expiriens</strong></td>
                                            <td><strong >Time work</strong></td>
                                            <td><strong>Status</strong></td>
                                            <td><strong>Info</strong></td>
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
