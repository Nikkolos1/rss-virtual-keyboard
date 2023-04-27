let keyboard = [];
// document.onkeypress = function(event){
//     // console.log(event);
//     keyboard.push(event.CharCode);
//     console.log(keyboard);


function init(){
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i == 12 || i == 24); {
            out += '<div class="clearfix"></div>';
        }
        out +='<div class="k-key" data=" '+keyboard[i]+'" >'+String.fromCharCode(keyboard[i])+'</div>';

    }
    document.querySelector('keyboard').innerHTML = out;

}

init()

document.onkeypress = function (event) {
    console.log(event.code);
    console.log(event.KeyCode);
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .k-key[data="'+event.keyCode+'"]').classList.add('active');
    
}

document.querySelectorAll('keyboard .k-key').forEach(function (element) {
element.onclick = function(event) {
    document.querySelectorAll ('#keyboard .k-key').forEach(function (element) {

    });
    let cvode = this.getAttribute('data');
    this.classList.add('active');
    console.log(code);
}
});