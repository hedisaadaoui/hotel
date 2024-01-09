import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import hotel from '../Database/Data';
import Swal from 'sweetalert2'
import { useState } from 'react'
export default function Add({onAdd}) {
    const [newhotel,setNewhotel]=useState({nom:"",prix:"",localisation:"",image:""})
    const handle=()=>{
        if(newhotel.nom.trim()===""|| newhotel.prix.trim()===""||newhotel.localisation.trim()===""||newhotel.image.trim()===""){
            Swal.fire({
                icon:"error",
                title:"oups...",
                text:"please fill in all fileds!"
            });return;
        }
        onAdd(newhotel);
        setNewhotel({name:"",prix:"",localisation:"",image:""})
        Swal.fire({
          icon: "success",
          title: "Serie  Added!",
          showConfirmButton: false,
          timer: 1500 // Automatically close after 1.5 seconds
        })
    }
  return (
    <div>
      {
        hotel.map((ele)=>(
            <div class="card" style="width: 18rem;">
            <img src={ele.image} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{ele.nom}</h5>
              <p class="card-text">hotel</p>
              <a href="#" class="btn btn-primary"></a>
            </div>
          </div>     
        ))

      }
    </div>
  )
}