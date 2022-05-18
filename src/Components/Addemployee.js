import React, { useState } from 'react'
import Header from './Header'

const Addemployee = () => {
    var [id,setid]=useState("")
    var [name,setname]=useState("")
    var [designation,setdesignation]=useState("")
    var [salary,setsalary]=useState("")
    var [companyname,setcompanyname]=useState("")
    var [dob,setdob]=useState("")
    var [email,setemail]=useState("")
    const subdata=()=>{
        const data={"id":id,"name":name,"designation":designation,"salary":salary,"companyname":companyname,"dob":dob,"email":email}
        console.log(data)
    }
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">ID</label>
                    <input onChange={(b)=>{setname(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(b)=>{setname(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Designation</label>
                    <input onChange={(b)=>{setdesignation(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Salary</label>
                    <input onChange={(b)=>{setsalary(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Company name</label>
                    <input onChange={(b)=>{setcompanyname(b.target.value)}} type="text" className="form-control"/>
                </div>
               
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Date of birth</label>
                    <input onChange={(b)=>{setdob(b.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Email</label>
                    <input onChange={(b)=>{setemail(b.target.value)}}  type="email" name="" id="" className="form-control"/>
                    </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 <button  className="btn-success">CLEAR</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subdata} className="btn-success">REGISTER</button>
                   </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addemployee