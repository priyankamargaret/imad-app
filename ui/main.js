console.log('Loaded!');


var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Move
var img = document.getElementById('madi');
function moveRight(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,100);
};