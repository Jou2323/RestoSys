import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



export default function Report() {
    
  
   
    const [candidates,setCandidates]=useState([])

    useEffect(() => {
        loadCandidates();  
    },[]);
   
    const loadCandidates= async ()=>{
        const result= await axios.get("http://localhost:8080/candidates/candidatesall");
        setCandidates(result.data);
    };


    return(
     
<div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
<div class="container-fluid">
<div class="row">
        <h2 class="text-dark mb-4 aligh-left col-sm-2" >List Report</h2>
        <Link class="btn btn-primary col-sm-2 " to="/SendMessage" className="btn btn-primary col-sm-2" type="submit" style={{ color: 'white', paddingBottom:'-10px', marginLeft: '-1px', marginBottom : '12px' }}  >Send message</Link>
</div>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">Report information</p>
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
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Vacancy</th>
                            
                                            <th>Date publication</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Check letter</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            candidates.map((candidate)=>(
                                                <tr>
                                            <td class="me-xl-0" style={{ lineheight: '20px', fontsize: '14px', position: 'static', height: '48px',margin: '0px',width: '81.422px'}} scope="row">{candidate.id}</td>
                                            <td> {candidate.email}</td>
                                            <td style={{whiteSpace: "pre"}}>{candidate.phoneNumber}</td>
                                            <td>{candidate.position}</td>
                                            
                                            <td class="text-center">{candidate.lastUpdated}</td>
                                            <td class="text-center">{candidate.status}</td>
                                            <td class="text-center"><Link class="btn btn-primary" role="button" style={{marginTop: '12px',marginBottom: '14px',marginLeft: '0px', marginRight: '2px', paddingRight: '10px'}} to={`/ResumeDetail/${candidate.id}`}>Resume</Link></td>

                                        </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>IP</strong></td>
                                            <td><strong>Email</strong></td>
                                            <td><strong>Phone</strong></td>
                                            <td><strong>Vacancy</strong></td>
            
                                            <td><strong>Date</strong></td>
                                            <td><strong>Status</strong></td>
                                            <td class="text-center"><strong>Letter</strong></td>
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
