import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useRef } from 'react';

function User() {

    const [name, setName] = useState('')
    const refUser = React.useRef("Рузиля")

    React.useEffect(() => {
        document.title = name
        refUser.current = name
    },
    [name])

    React.useEffect(() => {
        const userName = localStorage.getItem("userName")

        if (userName !== null) {
            setName(userName)
        }
        return() => {
            localStorage.setItem("userName", refUser.current)
            console.log("saved")
        }
    },
    [])

    function changeName(event) {
        setName(event.target.value)
    }

    const unmount = () => ShadowRoot.unmount()

    return (
        <input value={name} onChange={changeName} style={{marginBottom:"10px"}} type="text" placeholder='Name:' />
    )

}

export default User;