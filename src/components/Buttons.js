import React from 'react';
import Button from "../common/Button";

function Buttons({ numbers, operators, decimals, equals, clears}) {
    return (
        <div>
            <Button id="clear" value="AC" className="buttons clear-btn" click={clears}/>
            <Button id="divide" value="/" className="buttons operator-btn" click={operators}/>
            <Button id="multiply" value="*" className="buttons operator-btn"
                    click={operators}/>
            <Button id="seven" value="7" className="buttons" click={numbers}/>
            <Button id="eight" value="8" className="buttons" click={numbers}/>
            <Button id="nine" value="9" className="buttons" click={numbers}/>
            <Button id="subtract" value="-" className="buttons operator-btn"
                    click={operators}/>
            <Button id="four" value="4" className="buttons" click={numbers}/>
            <Button id="five" value="5" className="buttons" click={numbers}/>
            <Button id="six" value="6" className="buttons" click={numbers}/>
            <Button id="add" value="+" className="buttons operator-btn" click={operators}/>
            <Button id="one" value="1" className="buttons" click={numbers}/>
            <Button id="two" value="2" className="buttons" click={numbers}/>
            <Button id="three" value="3" className="buttons" click={numbers}/>
            <Button id="equals" value="=" className="buttons equal-btn" click={equals}/>
            <Button id="zero" value="0" className="buttons" click={numbers}/>
            <Button id="decimal" value="." className="buttons" click={decimals}/>
        </div>
    )
}

export default Buttons;