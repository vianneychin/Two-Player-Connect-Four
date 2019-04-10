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