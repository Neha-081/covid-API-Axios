import React from 'react'

const User = ({data}) => {
    return (
        <div className='container-fluid'>
        {data.map(({name,state_name,district_name,slots, vaccine,pincode} )=> 
         <div class="card mb-3 col-6" >
         <div class="row g-0">
           <div class="col-md-8">
             <div class="card-body">
               <h6><span>Center Name :</span> {name}</h6>
               <h5 class="card-title"><span>Name of Vaccine : </span>{vaccine}</h5>
               <p><span>State : </span>{state_name}</p>
               <p><span>District : </span>{district_name}</p>
               <p><span>Pincode :</span> {pincode}</p>
               <p><span>Slots :</span> {slots}</p>
             </div>
           </div>
         </div>
       </div>
        )}
      </div>
    )
}

export default User
