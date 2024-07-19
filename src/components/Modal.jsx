import React from 'react'

const Modal = ({setshow,el}) => {
  return (
    <div className="modal-overlay">
    <div className="modal">
      <div className="box">
        <button onClick={() => setshow(false)}>X</button>
        <h1>{el.name}</h1>
        <h2>{el.genre}</h2>
        <h5>{el.description}</h5>
      </div>
    </div>
  </div>
  )
}

export default Modal