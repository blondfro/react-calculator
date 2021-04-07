import React, {useState} from 'react';
import InputField from "../common/InputField";
import Buttons from "./Buttons";

function Calculator() {
    const[currVal, setCurrVal] = useState('0');
    const[prevVal, setPrevVal] = useState('');
    const[formula, setFormula] = useState([]);
    const[operator, setOperator] = useState(false);
    const[decimal, setDecimal] = useState(true);
    const[evaluated, setEvaluated] = useState(false);

    const handleChange = (event) => {
        setCurrVal(event.target.value);
    }

    const handleClick = (event) => {
        setCurrVal(event.target.value);
    }

    const handleEval = () => {
        const data = [...formula, currVal];
        const result = data.join('');
        let answer = eval(result);
        answer = answer.toString();
        setCurrVal(answer);
        setFormula([...data, "=", answer]);
        setOperator(false);
        setEvaluated(true);
    }

    const handleNumbers = (event) => {
        if (currVal === '0') {
            setCurrVal(event.target.value);
            setFormula([]);
            setOperator(false);
        } else {
            setCurrVal(currVal + event.target.value);
            setOperator(false);
        }
    }

    const handleDecimal = (event) => {
        if (decimal === true) {
            setCurrVal(currVal + '.');
            setDecimal(false);
        }
    }

    const handleOperator = (event) => {
        if (evaluated) {
            setPrevVal(currVal);
            setFormula([currVal, event.target.value]);
            setCurrVal('');
            setDecimal(true);
            setOperator(true);
            setEvaluated(false);

        } else {
            if (!operator) {
                setPrevVal(currVal);
                setFormula(
                    [...formula, currVal, event.target.value]);
                setCurrVal('');
                setDecimal(true);
                setOperator(true);
                setEvaluated(false);
            } else {
                const tmpFormula = [...formula];
                tmpFormula.pop();
                setCurrVal('');
                setFormula([...tmpFormula, event.target.value]);
                setDecimal(true);
                setOperator(true);
                setEvaluated(false);
            }
        }
    }

    const handleClear = () => {
        setCurrVal('0');
        setPrevVal('');
        setFormula([]);
        setOperator(false);
        setDecimal(true);
        setEvaluated(false);
    }

    return (
        <div className="container">

            <div className="justify-content-center">
                <InputField
                    id="formula-display"
                    value={formula.join(' ')}
                    className="formula-display"
                />
                <InputField
                    id="display"
                    value={currVal}
                    className="display"
                />
                <Buttons
                    numbers={handleNumbers}
                    operators={handleOperator}
                    decimals={handleDecimal}
                    equals={handleEval}
                    clears={handleClear}
                    />
            </div>
        </div>
    )
}

export default Calculator;