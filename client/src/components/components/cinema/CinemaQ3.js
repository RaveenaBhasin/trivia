import Q3 from '../../../assets/img/cinema/Q3.jpg'
import { useEffect } from 'react'

function CinemaQ3(props) {

    useEffect(() => {
        document.addEventListener('click', event => {
            if (event.target.parentNode.className === "questionAnswer") {
                // Question 3
                if (event.target.parentNode.getAttribute('question') === "CQ3") {
                    if (event.target.getAttribute('answer') === 'A4') {
                        const results = JSON.parse(sessionStorage.getItem('Cinema'))
                        results.Q3 = true
                        sessionStorage.setItem('Cinema', JSON.stringify(results))
                        props.setQuestion(4)
                    } else {
                        props.setQuestion(4)
                    }
                }
            }
        })
    }, [])

    return(
        <div className="questionContainer">
            <img src={Q3} alt="Astronaut"></img>
            <p className="questionText">What is the name of Stanley Kubrick's 1968 movie about space travel?</p>
            <div className="questionAnswer" question="CQ3">
                <div answer="A1">Arrival</div>
                <div answer="A2">Apollo 13</div>
                <div answer="A3">Solaris</div>
                <div answer="A4">2001: A Space Odyssey</div>
            </div>
        </div>
    )
} 

export default CinemaQ3