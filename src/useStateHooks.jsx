import { useState } from "react";

function USH() {
    const [name, setname] = useState("No-Name")
    console.log(name)

    function handleClick() {
        setname("Eward")
    }

    return (
        <>
            <button onClick={() => { handleClick() }}>click me</button>
            <div>{name}</div>
        </>
    )
}

export default USH