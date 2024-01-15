
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Avatar } from "antd";
import axios from 'axios';


export default function NavbarHead() {
   

  return (
   
<nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
<div class="sidebar-brand-text mx-3"><span>RESTORAN</span></div>
<hr class="sidebar-divider my-0"/>
<ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"><Link class="nav-link"  to="/Homepage">Home</Link></li>
                    <li class="nav-item"><Link className="nav-link" to="/KitchenPage"><i class="fas fa-table"></i><span>&nbsp;Kitchen</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Contact us"><i class="fas fa-user-circle"></i><span>&nbsp;Contact us</span></Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Historypage"><i class="fas fa-user-circle"></i><span>&nbsp;Historypage</span></Link></li>
                </ul>
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        <ul class="navbar-nav flex-nowrap ms-auto">
                         
                           
                            <div class="d-none d-sm-block topbar-divider"></div>
                            <li class="nav-item dropdown no-arrow">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="/">
                        
                                  
                                 <Avatar size = {32} icon="user"/></a>
                                    <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a class="dropdown-item" href="/">
                                        <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="/"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="/"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Login</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"></link>
                </nav>
           

  )
}
