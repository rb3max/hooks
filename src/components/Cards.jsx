import React, { useState } from 'react'
import Modal from './Modal'

const Cards = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='card'>
        {show?<Modal el={el} setshow={setshow}/>:null}
        <img onClick={()=>setshow(true)} src={el.image} alt=""/>

    </div>
  )
}

export default Cards