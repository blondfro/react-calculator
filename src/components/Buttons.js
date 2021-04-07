import React from 'react';
import Button from "../common/Button";

function Buttons({ numbers, operators, decimals, equals, clears}) {
    return (
        <div>
            <Button id="clear" value="AC" className="clear-btn" click={clears}/>
            <Button id="divide" value="/" className="button" click={operators}/>
            <Button id="multiply" value="*" className="button" click={operators}/>
            <Button id="seven" value="7" className="button" click={numbers}/>
            <Button id="eight" value="8" className="button" click={numbers}/>
            <Button id="nine" value="9" className="button" click={numbers}/>
            <Button id="subtract" value="-" className="button" click={operators}/>
            <Button id="four" value="4" className="button" click={numbers}/>
            <Button id="five" value="5" className="button" click={numbers}/>
            <Button id="six" value="6" className="button" click={numbers}/>
            <Button id="add" value="+" className="button" click={operators}/>
            <Button id="one" value="1" className="button" click={numbers}/>
            <Button id="two" value="2" className="button" click={numbers}/>
            <Button id="three" value="3" className="button" click={numbers}/>
            <Button id="equals" value="=" className="button" click={equals}/>
            <Button id="zero" value="0" className="button" click={numbers}/>
            <Button id="decimal" value="." className="button" click={decimals}/>
        </div>
    )
}

export default Buttons;