"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Page() {

  const API = "https://jsonplaceholder.typicode.com/users"
 const [user,setUser] = useState()

 useEffect(() => {
  fetch(API)
  .then(data => data.json())
  .then(data => setUser(data))
  .catch(error => console.log(error))
 }, [])
console.log(user);
if(!user) return <h1>loding.......</h1>




  return (
    <div>

<div className='w-full flex flex-wrap gap-5 justify-start items-center ' >
  {
    user.map((data, i) => (
      <Link href={`/${data.id}`} key={i} className='w-[250px] h-[250px] p-5   bg-amber-400 hover:bg-amber-50 rounded-2xl '>
     <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.phone}</h1>
        <h1>{data.username}</h1>
      </Link>
    ))
  }
</div>





    </div>
  )
}

export default Page