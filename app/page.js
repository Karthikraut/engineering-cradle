"use client"
import React,{ useEffect, useState } from 'react'

const page = () => {
  const [products,setProducts] = useState([]);
   useEffect(()=>{
    const fetchProducts = async()=>{
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvbUBnbWFpbC5jb20iLCJleHAiOjE3MjgyMzUyNzk2MDksImlhdCI6MTcyODIzMTY3OX0.iUTehE8vsoQjMQNPpN9aCJdIyGkItL3xwfODBdDUCBU"
      const response =await fetch('https://intern-task-api.bravo68web.workers.dev/api/products',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data =await  response.json();
      console.log("Product:- ",data);
    }
    fetchProducts();
   },[])

   return(
    <div>
      <h1>Hello</h1>
    </div>
   )
}

export default page