import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'

const Viewemployee = () => {
    var employeelist=[
        {"id":1,"name":"Seena","designation":"abc","salary":"10000","companyname":"xtz","DOB":"20/03/1999","email":"seenaannmathew"},
        {"id":2,"name":"Sneha","designation":"cba","salary":"20000","companyname":"xzy","DOB":"4/12/1999","email":"snehaelsamathew"},
        {"id":3,"name":"Evaniya","designation":"bca","salary":"25000","companyname":"ptz","DOB":"27/07/1999","email":"evaniyasarareny"},
        {"id":4,"name":"Sreya","designation":"acb","salary":"15000","companyname":"wxz","DOB":"9/06/1999","email":"sreyaleeshylu"},
        {"id":5,"name":"Sayan","designation":"bac","salary":"30000","companyname":"xuz","DOB":"26/07/1999","email":"sayancshylu"}
]
  return (
    <div>
     
     <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table className="table">
  <thead>
    <tr>
    
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
      <th scope="col">Cname</th>
      <th scope="col">DOB</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {employeelist.map((value,key)=>{ return<tr>
      
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.designation}</td>
      <td>{value.salary}</td>
      <td>{value.companyname}</td>
      <td>{value.DOB}</td>
      <td>{value.email}</td>
    </tr>
   
 

                    
                   })}
                   
                </tbody>
                </table>
               </div> 
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Viewemployee