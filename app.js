document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const width = 28;
    let score = 0;
    const startGame = document.querySelector('.start');

    // grid layout and squares
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];

    const squares = [];
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty
    startGame.addEventListener('click', () => {
        window.location.reload();
    
    });
    // draw and render the grid
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);

            // add layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot');
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall');
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair');
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet');
            }
        }
    }
    createBoard();

    // start position of pacman
    let pacmanCurrentIndex = 490;
    squares[pacmanCurrentIndex].classList.add('pacman');

    // move pacman
    
    
    
    
    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove('pacman');
        switch (e.keyCode) {
            case 37:
                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= 1;
                if (squares[pacmanCurrentIndex - 1] === squares[363]) {
                    pacmanCurrentIndex = 391;
                }
                break;
            case 38:
                if (
                    pacmanCurrentIndex - width >= 0 &&
                            !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                            !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                ) 
                    pacmanCurrentIndex -= width;
                break;
            case 39:
                if (
                    pacmanCurrentIndex % width < width - 1 &&
                                    !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                                    !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += 1;
                if (squares[pacmanCurrentIndex + 1] === squares[392]) {
                    pacmanCurrentIndex = 364;
                }
                break;
            case 40:
                if (
                    pacmanCurrentIndex + width < width * width &&
                                            !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                                            !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += width;
                break;
        }
        squares[pacmanCurrentIndex].classList.add('pacman');
        pacDotEaten();
        powerPelletEaten();
        checkForGameOver();
                                        // checkForWin();
    }
    document.addEventListener('keyup', movePacman);


    //when pacman eats a pacdot
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++;
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove('pac-dot');
        }
    }


    // power pellet eaten
    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10;
            ghosts.forEach(ghost => ghost.isScared = true);
            setTimeout(unScareGhosts, 10000);
            squares[pacmanCurrentIndex].classList.remove('power-pellet');
        }
    }

    // unscared ghosts
    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false);
    }


    //create ghosts using Constructors
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.isScared = false;
            this.timerId = NaN;
            this.isScared = false;
        }
    }
    
      //all my ghosts
    const ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ];
    
      //draw my ghosts onto the grid
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');
    });

    //move ghost function
    ghosts.forEach(ghost => moveGhost(ghost));

    //move the ghosts
    function moveGhost(ghost) {
        const directions = [-1, +1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];
    
        ghost.timerId = setInterval(function() {
          //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
            if (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
            !squares[ghost.currentIndex + direction].classList.contains('wall')) {
              //remove the ghosts classes
                squares[ghost.currentIndex].classList.remove(ghost.className);
                squares[ghost.currentIndex].classList.remove('ghost', 'scaredGhost');
              //move into that space
                ghost.currentIndex += direction;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
          //else find a new random direction ot go in
            } else direction = directions[Math.floor(Math.random() * directions.length)];
    
          //if the ghost is currently scared
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scaredGhost');
            }
    
          //if the ghost is currently scared and pacman is on it
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scaredGhost');
                ghost.currentIndex = ghost.startIndex;
                score += 100;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }
            checkForGameOver;
        }, ghost.speed);
    }

    function checkForGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') && 
        !squares[pacmanCurrentIndex].classList.contains('scaredGhost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener('keyup', movePacman);
            scoreDisplay.innerHTML = 'Game Over';
        }

    }





    














});
