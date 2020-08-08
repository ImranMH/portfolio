import React from 'react'

export default function Success() {
    return (
        <div id="success" className="modal modal-message fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></span>
                        <h2 className="modal-title">Thank you</h2>
                        <p className="modal-subtitle">Your message is successfully sent...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
