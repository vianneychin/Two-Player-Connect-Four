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
                alert(`${game.currentPlayer.color} wins`)
        }
    }
}
const checkHorizontal = (columns, index) => {
    for (let i = 0; i < 5; i++) {
        if ($(columns[i]).children()[index].style.backgroundColor === game.currentPlayer.color &&
            $(columns[i+1]).children()[index].style.backgroundColor === game.currentPlayer.color &&
            $(columns[i+2]).children()[index].style.backgroundColor === game.currentPlayer.color &&
            $(columns[i+3]).children()[index].style.backgroundColor === game.currentPlayer.color) {
                alert(`${game.currentPlayer.color} wins`)
            }
    }
}
const checkDiagonal = () => {
    let consecutiveDiagonalCount = 0
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 7; col++) {
            let count = 0
            if ($columns[col].children[row].style.backgroundColor === game.currentPlayer.color) {
                if (col < 4) {
                    for (let num = 0; num < 4; num++) {
                        if ($columns[col + num].children[row + num].style.backgroundColor === game.currentPlayer.color) {
                            count++
                        }
                    }
                }
                if (col >= 3 && count != 4) {
                    count = 0
                    for (let num = 0; num < 4; num++) {
                        if ($columns[col - num].children[row + num].style.backgroundColor === game.currentPlayer.color) {
                            count++
                        }
                    }
                }
                if (count === 4) {
                    consecutiveDiagonalCount = 1
                    count = 0
                    alert(`${game.currentPlayer.color} wins`)
                    break
                }
            }
        }
        if (consecutiveDiagonalCount === 1) {
            break
        }
    }
}
$columns.click((e => {
    let $column = $(e.currentTarget).children()
    for (let i = $(e.currentTarget).children().length - 1; i >= 0; i--) {
            if ($(e.currentTarget).children()[i].style.backgroundColor === "") {
                $(e.currentTarget).children()[i].style.backgroundColor = game.currentPlayer.color

                checkVertical($column)
                checkHorizontal($columns, i)
                checkDiagonal()
                switchPlayers()
                return
            }
        }
    }
))
setPlayer()
