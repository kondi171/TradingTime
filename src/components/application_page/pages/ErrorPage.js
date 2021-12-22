import React from 'react'
import { Link } from 'react-router-dom';
class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameState: false,
        };
    }

    componentDidMount() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
        this.ballRadius = 10;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;

        this.brickRowCount = 3;
        this.brickColumnCount = 5;
        this.brickWidth = 75;
        this.brickHeight = 20;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;

        this.score = 0;
        this.lives = 3;
        this.bricks = [];
        for (let c = 0; c < this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for (let r = 0; r < this.brickRowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }

        this.moveInterval = setInterval(() => {
            this.keyHandlers();
            this.draw();
        }, 10);
    }

    keyHandlers = () => {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
        document.addEventListener("mousemove", this.mouseMoveHandler, false);
    }

    keyDownHandler = (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        }
        else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
    }
    keyUpHandler = (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = false;
        }
        else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
    }
    mouseMoveHandler = (e) => {
        let relativeX = e.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.paddleX = relativeX - this.paddleWidth / 2;
        }
    }

    drawScore = () => {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: " + this.score, 8, 20);
    }

    drawLives = () => {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
    }

    drawBall = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawPaddle = () => {
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawBricks = () => {
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                if (this.bricks[c][r].status === 1) {
                    let brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
                    let brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
                    this.bricks[c][r].x = brickX;
                    this.bricks[c][r].y = brickY;
                    this.ctx.beginPath();
                    this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
                    this.ctx.fillStyle = "#0095DD";
                    this.ctx.fill();
                    this.ctx.closePath();
                }
            }
        }
    }

    collisionDetection = () => {
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                let b = this.bricks[c][r];
                if (b.status === 1) {
                    if (this.x > b.x && this.x < b.x + this.brickWidth && this.y > b.y && this.y < b.y + this.brickHeight) {
                        this.dy = -this.dy;
                        b.status = 0;
                        this.score++;
                        if (this.score === this.brickRowCount * this.brickColumnCount) {
                            alert("YOU WIN, CONGRATS!");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }

    draw = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBall();
        this.drawPaddle();
        this.drawBricks();
        this.collisionDetection();
        this.drawScore();
        this.drawLives();
        if (this.x + this.dx > this.canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        }
        else if (this.y + this.dy > this.canvas.height - this.ballRadius) {
            if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
                this.dy = -this.dy;
            }
            else {
                this.lives--;
                if (!this.lives) {
                    alert("GAME OVER");
                    document.location.reload();
                    clearInterval(this.moveInterval);
                }
                else {
                    this.x = this.canvas.width / 2;
                    this.y = this.canvas.height - 30;
                    this.dx = 2;
                    this.dy = -2;
                    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
                }

            }
        }

        if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
            this.paddleX += 7;
        }
        else if (this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }

        this.x += this.dx;
        this.y += this.dy;
    }

    componentWillUnmount() {
        clearInterval(this.moveInterval);
    }

    render() {
        return (
            <div className="error-page">
                <h1>Teraz to nawet ja nie wiem gdzie jesteś</h1>
                <h2>Może chcesz się rozerwać? <i className="fa fa-gamepad"></i></h2>
                <h3>Błąd 404</h3>
                <h4><Link to='/'>Powróć w bezpieczne miejsce</Link></h4>
                <canvas className="game" id="game" width="480" height="320"></canvas>
                <div className="info-modal" id="infoModal">
                    <i className="fa fa-info-circle"></i> <span id="infoMessage">{this.state.infoVissible ? this.infoMessage : ''} </span>
                </div>
            </div>
        )
    }
}
export default ErrorPage;