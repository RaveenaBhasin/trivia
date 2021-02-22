import Q2 from '../../../assets/img/cinema/Q2.jpg'
import { useEffect } from 'react'

function CinemaQ2(props) {

    useEffect(() => {
        document.addEventListener('click', event => {
            if (event.target.parentNode.className === "questionAnswer") {
                // Question 2
                if (event.target.parentNode.getAttribute('question') === "CQ2") {
                    if (event.target.getAttribute('answer') === 'A2') {
                        const results = JSON.parse(sessionStorage.getItem('Cinema'))
                        results.Q2 = true
                        sessionStorage.setItem('Cinema', JSON.stringify(results))
                        props.setQuestion(3)
                    } else {
                        props.setQuestion(3)
                    }
                }
            }
        })
    }, [])

    return(
        <div className="questionContainer">
            <img src={Q2} alt="Fight Club Split Personality"></img>
            <p className="questionText">What is the name of The Narrators split personality in Fight Club?</p>
            <div className="questionAnswer" question="CQ2">
                <div answer="A1">Tyler Verdon</div>
                <div answer="A2">Tyler Durden</div>
                <div answer="A3">Tyler Yerdun</div>
                <div answer="A4">Tyler Burdon</div>
            </div>
        </div>
    )
} 

export default CinemaQ2