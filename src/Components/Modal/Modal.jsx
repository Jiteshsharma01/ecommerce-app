import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
    function close(){
        console.log('bshd', props);
    }


  return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">{props.children}</div>
                <div className="modal-footer">
                    <button onClick={close} className="button">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;