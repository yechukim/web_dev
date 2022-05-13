const display = document.querySelector(".clicked-cat");
const navi = document.querySelector(".navi");
const oreo = document.querySelector(".oreo");
const latte = document.querySelector(".latte");
const stray = document.querySelector(".stray");
const cookie = document.querySelector(".cookie");

let num = 0;

const bindEvent = (elem) => {
    elem.addEventListener(
        "click",
        (function (copy) {
            return function () {
                copy++;
                const name = elem.children[2];
                name.innerText = copy;
                display.src = elem.children[0].src;
            };
        })(num),
    );
};
bindEvent(navi);
bindEvent(oreo);
bindEvent(latte);
bindEvent(stray);
bindEvent(cookie);
