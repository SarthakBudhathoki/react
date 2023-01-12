import {useState} from 'react'

const Button = (props) => {
    const {handleClick, text} = props
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const Statistics = (props) => {
    const {good, neutral, bad} = props
    return (
        <>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>  
        <p>All {}</p>
        <p>Average {}</p>
        </>
    )
}

const Feedback = () => {
    const[good, setGood] = useState(0)
    const[neutral, setNeutral] = useState(0)
    const[bad, setBad] = useState(0)

    const goodclick = () => setGood(good +1)
    const neutralclick = () => setNeutral(neutral +1)
    const badclick = () => setBad(bad +1)

    const resetGood = () => {setGood(0)}
    const resetNeutral = () => {setNeutral(0)}
    const resetBad = () => {setBad(0)}
    const resetAllClick = () => {
        setGood(0)
        setNeutral(0)
        setBad(0)
    }

    const all = () => good + neutral + bad

    return(
        <div>
            <h2>Give Feedback</h2>
            <p>
                <Button handleClick={goodclick} text={good}/>
            </p>
            <p>
            <button onClick={goodclick}> Good </button>
            <button onClick={neutralclick}> Neutral </button>
            <button onClick={badclick}> Bad </button>
            </p>
            <p>
            <button onClick={resetGood}>Reset Good </button>
            <button onClick={resetNeutral}>Reset Neutral </button>
            <button onClick={resetBad}>Reset Bad </button>
            <button onClick={resetAllClick}>Reset All </button>
            </p>

            <h2> Statistics</h2>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>All {good + neutral + bad}</p>
            <p>Average {(good-bad)/all()*100}%</p>
            <p>Positive {good / (good+neutral+bad)*100}%</p>

            <Statistics Good = {good} Neutral = {neutral} Bad = {bad}></Statistics>
        </div>
    )
}

export default Feedback
