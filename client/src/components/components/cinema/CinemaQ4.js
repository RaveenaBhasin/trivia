import Q4 from '../../../assets/img/cinema/Q4.jpg'
import { useEffect } from 'react'

function CinemaQ4(props) {

    useEffect(() => {
        document.addEventListener('click', event => {
            if (event.target.parentNode.className === "questionAnswer") {
                // Question 4
                if (event.target.parentNode.getAttribute('question') === "CQ4") {
                    if (event.target.getAttribute('answer') === 'A1') {
                        const results = JSON.parse(sessionStorage.getItem('Cinema'))
                        results.Q4 = true
                        sessionStorage.setItem('Cinema', JSON.stringify(results))
                        props.setQuestion(5)
                    } else {
                        props.setQuestion(5)
                    }
                }
            }
        })
    }, [])

    return(
        <div className="questionContainer">
            <img src={Q4} alt="Man holding money"></img>
            <p className="questionText">Who is the highest-grossing actor of all time?</p>
            <div className="questionAnswer" question="CQ4">
                <div answer="A1">Samuel L. Jackson</div>
                <div answer="A2">Robert Downey Jr</div>
                <div answer="A3">Tom Hanks</div>
                <div answer="A4">Johnny Depp</div>
            </div>
        </div>
    )
} 

export default CinemaQ4