import React, { useState, useEffect } from 'react'
import { fetchLoveData } from '../../../api'
import './Love.css'


export default function LoveCalculator() {
    const [person, setPerson] = useState('')
    const [partner, setPartner] = useState('')
    const [result, setResult] = useState('')
    useEffect(() => {
        console.log(person, partner);
        const startFetching = async () => {
            setResult(await fetchLoveData())
        }
        // fetchLoveData()
        startFetching()
    }, []);

    function handleSubmit(e) {
        e.preventDefault()

        const startFetching = async () => {
            setResult(await fetchLoveData(person, partner))
        }
        // fetchLoveData()
        startFetching()
    }
    return (

        <div className="love-container">
            <h2>Love Calculator</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control-2">
                    <label htmlFor="person">Write Your Name</label>
                    <input type="text" id="person" onChange={(e) => { setPerson(e.target.value) }} value={person} placeholder="Trump" />
                </div>
                <div className="form-control-2">
                    <label htmlFor="partner">Write Your Partner Name</label>
                    <input onChange={(e) => { setPartner(e.target.value) }} type="text" id="partner" placeholder="Melania" value={partner} />
                </div>
                <button type="submit" className="btn btn-primary">Calculate</button>
            </form>

            {result ? <div className="result">
                <div className="result_name">
                    <div>{result.fname}</div>
                    <div className={result.percentage > 50 ? "heart" : "broken-heart"}></div>
                    <div>{result.sname}</div>
                </div>
                <div className="score_area">
                    <div className="score_value">{result.percentage}</div>
                    <div className="score_comment">{result.result}</div>
                </div>
            </div> : null}

        </div>
    )
}
