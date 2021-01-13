import React, { useState } from 'react'

const FindTribe = () => {
    const [zip, setZip] = useState({
        zip: ""
    })

    const changeHandler = (event) => {
        setZip({...zip, [event.target.name]: event.target.value})
        console.log("change!")
    }

    const submitHandler = (event) => {
        console.log("submit!", zip)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    name='zip'
                    type='text'
                    value={zip.zip}
                    onChange={changeHandler}
                    placeholder='enter zip'
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default FindTribe
