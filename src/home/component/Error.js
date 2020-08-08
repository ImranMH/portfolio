import React from 'react'

export default function Error() {
    return (
        <div id="error" className="modal modal-message fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></span>
                        <h2 className="modal-title">Sorry</h2>
                        <p className="modal-subtitle"> Something went wrong </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
