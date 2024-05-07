import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, setShow] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{ /* first arg should be event and sec arg should be function to execute */
      if(window.scrollY>600){
      setShow(true)
      }
      else{
        setShow(false)
      }
    }) /* dependency is null */
  })
  return (
    <div className={`${show && `nav-black`} nav`}>
            <img style={{height:'35px'}} src="./pngwing.com copy.png" alt="" />
    </div>
  )
}

export default Nav