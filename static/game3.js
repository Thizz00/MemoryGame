const memoryGame = {
    tileCount : 36, 
    tileOnRow : 9, 
    divBoard : null, 
    divScore : null, 
    tiles : [], 
    tilesChecked : [], 
    moveCount : 0, 
    tilesImg : [ 

        "/static/LogosImages/apple-512.png",
        "/static/LogosImages/ebay-512.png",
        "/static/LogosImages/github-512.png",
        "/static/LogosImages/linkedin-512.png",
        "/static/LogosImages/netflix-2-512.png",
        "/static/LogosImages/paypal-512.png",
        "/static/LogosImages/reddit-512.png",
        "/static/LogosImages/revolut-512.png",
        "/static/LogosImages/shazam-512.png",
        "/static/LogosImages/soundcloud-512.png",
        "/static/LogosImages/stackoverflow-6-512.png",
        "/static/LogosImages/tumblr-512.png",
        "/static/LogosImages/viadeo-512.png",
        "/static/LogosImages/viber-512.png",
        "/static/LogosImages/vimeo-512.png",
        "/static/LogosImages/wordpress-512.png",
        "/static/LogosImages/yahoo-512.png",
        "/static/LogosImages/youtube-512.png"


    ],
    canGet : true, 
    tilePairs : 0,

    tileClick(e) {
        if (this.canGet) {
            if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
                this.tilesChecked.push(e.target);
                e.target.style.backgroundImage = `url(${this.tilesImg[e.target.dataset.cardType]})`;
            }

            if (this.tilesChecked.length === 2) {
                this.canGet = false;

                if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                    setTimeout(() => this.deleteTiles(), 500);
                } else {
                    setTimeout(() => this.resetTiles(), 500);
                }

                this.moveCount++;
                this.divScore.innerText = this.moveCount;
            }
        }
    },

    deleteTiles() {
        this.tilesChecked.forEach(el => {
            const emptyDiv = document.createElement("div");
            el.after(emptyDiv);
            el.remove();
        });

        this.canGet = true;
        this.tilesChecked = [];

        this.tilePairs++;

        if (this.tilePairs >= this.tileCount / 2) {
            alert("You have successfully guessed all the pictures");
        }
    },

    resetTiles() {
        this.tilesChecked.forEach(el => el.style.backgroundImage = "");
        this.tilesChecked = [];
        this.canGet = true;
    },

    startGame() {
        this.divBoard = document.querySelector(".game-board");
        this.divBoard.innerHTML = "";
        this.divScore = document.querySelector(".game-score");
        this.divScore.innerHTML = 0;

        this.tiles = [];
        this.tilesChecked = [];
        this.moveCount = 0;
        this.canGet = true;
        this.tilePairs = 0;
        for (let i=0; i<this.tileCount; i++) {
            this.tiles.push(Math.floor(i/2));
        }

        for (let i=this.tileCount-1; i>0; i--) {
            const swap = Math.floor(Math.random()*i);
            const tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }

        for (let i=0; i<this.tileCount; i++) {
            const tile = document.createElement("div");
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;

            tile.addEventListener("click", e => this.tileClick(e));
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".game-start");
    startBtn.addEventListener("click", e => memoryGame.startGame());
});