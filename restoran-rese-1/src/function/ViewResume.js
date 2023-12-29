import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function ViewResume() {


    
    const [candidate,setVacancy]=useState({
        id:"",
        name:"" ,
        email:"",
        phoneNumber:"",
        yearsOfExperience:"",
        skills:"",
        file:"",
        motivationLetter: "",
        status: "",
        position: "",
        lastUpdated:""
    })

    const {id} = useParams()

    useEffect(() => {
        loadResume();  
    },[])

    const loadResume= async ()=>{
        const result= await axios.get(`http://localhost:8080/candidates/${id}`);
        setVacancy(result.data);
    }
    

    return(
        <div class="container">
        <div class="row">
                <div class="col-xxl-10">
                        <div class="card shadow mb-3">
                             <div class="card-header py-3" style={{marginbottom : '-17px', margintop: '0px', height: '150.594px'}}>
                                  <div class="container" style={{margin: '-14px', margintop: '-4px'}}>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '21px'}}><span>Email:</span> {candidate.email}</span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>Skills:</span> {candidate.skills} </span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>Name:</span>{candidate.name}</span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>Years expiriens:</span> {candidate.yearsOfExperience} year</span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>Phone:</span> {candidate.phoneNumber}</span>
                                  <span class="d-flex d-xl-flex" style={{position: 'relative', width: '212px'}}><span>ID:</span> {candidate.id}</span>
                            </div>
                        </div>
                        
                        
                        <div class="card-body">
                            <h3 class="text-dark mb-4"  style={{height: '30.5938px', margin: '0px', marginTop: '29px', marginRight: '-1px', marginLeft: '9px'}}>{candidate.position}</h3>
                            <div class="card-header d-flex d-xl-flex flex-row justify-content-xl-start py-3">
                            <span style={{display: 'flex', justifyContent: 'flex-start'}}>{candidate.motivationLetter}</span>
                        </div>
                        </div>     
                        <p class="d-xl-flex justify-content-xl-center align-items-xl-center" style={{paddingright: '0px', marginright: '12px'}}>Resume:</p>
                        <a class="d-xl-flex justify-content-xl-center align-items-xl-center"  style={{marginTop: '-15px'}}><a href={candidate.file}>Link_resume</a></a> 
                        <div class="d-flex flex-column ms-auto justify-content-xl-center align-items-xl-center" style={{width: '110.406px',paddingleft: '0px', paddingright: '0px', marginright: '36px;'}}><Link to="/MessageTest"><button class="btn btn-primary flex-column" type="button" style={{position: 'relative', marginright: '-36px',marginBottom: '12px'}}>Send Test</button></Link></div>  </div>   
                </div>
            </div>
</div>
        
    )
}