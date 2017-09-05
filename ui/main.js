console.log('Loaded!');


var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Move
var img = document.getElementById('madi');
img.onclick = function() {
    var interval = setInterval(moveleft,100);
};