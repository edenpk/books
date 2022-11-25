import React, { useState, useEffect } from "react"
import "./CountButton.css"


const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => {
    if(currentCount ===10) {
        alert("The count is 10")
    }
    
    }, [currentCount])

    const buttonStyles = {

        background: props.buttonColor,
        borderRadius: props.borderRadius,
    }

return  (
<div>
<button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
<div className={"count-display"}> {currentCount}</div>
</div>

)
}

export default CountButton