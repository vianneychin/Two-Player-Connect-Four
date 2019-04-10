const game = {
    currentPlayer:{},
    players:[
        {player:"Yellow", color: "yellow"},
        {player:"Blue", color:"blue"}
    ]
}
const $circle = $(".circle")
const $columns = $(`.column`)
const yellowToken = game.players[0]
const blueToken = game.players[1]
const setPlayer = () => {
    game.currentPlayer = game.players[0]
}
const switchPlayers = () =>{
    if (game.currentPlayer === yellowToken) {
        game.currentPlayer = blueToken
    } else if (game.currentPlayer === blueToken) {
        game.currentPlayer = yellowToken
    }
}
const checkVertical = (arrayOfColumn) => { 
    for (let i = 0; i < 3; i++) {
        if ((arrayOfColumn[i]).style.backgroundColor === game.currentPlayer.color &&
            (arrayOfColumn[i + 1]).style.backgroundColor === game.currentPlayer.color &&
            (arrayOfColumn[i + 2]).style.backgroundColor === game.currentPlayer.color &&
            (arrayOfColumn[i + 3]).style.backgroundColor === game.currentPlayer.color) {
                alert(`win`)
        }
    }
}