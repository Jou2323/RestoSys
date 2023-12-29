import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Registretion = () => {
       
    let navigate = useNavigate();
    const [recruiter, setRecruiter] = useState({
        first_name:"" ,
        second_name:"",
        email:"",
        password:""
    });
    const {first_name,second_name,email,password} = recruiter
    const onInputChange = (e) =>{
        setRecruiter({...recruiter, [e.target.name]: e.target.value});
       }
       const onSubmitAdd=async (e)=>{
           e.preventDefault();
           await axios.post("http://localhost:8080/recruiters/register",recruiter)
           navigate("/Homepages");
          };
  
    


    return(
<body class="bg-gradient-primary">
        <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-2">
            <div class="card-body p-0">
                    <div class="row">
                    <div class="col-lg-7 col-xl-12">
                        <div class="p-5">
                            <div class="p-5">
                                <div class="text-center">
                                    <h4 class="text-dark mb-4">Create an Account!</h4>
                                </div>
                                <form onSubmit={(e)=>onSubmitAdd(e)}>
                                    <div class="row mb-3">
                                        <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name" name="first_name" value={first_name} onChange={(e)=>onInputChange(e)}/></div>
                                        <div class="col-sm-6"><input class="form-control form-control-user" type="text" id="exampleLastName" placeholder="Last Name" name="second_name" value={second_name} onChange={(e)=>onInputChange(e)}/></div>
                                    </div>
                                    <div class="mb-3"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" value={email} onChange={(e)=>onInputChange(e)}/></div>
                                    <div class="row mb-3">
                                        <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" value={password} onChange={(e)=>onInputChange(e)}/></div>
                                        <div class="col-sm-6"><input class="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password" value={password} onChange={(e)=>onInputChange(e)}/></div>
                                    </div><button class="btn btn-primary d-block btn-user w-100" type="submit">Register Account</button>
                                    <hr/><a class="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button"><i class="fab fa-google"></i>&nbsp; Register with Google</a><a class="btn btn-primary d-block btn-facebook btn-user w-100" role="button"><i class="fab fa-facebook-f"></i>&nbsp; Register with Facebook</a>
                                    <hr/>
                                </form>
                                <div class="text-center"><a class="small" href="forgot-password.html">Forgot Password?</a></div>
                                <div class="text-center"><a class="small" href="login.html">Already have an account? Login!</a></div>
                                
                </div>
            </div>           
        </div>
</div>
</div>
</div>
</div>
  
        </body>  
  
    );
                                    
};
export default Registretion;