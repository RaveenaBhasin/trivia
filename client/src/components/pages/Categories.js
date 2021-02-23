import cinema_category from '../../assets/img/categories/cinema_category.jpg'
import music_category from '../../assets/img/categories/music_category.jpg'
import history_category from '../../assets/img/categories/history_category.jpg'
import science_category from '../../assets/img/categories/science_category.jpeg'
import { useEffect } from 'react'

function Categories() {
// Grabs category from clicked element and goes to category quiz
useEffect(() => {
    document.addEventListener('click', event => {
        if (event.target.parentNode.className === "categoryItem") {
            const page = event.target.parentNode.getAttribute('category');

            if (page === 'music' || page === 'history' || page === 'science') {
                return
            } else {
                window.location.href = `/${page}`
            }
        }
    })
}, []) 

    return(
        <div className="categoriesPage">
            <div className="categoriesContainer">
                <div className="categoryItem" category="cinema"><p>Cinema</p><img src={cinema_category} alt="Cinema Category"></img></div>
                <div className="categoryItem" category="music"><p>Music <span>Coming Soon</span></p><img src={music_category} alt="Music Category"></img></div>
                <div className="categoryItem" category="history"><p>History <span>Coming Soon</span></p><img src={history_category} alt="History Category"></img></div>
                <div className="categoryItem" category="science"><p>Science <span>Coming Soon</span></p><img src={science_category} alt="Science Category"></img></div>
            </div>
        </div>
    )
}

export default Categories