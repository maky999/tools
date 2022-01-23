clear();
    var n = 100000; //so lan vong lap
function doScaledTimeout(i) {
    var t = Math.floor((Math.random() * 4) + 1);
    var tok = t * 1000;
    var ie = Math.floor(Math.random() * 1);
    var aeq = [".j23y7wrc>div", ".j23y7wrc.scb9dxdr.dflh9lhu>div"];
    setTimeout(function () {
        document.querySelector(aeq[ie]).click();
    }, i + tok);
}
for (let i = 1; i <= 5000; i++) {
    doScaledTimeout(i)
}
