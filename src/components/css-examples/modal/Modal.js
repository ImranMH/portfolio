import React from 'react'
import './Modal.css'
export default function Modal() {
    return (
        <div className="modal-container">
            <form className="model">
                <header className="model_header">
                    <h3>Add a New Flow</h3>
                    <small>Lorem ipsum dolor sit amet consectetur.</small>
                </header>
                <div className="flow-name">
                    <label htmlFor="">Flow Name</label>
                    <input type="text" placeholder="Name your flow" />

                </div>
                <div className="flow">
                    <label htmlFor="">Flow Start delay</label>
                    <div className="flow-input">
                        <div className="flow-input-1">
                            <input type="number" placeholder="300" id="" />
                            <span>ms</span>
                        </div>
                        <div className="flow-input-2">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Traversable </label> <span>?</span>
                        </div>

                    </div>
                </div>
                <div className="advance">

                    <h3><i className="fas fa-angle-down"></i>Advance settings</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="block-3">
                        <div>Auto</div>
                        <div>Url</div>
                        <div>
                            <h4>Manual</h4>
                            <small>Advance</small>
                        </div>
                    </div>
                    <div className="start-with">
                        <div className="select-container">
                            <select name="" id="">
                                <option value="">Start With</option>
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                            </select>
                        </div>
                        <div className="url-container">
                            <span>/</span>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="add-another">
                        {/* <a href="#"> + Add anothwe</a> */}
                        <button>+ Add Another</button>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum, dolor sit amet consectetur dolor sit ame adipisicing elit. Reiciendis, iste!</p>
                    </div>
                </div>
                <div className="save-flow">
                    <button className="btn btn-default" type="reset">cancel</button>
                    <button className="btn btn-main">Save</button>
                </div>
            </form>
        </div>
    )
}
