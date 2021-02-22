import { useEffect, useState } from 'react'

import CinemaQ1 from '../components/cinema/CinemaQ1'
import CinemaQ2 from '../components/cinema/CinemaQ2'
import CinemaQ3 from '../components/cinema/CinemaQ3'
import CinemaQ4 from '../components/cinema/CinemaQ4'
import CinemaQ5 from '../components/cinema/CinemaQ5'
import CinemaResults from '../components/cinema/CinemaResults'

function Cinema() {
    const [question, setQuestion] = useState(1)

    return(
        <div className="questionPage">
            {question === 1 ? <CinemaQ1 setQuestion={setQuestion} /> : null}
            {question === 2 ? <CinemaQ2 setQuestion={setQuestion} /> : null}
            {question === 3 ? <CinemaQ3 setQuestion={setQuestion} /> : null}
            {question === 4 ? <CinemaQ4 setQuestion={setQuestion} /> : null}
            {question === 5 ? <CinemaQ5 setQuestion={setQuestion} /> : null}
            {question === 6 ? <CinemaResults /> : null}
        </div>
    )
}

export default Cinema