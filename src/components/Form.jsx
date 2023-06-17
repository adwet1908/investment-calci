import React , { useState } from 'react'

export default function Form() {

    const [currentSavings, setCurrentSavings] = useState(0); // for Current Savings  
    const [yearlySavings, setYearlySavings] = useState(0); // for Yearly Savings  
    // const [] = useState(''); // for savings  
    // const [] = useState(''); // for savings  

    const submitHandler = ()=>{
        console.log("Submitted")
    }

    const handleSetCurrentSavings = (event)=>{
        event.preventDefault(); 
        setCurrentSavings(event.target.value);  
    }

    const handleSetYearlySavings = (event)=>{
        event.preventDefault();
        setYearlySavings(event.target.value); 
    }


    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current($)</label>
                    <input type="number" id="current-savings" onChange={handleSetCurrentSavings}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={handleSetYearlySavings}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button" >
                    Calculate
                </button>
            </p>
        </form>
    )
}
