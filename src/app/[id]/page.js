'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

function page() {

    const {id} = useParams()
    console.log(id);
     const API = `https://jsonplaceholder.typicode.com/users/${id}`
     const [users,setUsers] = useState()
    
     useEffect(() => {
      fetch(API)
      .then(data => data.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
     }, [])
    console.log(users);
    if(!users) return <h1>loding.......</h1>
    
    



  return (

    <div >

   <div className='w-[250px] h-[250px] p-5   bg-amber-400 hover:bg-amber-50 rounded-2xl' >
    <h1 > {users.name} </h1>
    <h1> {users.email} </h1>
    <h1> {users.phone} </h1></div>
    </div>
  )
}

export default page