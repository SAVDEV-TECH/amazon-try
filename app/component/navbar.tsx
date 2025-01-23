import React from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
 

const navlinks=[
    {
    text:'Home'
    },
    {
     text:'Features'
    },
    {
     text:'New'
     }
     ,
    {
     text:'Accesories'
    
     }
     ,
    {
     text:'T-shirt'
     }
     ,
    {
     text:'men'
     }
]
function navbar() {
  return (
    <div className='w-[80%] mx-auto h-[70px] flex justify-between items-center px-20'>
      <nav>
        <ul className='flex gap-4'>
           {
            navlinks.map((link,id)=>
                <Link className='relative  before:absolute before:content-[""] before:bottom-0 before:w-0 hover:before:w-[50px] transition-[9 00] before:bg-black before:h-[1px]' href='/' key={id}>{link.text}</Link>
            )
           }
             
        </ul>
      </nav>
       
        <h2 className='font-bold'>Mog Shop</h2>
       <div className="flex items-center gap-6 justify-center">
       <CiSearch className='' />
        <Link href=''>Login</Link>
       </div>

    </div>
  )
}

export default navbar
