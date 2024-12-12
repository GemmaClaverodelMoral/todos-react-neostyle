import React from'react';
import ReactDom from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal');
function Modal({children})
{
    return (
        ReactDom.createPortal(
            <div className="Modal">
                {children}
            </div>,
            modalRoot,
        )
    );
}

  export { Modal }