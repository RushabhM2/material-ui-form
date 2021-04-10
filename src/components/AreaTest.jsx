import React, { useContext } from 'react'

import { FormContext } from '../Root';

function AreaTest() {
    const { formState, formDispatch } = useContext(FormContext)
    
    const handleChange = (event) => {
        event.preventDefault()
        formDispatch({
            type: 'TOWN',
            value: event.target.value
        })
    }

    return (
        <div>
            {console.log(formState)}
            <input type="text" placeholder="AreaTest" onChange={handleChange} value={formState.town}></input>
        </div>
    )
}

export default AreaTest;