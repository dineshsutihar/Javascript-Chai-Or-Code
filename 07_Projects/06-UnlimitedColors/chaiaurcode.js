// generate a random color

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const startChangingColor = () => {

   intervalId= setInterval(chnageBgColor, 1000)
    function chnageBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = () => {
    clearInterval(intervalId);
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);