import couch1 from '../images/couchObjects/couch1.png';
import couch2 from '../images/couchObjects/couch2.png';
import couch3 from '../images/couchObjects/couch3.png';
import couch4 from '../images/couchObjects/couch4.png';
import couch5 from '../images/couchObjects/couch5.png';
import couch6 from '../images/couchObjects/couch6.png';
import couch7 from '../images/couchObjects/couch7.png';
import couch8 from '../images/couchObjects/couch8.png';
import couch9 from '../images/couchObjects/couch9.png';
import couch10 from '../images/couchObjects/couch10.png';
import couch11 from '../images/couchObjects/couch11.png';
import couch12 from '../images/couchObjects/couch12.png';
import couch13 from '../images/couchObjects/couch13.png';
import couch14 from '../images/couchObjects/couch14.png';
import couch15 from '../images/couchObjects/couch15.png';
import couch16 from '../images/couchObjects/couch16.png';
import couch17 from '../images/couchObjects/couch17.png';
import couch18 from '../images/couchObjects/couch18.png';
import couch19 from '../images/couchObjects/couch19.png';
import Title from '../images/dacouchtitle.png'
import littleTitle from '../images/маленькая надпись.png'

const Sketch = (p) => {

    let numBalls = 2;
    // let spring = 0.05;
    let friction = -0.7;
    let balls = [];
    let buttonAdd;
    let buttonRemove;
    let title;
    let currentWidth;
    let currentHeight;
    let couches = [];
    let windowSize;

    p.preload = () => {
        couches[0] = p.loadImage(couch10);
        couches[1] = p.loadImage(couch1);
        couches[2] = p.loadImage(couch2);
        couches[3] = p.loadImage(couch3);
        couches[4] = p.loadImage(couch4);
        couches[5] = p.loadImage(couch5);
        couches[6] = p.loadImage(couch6);
        couches[7] = p.loadImage(couch7);
        couches[8] = p.loadImage(couch8);
        couches[9] = p.loadImage(couch9);
        couches[10] = p.loadImage(couch19);
        couches[11] = p.loadImage(couch11);
        couches[12] = p.loadImage(couch12);
        couches[13] = p.loadImage(couch13);
        couches[14] = p.loadImage(couch14);
        couches[15] = p.loadImage(couch15);
        couches[16] = p.loadImage(couch16);
        couches[17] = p.loadImage(couch17);
        couches[18] = p.loadImage(couch18);
    }

    p.setup = () => {
        currentWidth = window.innerWidth;
        currentHeight = window.innerHeight;
        if(window.innerWidth >= 1130) {
            p.createCanvas(window.innerWidth, window.innerHeight - window.innerHeight / 16.6);
        } else if (window.innerWidth < 1130 && window.innerWidth > 500) {
            p.createCanvas(window.innerWidth, 1024);
        } else {
            p.createCanvas(window.innerWidth, 800);
        }
        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);
        p.imageMode(p.CENTER);
        for (let i = 0; i < numBalls; i++) {
            balls[i] = new Ball(
                p.random(p.width),
                p.random(p.height),
                window.innerWidth > 820 ? p.random(110, 180) : p.random(85, 115),
                i,
                balls,
                couches[p.floor(p.random(19))]);
            p.translate(balls[i].x, balls[i].y);
        }
        p.noStroke();
        p.fill(p.random(256), p.random(256), p.random(256));

        p.createControls();

    }

    p.createControls = () => {
        if (window.innerWidth >= 820) {

            windowSize = 1;

            title = p.createImg(Title);
            title.position(p.width / 2 - 267, p.height / 2 - 180);

            buttonAdd = p.createButton("Spawn couch");
            buttonAdd.mousePressed(p.addNewBall);

            buttonRemove = p.createButton("Kill couch");
            buttonRemove.mousePressed(p.removeBall);

            buttonAdd.position(p.width / 2 - 170, p.height / 2 + 150);
            buttonRemove.position(p.width / 2 + 60, p.height / 2 + 150);

            buttonAdd.style('font-size', '15px');
            buttonRemove.style('font-size', '15px');

            buttonAdd.style('height', '40px');
            buttonRemove.style('height', '40px');

            buttonAdd.style('border-radius', '8px');
            buttonRemove.style('border-radius', '8px');

            buttonAdd.style('width', '120px');
            buttonRemove.style('width', '120px');

        } else {

            windowSize = 0;

            title = p.createImg(littleTitle);
            title.position(p.width / 2 - 98, p.height / 2 - 120);

            buttonAdd = p.createButton("Spawn couch");
            buttonAdd.mousePressed(p.addNewBall);

            buttonRemove = p.createButton("Kill couch");
            buttonRemove.mousePressed(p.removeBall);

            buttonAdd.position(p.width / 2 - 100, p.height / 2 + 60);
            buttonRemove.position(p.width / 2 + 20, p.height / 2 + 60);

            buttonAdd.style('font-size', '10px');
            buttonRemove.style('font-size', '10px');

            buttonAdd.style('height', '30px');
            buttonRemove.style('height', '30px');

            buttonAdd.style('border-radius', '6px');
            buttonRemove.style('border-radius', '6px');

            buttonAdd.style('width', '82px');
            buttonRemove.style('width', '82px');
        }


        buttonAdd.style('color', 'white');
        buttonRemove.style('color', 'white');

        buttonAdd.style('font-weight', 'bold');
        buttonRemove.style('font-weight', 'bold');

        buttonAdd.style('font-family', 'Quicksand');
        buttonRemove.style('font-family', 'Quicksand');

        buttonAdd.style('background-color', '#8C8CBF');
        buttonRemove.style('background-color', '#8C8CBF');

        // buttonAdd.style('border', 'none');
        // buttonRemove.style('border', 'none');

        if (numBalls <= 0) {

            buttonRemove.style('opacity', '0.6');
            buttonRemove.style('cursor', 'not-allowed');

            buttonAdd.style('cursor', 'pointer');

        } else if (numBalls > 20) {

            buttonAdd.style('opacity', '0.6');
            buttonAdd.style('cursor', 'not-allowed');

            buttonRemove.style('cursor', 'pointer');

        } else {

            buttonAdd.style('cursor', 'pointer');
            buttonRemove.style('cursor', 'pointer');

        }
    }

    p.mousePressed = () => {
        for (var i = 0; i < balls.length; i++) {
            if (p.mouseX <= balls[i].x + balls[i].diameter / 2
                && p.mouseX >= balls[i].x - balls[i].diameter / 2
                && p.mouseY <= balls[i].y + balls[i].diameter / 2
                && p.mouseY >= balls[i].y - balls[i].diameter / 2) {
                balls[i].grabbed = true;
            }
        }
        p.print(couches);
    }

    p.touchMoved = () => {
        for (var i = 0; i < balls.length; i++) {
            if (balls[i].grabbed === true) {
                return false;
            }
        }
    }

    p.mouseReleased = () => {
        for (var i = 0; i < balls.length; i++) {
            if (balls[i].grabbed === true) {
                balls[i].grabbed = false;
                balls[i].vx = balls[i].draggingVelX / 6;
                balls[i].vy = balls[i].draggingVelY / 6;
            }
        }
    }

    p.followMouse = () => {
        for (var i = 0; i < balls.length; i++) {
            p.push();
            if (balls[i].grabbed === true) {
                var tempPosX = balls[i].x
                var tempPosY = balls[i].y
                balls[i].x = p.mouseX;
                balls[i].y = p.mouseY;
                balls[i].draggingVelX = (tempPosX - balls[i].x) * -1;
                balls[i].draggingVelY = (tempPosY - balls[i].y) * -1;
            }
            p.pop();
        }
    }

    p.draw = () => {
        p.clear();
        balls.forEach(ball => {
            ball.collide();
            ball.move();
            ball.rotate();
        });
        p.followMouse();
        if (window.innerWidth >= 1130) {
            if (window.innerWidth !== currentWidth || window.innerHeight !== currentHeight) {
                p.createCanvas(window.innerWidth, window.innerHeight - window.innerHeight / 16.6);
                balls.forEach(ball => {
                    ball.rotate();
                });
                if (windowSize === 0) {
                    title.remove();
                    buttonAdd.remove();
                    buttonRemove.remove();
                    p.createControls();
                    windowSize = 1;
                }
                title.position(p.width / 2 - 267, p.height / 2 - 180);
                buttonAdd.position(p.width / 2 - 170, p.height / 2 + 150);
                buttonRemove.position(p.width / 2 + 60, p.height / 2 + 150);
                currentWidth = window.innerWidth;
                currentHeight = window.innerHeight;
            }
        } else {
            // if (window.innerHeight !== currentHeight) {
                // p.createCanvas(currentWidth, window.innerHeight-window.innerHeight/16.8);
                // balls.forEach(ball => {
                //     ball.rotate();
                // });
                // if (windowSize === 1) {
                //     title.remove();
                //     buttonAdd.remove();
                //     buttonRemove.remove();
                //     p.createControls();
                //     windowSize = 0;
                // }
                // title.position(window.innerWidth / 2 - 98, window.innerHeight / 2 - 120);
                // buttonAdd.position(window.innerWidth / 2 - 100, window.innerHeight / 2 + 60);
                // buttonRemove.position(window.innerWidth / 2 + 20, window.innerHeight / 2 + 60);
                // currentHeight = window.innerHeight;
            // }
        }
    }

    p.removeBall = () => {
        title.remove();
        buttonAdd.remove();
        buttonRemove.remove();
        if (numBalls > 0) {
            balls.shift();
            numBalls -= 1;
            for (var i = 0; i < balls.length; i++) {
                balls[i].id = i;
            }
        }
        p.createControls();
    }

    p.addNewBall = () => {
        title.remove();
        buttonAdd.remove();
        buttonRemove.remove();
        if (numBalls <= 20) {
            let randimg = p.floor(p.random(18));
            let b = new Ball(
                p.random(p.width),
                p.random(p.height),
                window.innerWidth > 820 ? p.random(110, 180) : p.random(85, 115),
                balls.length,
                balls,
                couches[randimg]
            );
            balls.push(b);
            numBalls += 1;
        }
        p.createControls();
    }

    class Ball {
        constructor(xin, yin, din, idin, oin, imgin) {
            this.x = xin;
            this.y = yin;
            this.vx = p.random(-1, 2);
            this.vy = p.random(-1, 2);
            this.diameter = din;
            this.id = idin;
            this.others = oin;
            this.rotationDir = p.floor(p.random(6));
            if (this.rotationDir === 0) this.rotationAngle = -0.75;
            if (this.rotationDir === 1) this.rotationAngle = -0.5;
            if (this.rotationDir === 2) this.rotationAngle = -1;
            if (this.rotationDir === 3) this.rotationAngle = 1;
            if (this.rotationDir === 4) this.rotationAngle = 0.5;
            if (this.rotationDir === 5) this.rotationAngle = 0.75;
            this.rotation = 48;
            this.draggingVelX = this.vx;
            this.draggingVelY = this.vy;
            this.img = imgin;
        }

        collide() {
            for (let i = this.id + 1; i < numBalls; i++) {
                let dx = this.others[i].x - this.x;
                let dy = this.others[i].y - this.y;
                let distance = p.sqrt(dx * dx + dy * dy);
                let minDist = this.others[i].diameter / 2 + this.diameter / 2 + this.diameter / 8;
                if (distance < minDist) {
                    let angle = p.atan2(dy, dx);
                    let targetX = this.x + p.cos(angle) * minDist;
                    let targetY = this.y + p.sin(angle) * minDist;
                    let ax = (targetX - this.others[i].x) / 10;
                    let ay = (targetY - this.others[i].y) / 10;
                    this.vx = (this.vx - ax);
                    this.vy = (this.vy - ay);
                    this.others[i].vx = (this.others[i].vx + ax);
                    this.others[i].vy = (this.others[i].vy + ay);
                }
            }
        }

        move() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x + this.diameter / 2 > p.width + 220) {
                this.x = p.width + 120;
                this.vx *= friction;
            } else if (this.x - this.diameter / 2 < -220) {
                this.x = -120;
                this.vx *= friction;
            }
            if (this.y + this.diameter / 2 > p.height + 220) {
                this.y = p.height + 120;
                this.vy *= friction;
            } else if (this.y - this.diameter / 2 < -220) {
                this.y = -120;
                this.vy *= friction;
            }

        }

        rotate() {
            p.push();
            p.translate(this.x, this.y);
            p.rotate(this.rotation);
            p.translate(-this.x, -this.y);
            window.innerWidth >= 820 ? p.image(this.img, this.x, this.y, this.diameter + 60, this.diameter + 60) : p.image(this.img, this.x, this.y, this.diameter + 30, this.diameter + 30);
            this.rotation += this.rotationAngle;
            p.pop();
        }
    }

}

export default Sketch;