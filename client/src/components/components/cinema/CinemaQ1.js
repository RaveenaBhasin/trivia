import Q1 from '../../../assets/img/cinema/Q1.jpg'
import { useEffect } from 'react'

function CinemaQ1(props) {
    const CinemaData = {
        Q1: false,
        Q2: false,
        Q3: false,
        Q4: false,
        Q5: false
    }

    useEffect(() => {
        document.addEventListener('click', event => {
            if (event.target.parentNode.className === "questionAnswer") {
                // Question 1
                if (event.target.parentNode.getAttribute('question') === "CQ1") {
                    if (event.target.getAttribute('answer') === 'A2') {
                        CinemaData.Q1 = true
                        sessionStorage.setItem('Cinema', JSON.stringify(CinemaData))
                        props.setQuestion(2)
                    } else {
                        sessionStorage.setItem('Cinema', JSON.stringify(CinemaData))
                        props.setQuestion(2)
                    }
                }
            }
        })
    }, [])

    return(
        <div className="questionContainer">
            <img src={Q1} alt="Neo from The Matrix"></img>
            <p className="questionText">In The Matrix, does Neo take the blue pill or the red pill?</p>
            <div className="questionAnswer" question="CQ1">
                <div answer="A1">Blue Pill</div>
                <div answer="A2">Red Pill</div>
            </div>
        </div>
    )
} 

export default CinemaQ1