import React from 'react'
import ReactDOM from 'react-dom'
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Modalsearchbar.css"
import CloseIcon from '@mui/icons-material/Close';



function Modalsearchbar({ onClose }) {
  return (

    <>
    <div className='ms_conatiner' >
       <div className="modal-container">
        <div className="modal-backdrop" onClick={onClose}></div>
    <div class="modal-content">
    <div class="modal-header">
    {/* <button type="button" className="close" onClick={onClose}> */}
              <span aria-hidden="true">  <CloseIcon className='icon' onClick={onClose} /> </span>
            {/* </button> */}
      <h3>Search</h3>
    </div>
    <div class="modal-body">
      <input type="text" class="search form-control" placeholder="Explore Locations..."/>
    </div>
    
  </div>
    </div>
    </div>
  </>

  )
}

export default Modalsearchbar
