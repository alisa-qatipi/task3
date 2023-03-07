import React from 'react'
import './Modal.css'

function Modal({closeModal}) {
  return (
    <>
       <div className="modalBackground" onClick={() => closeModal(false)} style={{color: "#444444"}}>
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
            {/* <button className='btn btn-outline-dark' onClick={() => closeModal(false)}>X</button> */}
            <div className="title">
                <h5>Theme Color</h5>
                <h6 className='text-primary'>Change Theme</h6>
            </div>
            <div className="body">
                <div className="row">
                    <p>Font Color</p>
                    <div className="color fontColorContent d-flex gap-2">
                        <p>#444444</p>
                        <input type="color" name="fontColorInput" id="fontColorInput" value="#444444"/>
                    </div>
                </div>
                <div className="row backgroundColor d-flex justify-content-between border-bottom mt-3">
                    <p>Background Color</p>
                    <div className="color backgroundColorContent d-flex gap-2">
                        <p>#FFFFFF</p>
                        <input type="color" name="backgroundColorInput" id="backgroundColorInput" value="#FFFFFF"/>
                    </div>
                </div>
                <div className="row buttonColor d-flex justify-content-between border-bottom mt-3">
                    <p>Button Color</p>
                    <div className="color buttonColorContent d-flex gap-2">
                        <p>#2072EF</p>
                        <input type="color" name="buttonColorInput" id="buttonColorInput" value="#2072EF"/>
                    </div>
                </div>
                <div className="row buttonBorderColor d-flex justify-content-between border-bottom mt-3">
                    <p>Button Border Color</p>
                    <div className="color buttonBorderColorContent d-flex gap-2">
                        <p>#2072EF</p>
                        <input type="color" name="buttonBorderColorInput" id="buttonBorderColorInput" value="#2072EF"/>
                    </div>
                </div>
                <div className="row buttonMouseoverColor d-flex justify-content-between border-bottom mt-3">
                    <p>Button Mouseover Color</p>
                    <div className="color buttonMouseoverColorContent d-flex gap-2">
                        <p>#0053D1</p>
                        <input type="color" name="buttonMouseoverColorInput" id="buttonMouseoverColorInput" value="#0053D1"/>
                    </div>
                </div>
            </div>
            <div className="footer mt-5 mb-3 d-flex justify-content-end gap-4">
                <button onClick={() => closeModal(false)} className="btn btn-outline-dark">Cancel</button>
                <button className='btn btn-primary'>Continue</button>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Modal