import Q5 from '../../../assets/img/cinema/Q5.jpg'
import { useEffect } from 'react'

function CinemaQ5(props) {

    useEffect(() => {
        document.addEventListener('click', event => {
            if (event.target.parentNode.className === "questionAnswer") {
                // Question 5
                if (event.target.parentNode.getAttribute('question') === "CQ5") {
                    if (event.target.getAttribute('answer') === 'A3') {
                        const results = JSON.parse(sessionStorage.getItem('Cinema'))
                        results.Q5 = true
                        sessionStorage.setItem('Cinema', JSON.stringify(results))
                        props.setQuestion(6)
                    } else {
                        props.setQuestion(6)
                    }
                }
            }
        })
    }, [])

    return(
        <div className="questionContainer">
            <img src={Q5} alt="James Bond"></img>
            <p className="questionText">What is the famous cocktail commonly ordered by James Bond?</p>
            <div className="questionAnswer" question="CQ5">
                <div answer="A1">Cosmopolitan</div>
                <div answer="A2">Mojito</div>
                <div answer="A3">Vesper Martini</div>
                <div answer="A4">Manhattan</div>
            </div>
        </div>
    )
} 

export default CinemaQ5