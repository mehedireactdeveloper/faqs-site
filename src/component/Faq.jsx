import React, { useState } from 'react'

const Faq = ({faq}) => {
    const {Question,ans} = faq
    const [toggle, setToggle]= useState(false)
  return (
    <article style={{display:"flex", justifyContent:"space-between", marginBottom:"1rem", padding:"0 5rem"}}>
      
        <div style={{width:"40rem"}}>
           <h2>{Question}</h2>
           {toggle && <h4 style={{textAlign:"justify"}}>{ans}</h4>}
        </div>
      
         <div>
           <button style={{display:"inline", background:"darkgray", padding:"0.5rem 2rem"}} onClick={()=> setToggle(!toggle)}>
               {toggle? "-" : "+"}
            </button>
         </div>
    </article>
  )
}

export default Faq
