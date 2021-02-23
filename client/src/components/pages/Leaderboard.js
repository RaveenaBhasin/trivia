function Leaderboard(props) {

    return(
        <div className="leaderboardPage">
            <div className="scoreContainer">
                <div className="cinemaScores">
                        <a href="/">Home</a>
                        <h1 className="scoreTitle">Cinema</h1>
                        <table className="scoreTable">
                            <tr>
                                <th>Username:</th>
                                <th>Score:</th>
                            </tr>
                            {(JSON.parse(props.scores)).map(user => {
                                return(
                                    <tr>
                                        <td>{user.username}</td>
                                        <td>{user.score}</td>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard