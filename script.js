var ball = document.querySelector(".ball");
var rod1 = document.querySelector(".rod1");
var rod2 = document.querySelector(".rod2");
var rodHeight = rod1.offsetHeight;
var rodWidth = rod1.offsetWidth;
var ballDia = ball.offsetWidth;
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

window.addEventListener("keydown", function (e) {
    if (rod1.offsetLeft > 0 && (e.key.toLowerCase() == 'a' || e.key == 'ArrowLeft')) {
        rod1.style.left = parseInt(rod1.style.left || 0, 10) - 20 + 'px';
        rod2.style.left = rod1.style.left;
    }
    if (rod1.offsetLeft + rod1.offsetWidth < winWidth && (e.key.toLowerCase() == 'd' || e.key == 'ArrowRight')) {
        rod1.style.left = parseInt(rod1.style.left || 0, 10) + 20 + 'px';
        rod2.style.left = rod1.style.left;
    }
    if(e.key == "Enter"){
        let speedx = 2;
        let speedy = 2;
        let interval = setInterval(function () {
            winHeight = window.innerHeight;
            winWidth = window.innerWidth;
            let ballRec = ball.getBoundingClientRect();
            let ballx = ballRec.x;
            let bally = ballRec.y;

            if ((ballx + ballDia > winWidth) || (ballx < 0)) {
                speedy *= -1;
            }
            if ((ballDia + bally > winHeight) || (bally < 0)) {
                speedx *= -1;
            }
            if (bally <= rodHeight - 10) {
                speedx *= -1;
            }
            if (bally + ballDia >= winHeight - rodHeight + 10)
                speedx *= -1;

            ball.style.top = parseInt(ball.style.top || 0, 10) + speedx + 'px';
            ball.style.left = parseInt(ball.style.left || 0, 10) + speedy + 'px';
        }, 10);
    }
});
