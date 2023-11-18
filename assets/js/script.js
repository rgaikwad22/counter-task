// varable declaration for selectors
var counter = document.querySelectorAll(".counter");

// event declaration
window.addEventListener("load", function () {
    runCounter();
});

// function declaration
function runCounter() {
    counter.forEach(el => {
        var end = el.getAttribute("data-value");
        var count = 0;
        var interval = setInterval(function () {
            count++;
            el.innerHTML = count;
            console.log()
            if (count >= end) {
                clearInterval(interval);
            }
        }, 10);
    })
}