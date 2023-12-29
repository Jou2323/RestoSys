
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Avatar } from "antd";
import axios from 'axios';


export default function NavbarHead() {
   
    const [recruiters,setRecruiters]=useState([]);
    const [candidates,setCandidates]=useState([]);
    useEffect(() => {
        loadRecruiter();  
        loadCandidates();
    },[]);
    
    const loadCandidates= async ()=>{
        const result= await axios.get("http://localhost:8080/candidates/candidatesall");
        setCandidates(result.data);
    };
    
    const loadRecruiter= async ()=>{
        const result= await axios.get("http://localhost:8080/recruiters/all_recruiter");
        setRecruiters(result.data);
    };

  return (
   
<nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
<div class="sidebar-brand-text mx-3"><span>RECRUTER</span></div>
<hr class="sidebar-divider my-0"/>
<ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"><Link class="nav-link"  to="/Homepage">Home</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/Vacancy"><i class="fas fa-table"></i><span>&nbsp;Vacancy</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Report"><i class="fas fa-user-circle"></i><span>&nbsp;Report</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Interview"><i class="far fa-comments"></i><span>&nbsp;Interview</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Testdata"><i class="far fa-list-alt"></i><span>&nbsp;Test</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Position"><i class="fas fa-exclamation-circle"></i><span>&nbsp;Position</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Profile"><i class="fas fa-user"></i><span>&nbsp;Profile</span></Link></li>
                </ul>
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        <ul class="navbar-nav flex-nowrap ms-auto">
                         
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow">
                                    <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                      
                                        <span class="badge bg-danger badge-counter">{candidates.length}</span>
                                   
    
                                        <i class="fas fa-envelope fa-fw"></i></a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 class="dropdown-header">messages</h6><Link  to="/Report"><a class="dropdown-item text-center small text-gray-500" >Show All Reports</a></Link>
                                    </div>
                                </div>
                                <div class="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                            </li>
                            <div class="d-none d-sm-block topbar-divider"></div>
                            <li class="nav-item dropdown no-arrow">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                {
    recruiters.map((recruiter)=>(
        <span class="d-none d-lg-inline me-2 text-gray-600 small">  {recruiter.email}</span>
    ))
}
                                  
                                 <Avatar size = {32} icon="user"/></a>
                                    <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a class="dropdown-item" href="#">
                                        <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"></link>
                </nav>
           

  )
}
